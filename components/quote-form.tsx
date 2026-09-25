"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { readAttribution, type Attribution } from "@/lib/attribution";
import { trackEvent } from "@/lib/track";

const LIMITS = {
  name: 100,
  businessName: 120,
  email: 254,
  phone: 40,
  existingWebsite: 200,
  projectDetails: 4000,
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_REGEX = /^[+]?[()\d\s.-]{7,20}$/;

function isValidPhone(value: string) {
  const digitCount = value.replace(/\D/g, "").length;
  return PHONE_REGEX.test(value) && digitCount >= 7 && digitCount <= 15;
}

export default function QuoteForm() {
  const searchParams = useSearchParams();

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const submittingRef = useRef(false);
  const attributionRef = useRef<Attribution | null>(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    businessName: "",
    existingWebsite: "",
    phone: "",
    projectDetails: "",
  });

  const searchString = searchParams.toString();
  useEffect(() => {
    attributionRef.current = readAttribution(searchString);
    trackEvent("quote-form-view", { source: attributionRef.current?.source });
  }, [searchString]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current) return;
    setError(null);
    setSuccess(false);

    if (!values.name.trim() || !values.email.trim() || !values.businessName.trim()) {
      setError("Name, email, and business name are required.");
      return;
    }
    if (!EMAIL_REGEX.test(values.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (values.phone.trim() && !isValidPhone(values.phone.trim())) {
      setError("Please enter a valid phone number, or leave it blank.");
      return;
    }

    submittingRef.current = true;
    setSubmitting(true);
    try {
      const response = await fetch("/api/sendQuoteEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          businessName: values.businessName.trim(),
          existingWebsite: values.existingWebsite.trim(),
          phone: values.phone.trim(),
          projectDetails: values.projectDetails.trim(),
          attribution: attributionRef.current ?? undefined,
          idempotencyKey:
            typeof crypto !== "undefined" && "randomUUID" in crypto
              ? crypto.randomUUID()
              : `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        }),
      });
      const data = await response.json().catch(() => null);
      if (response.ok) {
        setSuccess(true);
        trackEvent("quote-form-submit", { source: attributionRef.current?.source });
        window.fbq?.("track", "Lead", {
          content_name: "Free homepage preview form",
          ...(attributionRef.current?.source ? { content_category: attributionRef.current.source } : {}),
        });
      } else {
        setError(data?.message ?? "Your preview request could not be sent. Please try again.");
      }
    } catch {
      setError("Your preview request could not be sent. Please try again.");
    } finally {
      submittingRef.current = false;
      setSubmitting(false);
    }
  }

  const field =
    "w-full rounded-lg border border-ink-line bg-ink-raised px-3 py-3 text-base text-paper placeholder:text-mist/50 focus:border-bolt focus:outline-none focus:ring-2 focus:ring-bolt/30";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {error && (
        <p role="alert" className="rounded-lg border border-red-400/40 bg-red-950/40 px-4 py-3 text-sm text-red-200">
          {error}
        </p>
      )}
      {success && (
        <div role="status" className="rounded-lg border border-green-400/30 bg-green-950/30 px-4 py-3 text-sm text-green-100">
          <p className="font-medium">Your preview request is in!</p>
          <p className="mt-1">
            Thanks for reaching out. We&rsquo;ll review your business details and contact you
            by email about your free homepage preview.
          </p>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-paper">
          Your name
        </label>
        <input
          id="name"
          required
          autoComplete="name"
          maxLength={LIMITS.name}
          className={`${field} mt-1`}
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-paper">
          Email
        </label>
        <input
          id="email"
          type="email"
          inputMode="email"
          required
          autoComplete="email"
          maxLength={LIMITS.email}
          className={`${field} mt-1`}
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          aria-describedby="email-helper"
        />
        <p id="email-helper" className="mt-1 text-xs text-mist">
          We&rsquo;ll contact you here about your preview.
        </p>
      </div>

      <div>
        <label htmlFor="businessName" className="block text-sm font-medium text-paper">
          Business name
        </label>
        <input
          id="businessName"
          required
          autoComplete="organization"
          maxLength={LIMITS.businessName}
          className={`${field} mt-1`}
          value={values.businessName}
          onChange={(e) => setValues({ ...values, businessName: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="existingWebsite" className="block text-sm font-medium text-paper">
          Website or social page <span className="font-normal text-mist">(optional)</span>
        </label>
        <input
          id="existingWebsite"
          autoComplete="url"
          maxLength={LIMITS.existingWebsite}
          placeholder="yourbusiness.com or @yourbusiness"
          className={`${field} mt-1`}
          value={values.existingWebsite}
          onChange={(e) => setValues({ ...values, existingWebsite: e.target.value })}
        />
      </div>

      <details className="group rounded-lg border border-ink-line">
        <summary className="cursor-pointer list-none rounded-lg px-3 py-3 text-sm font-medium text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bolt/30">
          <span className="inline-flex items-center gap-2">
            <span aria-hidden className="transition-transform group-open:rotate-90">
              &rsaquo;
            </span>
            Add details <span className="font-normal text-mist">(optional)</span>
          </span>
        </summary>
        <div className="space-y-5 border-t border-ink-line px-3 pb-4 pt-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-paper">
              Phone number <span className="font-normal text-mist">(optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              maxLength={LIMITS.phone}
              className={`${field} mt-1`}
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="projectDetails" className="block text-sm font-medium text-paper">
              Anything you&rsquo;d like us to know? <span className="font-normal text-mist">(optional)</span>
            </label>
            <textarea
              id="projectDetails"
              rows={4}
              maxLength={LIMITS.projectDetails}
              placeholder="What does your business do, or what would you like to improve?"
              className={`${field} mt-1`}
              value={values.projectDetails}
              onChange={(e) => setValues({ ...values, projectDetails: e.target.value })}
            />
          </div>
        </div>
      </details>

      <div>
        <button type="submit" disabled={submitting} className="btn btn-primary w-full">
          {submitting ? "Sending…" : "Request My Free Preview"}
        </button>
        <p className="mt-2 text-xs text-mist">
          A homepage design preview, free with no obligation. A full website is a separate
          paid service.
        </p>
      </div>
    </form>
  );
}
