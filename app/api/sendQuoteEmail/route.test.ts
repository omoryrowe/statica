import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const sendMailMock = vi.fn();

vi.mock("nodemailer", () => ({
  default: {
    createTransport: vi.fn(() => ({ sendMail: sendMailMock })),
  },
}));

const baseBody = {
  name: "Jane Doe",
  businessName: "Doe Plumbing",
  email: "jane@example.com",
  phone: "",
  existingWebsite: "",
  need: "New website",
  setup: "One Page Website",
  setupId: "one-page",
  monthly: "Not sure yet",
  interest: "",
  projectDetails: "Need a simple one-pager.",
};

function jsonRequest(body: Record<string, unknown>) {
  return new Request("http://localhost/api/sendQuoteEmail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

function mockGhlFetch(handlers: {
  upsertContact?: () => unknown;
  searchOpportunities?: () => unknown;
  createOpportunity?: () => unknown;
  createNote?: () => unknown;
}) {
  return vi.fn(async (input: RequestInfo | URL) => {
    const url = typeof input === "string" ? input : input.toString();
    if (url.includes("/contacts/upsert")) {
      return jsonResponse(handlers.upsertContact?.() ?? { new: true, contact: { id: "contact-1" } });
    }
    if (url.includes("/opportunities/search")) {
      return jsonResponse(handlers.searchOpportunities?.() ?? { opportunities: [] });
    }
    if (url.includes("/opportunities/") && !url.includes("search")) {
      return jsonResponse(
        handlers.createOpportunity?.() ?? { opportunity: { id: "opp-1" } }
      );
    }
    if (url.includes("/notes")) {
      return jsonResponse(handlers.createNote?.() ?? { id: "note-1" });
    }
    throw new Error(`Unexpected GHL URL in test: ${url}`);
  });
}

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

describe("POST /api/sendQuoteEmail", () => {
  const originalFetch = global.fetch;
  const originalEnv = { ...process.env };

  beforeEach(() => {
    vi.resetModules();
    sendMailMock.mockReset();
    sendMailMock.mockResolvedValue({ messageId: "test" });
    process.env = {
      ...originalEnv,
      GMAIL_USER: "sender@example.com",
      GMAIL_APP_PASS: "app-pass",
      QUOTE_INBOX: "inbox@example.com",
      GHL_PRIVATE_INTEGRATION_TOKEN: "test-token",
      GHL_LOCATION_ID: "loc-1",
      GHL_PIPELINE_ID: "pipeline-1",
      GHL_NEW_LEAD_STAGE_ID: "stage-1",
    };
  });

  afterEach(() => {
    global.fetch = originalFetch;
    process.env = originalEnv;
    vi.restoreAllMocks();
  });

  it("creates a contact, opportunity, and note for a new submission", async () => {
    const fetchMock = mockGhlFetch({});
    global.fetch = fetchMock as unknown as typeof fetch;

    const { POST } = await import("./route");
    const res = await POST(jsonRequest(baseBody));
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.message).toMatch(/sent successfully/i);
    expect(data.reference).toMatch(/^Q-/);
    expect(sendMailMock).toHaveBeenCalledTimes(1);

    const urls = fetchMock.mock.calls.map((c) => c[0].toString());
    expect(urls.some((u) => u.includes("/contacts/upsert"))).toBe(true);
    expect(urls.some((u) => u.includes("/opportunities/search"))).toBe(true);
    expect(urls.some((u) => u.includes("/notes"))).toBe(true);
    // No opportunity create call besides the search — verify a POST to /opportunities/ happened.
    const createCall = fetchMock.mock.calls.find(
      (c) => c[0].toString().includes("/opportunities/") && !c[0].toString().includes("search")
    );
    expect(createCall).toBeTruthy();
    const createBody = JSON.parse((createCall![1] as RequestInit).body as string);
    expect(createBody.monetaryValue).toBe(750);
    expect(createBody.name).toBe("Doe Plumbing Website Inquiry");
    expect(createBody.pipelineStageId).toBe("stage-1");
  });

  it("adds a note instead of creating a duplicate opportunity for an existing contact/opportunity", async () => {
    const fetchMock = mockGhlFetch({
      searchOpportunities: () => ({
        opportunities: [{ id: "existing-opp", status: "open", pipelineStageId: "stage-2" }],
      }),
    });
    global.fetch = fetchMock as unknown as typeof fetch;

    const { POST } = await import("./route");
    const res = await POST(jsonRequest(baseBody));
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.message).toMatch(/sent successfully/i);

    const createCall = fetchMock.mock.calls.find(
      (c) => c[0].toString().includes("/opportunities/") && !c[0].toString().includes("search")
    );
    expect(createCall).toBeUndefined();

    const noteCall = fetchMock.mock.calls.find((c) => c[0].toString().includes("/notes"));
    expect(noteCall).toBeTruthy();
    const noteBody = JSON.parse((noteCall![1] as RequestInit).body as string);
    expect(noteBody.body).toMatch(/repeat inquiry/i);
  });

  it("coalesces repeated submissions carrying the same idempotency key", async () => {
    const fetchMock = mockGhlFetch({});
    global.fetch = fetchMock as unknown as typeof fetch;

    const { POST } = await import("./route");
    const body = { ...baseBody, idempotencyKey: "same-key-123" };

    const [res1, res2] = await Promise.all([POST(jsonRequest(body)), POST(jsonRequest(body))]);
    const [data1, data2] = await Promise.all([res1.json(), res2.json()]);

    expect(res1.status).toBe(200);
    expect(res2.status).toBe(200);
    expect(data1.reference).toBe(data2.reference);
    expect(sendMailMock).toHaveBeenCalledTimes(1);

    const upsertCalls = fetchMock.mock.calls.filter((c) => c[0].toString().includes("/contacts/upsert"));
    expect(upsertCalls).toHaveLength(1);
  });

  it("omits blank optional fields from the contact upsert payload", async () => {
    const fetchMock = mockGhlFetch({});
    global.fetch = fetchMock as unknown as typeof fetch;

    const { POST } = await import("./route");
    await POST(jsonRequest(baseBody));

    const upsertCall = fetchMock.mock.calls.find((c) => c[0].toString().includes("/contacts/upsert"));
    const upsertBody = JSON.parse((upsertCall![1] as RequestInit).body as string);
    expect(upsertBody).not.toHaveProperty("phone");
    expect(upsertBody).not.toHaveProperty("website");
    expect(upsertBody).not.toHaveProperty("tags");
    expect(upsertBody).not.toHaveProperty("dnd");
  });

  it("still sends the Gmail notification with a CRM warning when GHL fails", async () => {
    const fetchMock = vi.fn(async () => new Response("server error", { status: 500 }));
    global.fetch = fetchMock as unknown as typeof fetch;

    const { POST } = await import("./route");
    const res = await POST(jsonRequest(baseBody));
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.message).toMatch(/sent successfully/i);
    expect(sendMailMock).toHaveBeenCalledTimes(1);
    const mailArgs = sendMailMock.mock.calls[0][0];
    expect(mailArgs.html).toMatch(/CRM sync warning/i);
    expect(mailArgs.text).toMatch(/CRM SYNC WARNING/i);
  });

  it("still reports success when Gmail fails but GHL succeeds", async () => {
    const fetchMock = mockGhlFetch({});
    global.fetch = fetchMock as unknown as typeof fetch;
    sendMailMock.mockRejectedValue(new Error("gmail down"));

    const { POST } = await import("./route");
    const res = await POST(jsonRequest(baseBody));
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.message).toMatch(/sent successfully/i);
  });

  it("returns a retry message without internal details when both destinations fail", async () => {
    const fetchMock = vi.fn(async () => new Response("server error", { status: 500 }));
    global.fetch = fetchMock as unknown as typeof fetch;
    sendMailMock.mockRejectedValue(new Error("gmail down"));

    const { POST } = await import("./route");
    const res = await POST(jsonRequest(baseBody));
    const data = await res.json();

    expect(res.status).toBe(502);
    expect(data.message).toMatch(/try again/i);
    expect(JSON.stringify(data)).not.toMatch(/gmail down|500|test-token/i);
  });

  it("rejects submissions missing required fields", async () => {
    const fetchMock = mockGhlFetch({});
    global.fetch = fetchMock as unknown as typeof fetch;

    const { POST } = await import("./route");
    const res = await POST(jsonRequest({ ...baseBody, name: "" }));
    expect(res.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
    expect(sendMailMock).not.toHaveBeenCalled();
  });

  it("rejects an invalid email format", async () => {
    const fetchMock = mockGhlFetch({});
    global.fetch = fetchMock as unknown as typeof fetch;

    const { POST } = await import("./route");
    const res = await POST(jsonRequest({ ...baseBody, email: "not-an-email" }));
    const data = await res.json();
    expect(res.status).toBe(400);
    expect(data.message).toMatch(/invalid email/i);
    expect(fetchMock).not.toHaveBeenCalled();
    expect(sendMailMock).not.toHaveBeenCalled();
  });

  it("rejects an invalid phone number when one is provided", async () => {
    const fetchMock = mockGhlFetch({});
    global.fetch = fetchMock as unknown as typeof fetch;

    const { POST } = await import("./route");
    const res = await POST(jsonRequest({ ...baseBody, phone: "abc123" }));
    const data = await res.json();
    expect(res.status).toBe(400);
    expect(data.message).toMatch(/invalid phone/i);
    expect(fetchMock).not.toHaveBeenCalled();
    expect(sendMailMock).not.toHaveBeenCalled();
  });

  it("accepts a valid phone number and still allows a blank one", async () => {
    const fetchMock = mockGhlFetch({});
    global.fetch = fetchMock as unknown as typeof fetch;

    const { POST } = await import("./route");
    const withPhone = await POST(jsonRequest({ ...baseBody, phone: "(407) 555-0132" }));
    expect(withPhone.status).toBe(200);

    const withoutPhone = await POST(jsonRequest({ ...baseBody, phone: "" }));
    expect(withoutPhone.status).toBe(200);
  });
});
