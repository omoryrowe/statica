import { describeAttribution, NICHE_SOURCES, type Attribution } from "@/lib/attribution";

// GoHighLevel (LeadConnector) API v2 — server-only client.
// Docs: https://marketplace.gohighlevel.com/docs/
const GHL_API_BASE = "https://services.leadconnectorhq.com";
const GHL_API_VERSION = "2021-07-28";
const GHL_TIMEOUT_MS = 8000;

export interface GhlEnv {
  token: string;
  locationId: string;
  pipelineId: string;
  newLeadStageId: string;
}

export function readGhlEnv(): GhlEnv | null {
  const token = process.env.GHL_PRIVATE_INTEGRATION_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;
  const pipelineId = process.env.GHL_PIPELINE_ID;
  const newLeadStageId = process.env.GHL_NEW_LEAD_STAGE_ID;
  if (!token || !locationId || !pipelineId || !newLeadStageId) return null;
  return { token, locationId, pipelineId, newLeadStageId };
}

class GhlRequestError extends Error {
  constructor(
    message: string,
    public readonly step: string,
    public readonly status?: number
  ) {
    super(message);
    this.name = "GhlRequestError";
  }
}

async function ghlFetch(
  env: GhlEnv,
  step: string,
  path: string,
  init: { method: string; body?: unknown; query?: Record<string, string> }
): Promise<unknown> {
  const url = new URL(path, GHL_API_BASE);
  if (init.query) {
    for (const [key, value] of Object.entries(init.query)) {
      url.searchParams.set(key, value);
    }
  }

  let response: Response;
  try {
    response = await fetch(url, {
      method: init.method,
      headers: {
        Authorization: `Bearer ${env.token}`,
        Version: GHL_API_VERSION,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: init.body ? JSON.stringify(init.body) : undefined,
      signal: AbortSignal.timeout(GHL_TIMEOUT_MS),
    });
  } catch (err) {
    const cause = err instanceof Error ? err.message : String(err);
    throw new GhlRequestError(`${step} request failed: ${cause}`, step);
  }

  const rawText = await response.text();
  const data = rawText ? safeJsonParse(rawText) : undefined;

  if (!response.ok) {
    throw new GhlRequestError(
      `${step} responded with ${response.status}`,
      step,
      response.status
    );
  }

  return data;
}

function safeJsonParse(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return undefined;
  }
}

export interface PipelineStage {
  id: string;
  name: string;
}

export interface Pipeline {
  id: string;
  name: string;
  stages: PipelineStage[];
}

/**
 * Lists pipelines for the configured location. Used only by the local
 * pipeline-discovery script — never called from the request path.
 */
export async function listPipelines(env: GhlEnv): Promise<Pipeline[]> {
  const data = (await ghlFetch(env, "listPipelines", "/opportunities/pipelines", {
    method: "GET",
    query: { locationId: env.locationId },
  })) as { pipelines?: Pipeline[] } | undefined;
  return data?.pipelines ?? [];
}

export interface QuoteSubmission {
  reference: string;
  name: string;
  businessName: string;
  email: string;
  phone: string;
  existingWebsite: string;
  projectDetails: string;
  /** Optional niche-page / UTM origin. Recorded in the note and the new opportunity's source. */
  attribution?: Attribution;
}

export interface GhlSyncResult {
  ok: boolean;
  contactId?: string;
  opportunityId?: string;
  opportunityCreated?: boolean;
  warning?: string;
}

interface UpsertContactResponse {
  new?: boolean;
  contact?: { id: string };
}

async function upsertContact(
  env: GhlEnv,
  submission: QuoteSubmission
): Promise<{ contactId: string; isNew: boolean }> {
  // Only include optional fields when present so we never overwrite an
  // existing contact's value with a blank one. `tags` and `dnd` are
  // intentionally omitted: the upsert endpoint replaces (not merges) tags
  // and can affect DND state if sent, and we must never touch either.
  const body: Record<string, unknown> = {
    locationId: env.locationId,
    name: submission.name,
    email: submission.email,
    companyName: submission.businessName,
    source: QUOTE_FORM_SOURCE,
  };
  if (submission.phone) body.phone = submission.phone;
  if (submission.existingWebsite) body.website = submission.existingWebsite;

  const data = (await ghlFetch(env, "upsertContact", "/contacts/upsert", {
    method: "POST",
    body,
  })) as UpsertContactResponse | undefined;

  const contactId = data?.contact?.id;
  if (!contactId) {
    throw new GhlRequestError("upsertContact response missing contact id", "upsertContact");
  }
  return { contactId, isNew: Boolean(data?.new) };
}

interface SearchOpportunitiesResponse {
  opportunities?: Array<{
    id: string;
    status?: string;
    pipelineStageId?: string;
    monetaryValue?: number;
  }>;
}

/**
 * Finds an existing, non-deleted opportunity for this contact in the
 * Statica Sales pipeline, regardless of its current stage or status, so we
 * never create a duplicate. Uses the documented (legacy-flagged) opportunity
 * search endpoint, which is the only endpoint that supports filtering by
 * contact_id + pipeline_id directly. See report notes for the tradeoff.
 */
