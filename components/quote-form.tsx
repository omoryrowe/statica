"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CARE_PLAN, isMonthlyPlanId, isSetupPlanId, MONTHLY_PLANS, NEED_OPTIONS, RELAY_NOTES, RELAY_PLAN, SETUP_PLANS } from "@/lib/site";

const LIMITS = {
  name: 100,
  businessName: 120,
  email: 254,
  phone: 40,
  existingWebsite: 200,
  projectDetails: 4000,
};

export default function QuoteForm() {
  const searchParams = useSearchParams();
  const setupParam = searchParams.get("setup");
  const monthlyParam = searchParams.get("monthly") || searchParams.get("interest");
  const defaultNeed = searchParams.get("need") || "";
  const ignoredMonthly = monthlyParam === "care-plus";
  const monthlyDefault = isMonthlyPlanId(monthlyParam) ? monthlyParam! : "not-sure";

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [values, setValues] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    existingWebsite: "",
    need: NEED_OPTIONS.includes(defaultNeed as (typeof NEED_OPTIONS)[number])
      ? defaultNeed
      : "",
    setup: isSetupPlanId(setupParam) ? setupParam! : "not-sure",
    monthly: monthlyDefault,
    projectDetails: "",
  });

  const setupLabel = useMemo(() => {
    if (values.setup === "not-sure") return "Not sure yet";
    return SETUP_PLANS.find((p) => p.id === values.setup)?.name ?? "Not sure yet";
  }, [values.setup]);

  const monthlyLabel = useMemo(() => {
    if (values.monthly === "not-sure") return "Not sure yet";
    const plan = MONTHLY_PLANS.find((p) => p.id === values.monthly);
    return plan ? `${plan.name} (${plan.priceLabel})` : "Not sure yet";
  }, [values.monthly]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(false);

    if (!values.name.trim() || !values.businessName.trim() || !values.email.trim()) {
      setError("Name, business name, and email are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!values.need) {
      setError("Please choose what you need, or select Not sure.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/sendQuoteEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          businessName: values.businessName.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          existingWebsite: values.existingWebsite.trim(),
          need: values.need,
          setup: setupLabel,
          monthly: monthlyLabel,
          interest: values.monthly === RELAY_PLAN.id ? RELAY_PLAN.name : "",
          projectDetails: values.projectDetails.trim(),
        }),
      });
      const data = await response.json().catch(() => null);
      if (response.ok) {
        setSuccess(true);
      } else {
        setError(data?.message ?? "The quote request could not be sent. Please try again.");
      }
    } catch {
      setError("The quote request could not be sent. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const field =
    "w-full rounded-lg border border-ink-line bg-ink-raised px-3 py-3 text-paper placeholder:text-mist/50 focus:border-bolt focus:outline-none focus:ring-2 focus:ring-bolt/30";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {ignoredMonthly && (
        <p className="text-sm text-mist">
          That monthly option isn’t available. Your website setup choice is still saved if you selected one.
        </p>
      )}
      {error && (
        <p role="alert" className="rounded-lg border border-red-400/40 bg-red-950/40 px-4 py-3 text-sm text-red-200">
          {error}
        </p>
      )}
      {success && (
        <p role="status" className="rounded-lg border border-green-400/30 bg-green-950/30 px-4 py-3 text-sm text-green-100">
          Your quote request was sent. I’ll follow up using the email you provided.
        </p>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-paper">
          Name
        </label>
        <input
          id="name"
          required
          maxLength={LIMITS.name}
          className={`${field} mt-1`}
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="businessName" className="block text-sm font-medium text-paper">
          Business name
        </label>
        <input
          id="businessName"
          required
          maxLength={LIMITS.businessName}
          className={`${field} mt-1`}
          value={values.businessName}
          onChange={(e) => setValues({ ...values, businessName: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-paper">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          maxLength={LIMITS.email}
          className={`${field} mt-1`}
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-paper">
          Phone <span className="font-normal text-mist">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          maxLength={LIMITS.phone}
          className={`${field} mt-1`}
          value={values.phone}
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="existingWebsite" className="block text-sm font-medium text-paper">
          Existing website <span className="font-normal text-mist">(optional)</span>
        </label>
        <input
          id="existingWebsite"
          maxLength={LIMITS.existingWebsite}
          className={`${field} mt-1`}
          value={values.existingWebsite}
          onChange={(e) => setValues({ ...values, existingWebsite: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="need" className="block text-sm font-medium text-paper">
          What do you need?
        </label>
        <select
          id="need"
          required
          className={`${field} mt-1`}
          value={values.need}
          onChange={(e) => setValues({ ...values, need: e.target.value })}
        >
          <option value="">Select one</option>
          {NEED_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="setup" className="block text-sm font-medium text-paper">
          Website setup <span className="font-normal text-mist">(optional)</span>
        </label>
        <select
          id="setup"
          className={`${field} mt-1`}
          value={values.setup}
          onChange={(e) => setValues({ ...values, setup: e.target.value })}
        >
          <option value="not-sure">Not sure yet</option>
          {SETUP_PLANS.map((plan) => (
            <option key={plan.id} value={plan.id}>
              {plan.name} ({plan.priceLabel})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="monthly" className="block text-sm font-medium text-paper">
          Monthly plan <span className="font-normal text-mist">(optional)</span>
        </label>
        <select
          id="monthly"
          className={`${field} mt-1`}
          value={values.monthly}
          onChange={(e) => setValues({ ...values, monthly: e.target.value })}
        >
          <option value="not-sure">Not sure yet</option>
          {MONTHLY_PLANS.map((plan) => (
            <option key={plan.id} value={plan.id}>
              {plan.name} ({plan.priceLabel})
            </option>
          ))}
        </select>
      </div>

      <p className="rounded-lg border border-ink-line px-4 py-3 text-sm text-mist">
        Requesting a quote does not start a subscription. {CARE_PLAN.name} is {CARE_PLAN.priceLabel}. {RELAY_PLAN.name} is {RELAY_PLAN.priceLabel}. {RELAY_NOTES[1]} {RELAY_NOTES[2]}
      </p>

      <div>
        <label htmlFor="projectDetails" className="block text-sm font-medium text-paper">
          Brief project details
        </label>
        <textarea
          id="projectDetails"
          rows={6}
          maxLength={LIMITS.projectDetails}
          className={`${field} mt-1`}
          value={values.projectDetails}
          onChange={(e) => setValues({ ...values, projectDetails: e.target.value })}
        />
      </div>
      <button type="submit" disabled={submitting} className="btn btn-primary w-full sm:w-auto">
        {submitting ? "Sending…" : "Get My Quote"}
      </button>
    </form>
  );
}