async function findExistingOpportunity(env: GhlEnv, contactId: string) {
  const data = (await ghlFetch(env, "searchOpportunities", "/opportunities/search", {
    method: "GET",
    query: {
      location_id: env.locationId,
      pipeline_id: env.pipelineId,
      contact_id: contactId,
      status: "all",
      limit: "10",
    },
  })) as SearchOpportunitiesResponse | undefined;

  const opportunities = data?.opportunities ?? [];
  return opportunities[0] ?? null;
}

const QUOTE_FORM_SOURCE = "Statica Free Homepage Preview Request";

/**
 * New opportunities from a niche landing page are labelled with it, so the
 * pipeline can be filtered by campaign. Everything else keeps the original
 * source string. The contact's source and tags are never touched.
 */
function resolveOpportunitySource(submission: QuoteSubmission): string {
  const niche = submission.attribution?.source;
  return niche ? `${QUOTE_FORM_SOURCE} - ${NICHE_SOURCES[niche]}` : QUOTE_FORM_SOURCE;
}

async function createOpportunity(
  env: GhlEnv,
  submission: QuoteSubmission,
  contactId: string
): Promise<string> {
  const body = {
    pipelineId: env.pipelineId,
    locationId: env.locationId,
    name: `${submission.businessName} Free Preview Request`,
    status: "open",
    pipelineStageId: env.newLeadStageId,
    contactId,
    monetaryValue: 0,
    source: resolveOpportunitySource(submission),
  };

  const data = (await ghlFetch(env, "createOpportunity", "/opportunities/", {
    method: "POST",
    body,
  })) as { opportunity?: { id: string } } | undefined;

  const opportunityId = data?.opportunity?.id;
  if (!opportunityId) {
    throw new GhlRequestError(
      "createOpportunity response missing opportunity id",
      "createOpportunity"
    );
  }
  return opportunityId;
}

function attributionNoteLines(submission: QuoteSubmission): string[] {
  const lines = describeAttribution(submission.attribution);
  return lines.length ? [``, ...lines, ``] : [``];
}

function buildNoteBody(
  submission: QuoteSubmission,
  opportunityCreated: boolean
): string {
  const lines = [
    `Statica Free Homepage Preview Request submission`,
    `Reference: ${submission.reference}`,
    `Date: ${new Date().toISOString()}`,
    ``,
    `Business: ${submission.businessName}`,
    `Contact: ${submission.name}`,
    `Email: ${submission.email}`,
    `Phone: ${submission.phone || "-"}`,
    `Website or social page: ${submission.existingWebsite || "-"}`,
    ...attributionNoteLines(submission),
    `Anything they'd like us to know:`,
    submission.projectDetails || "-",
    ``,
    opportunityCreated
      ? `Opportunity created in Statica Sales / New Lead.`
      : `Existing opportunity found in Statica Sales — this is a repeat inquiry; stage/status/owner/value left unchanged.`,
    ``,
    `Source: ${QUOTE_FORM_SOURCE}`,
  ];
  return lines.join("\n");
}

async function addContactNote(env: GhlEnv, contactId: string, body: string) {
  await ghlFetch(env, "createNote", `/contacts/${contactId}/notes`, {
    method: "POST",
    body: { body },
  });
}

/**
 * Syncs one quote submission into GoHighLevel: upsert contact, find-or-create
 * the sales opportunity, and record a note. Never throws — failures are
 * reported in the returned result so the caller (the API route) can still
 * send the Gmail notification and decide what to tell the visitor.
 */
export async function syncQuoteSubmissionToGhl(
  submission: QuoteSubmission
): Promise<GhlSyncResult> {
  const env = readGhlEnv();
  if (!env) {
    return { ok: false, warning: "GHL is not configured (missing environment variables)." };
  }

  let contactId: string;
  try {
    ({ contactId } = await upsertContact(env, submission));
  } catch (err) {
    return { ok: false, warning: describeGhlError(err, "contact upsert") };
  }

  let opportunityId: string;
  let opportunityCreated: boolean;
  try {
    const existing = await findExistingOpportunity(env, contactId);
    if (existing) {
      opportunityId = existing.id;
      opportunityCreated = false;
    } else {
      opportunityId = await createOpportunity(env, submission, contactId);
      opportunityCreated = true;
    }
  } catch (err) {
    return {
      ok: false,
      contactId,
      warning: describeGhlError(err, "opportunity lookup/create"),
    };
  }

  try {
    await addContactNote(env, contactId, buildNoteBody(submission, opportunityCreated));
  } catch (err) {
    return {
      ok: false,
      contactId,
      opportunityId,
      opportunityCreated,
      warning: describeGhlError(err, "contact note"),
    };
  }

  return { ok: true, contactId, opportunityId, opportunityCreated };
}

function describeGhlError(err: unknown, step: string): string {
  if (err instanceof GhlRequestError) {
    return `GHL ${step} failed (${err.step}${err.status ? ` ${err.status}` : ""}).`;
  }
  return `GHL ${step} failed.`;
}

/** Sanitized, token-free logging detail for server logs only. */
export function logGhlFailure(reference: string, warning: string | undefined) {
  if (!warning) return;
  console.error(`[quote:${reference}] ${warning}`);
}
