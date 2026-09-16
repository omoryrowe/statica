"use client";

import { useId, useMemo, useState } from "react";
import { RELAY_ANNUAL_LABEL, RELAY_MONTHLY_PRICE, RELAY_PLAN } from "@/lib/site";

const EXAMPLE_JOB_VALUE = 400;
const MAX_JOB_VALUE = 1000000;

export default function RelayCalculator() {
  const inputId = useId();
  const [rawValue, setRawValue] = useState(String(EXAMPLE_JOB_VALUE));

  const numericValue = Number(rawValue);
  const isValid =
    rawValue.trim() !== "" && Number.isFinite(numericValue) && numericValue > 0;

  const percentOfJob = useMemo(() => {
    if (!isValid) return null;
    return (RELAY_MONTHLY_PRICE / numericValue) * 100;
  }, [isValid, numericValue]);

  return (
    <div className="rounded-3xl border border-ink-line bg-ink-raised p-6 sm:p-8">
      <label htmlFor={inputId} className="block text-sm font-medium text-paper">
        Average revenue per job{" "}
        <span className="font-normal text-mist">(Example: ${EXAMPLE_JOB_VALUE})</span>
      </label>
      <div className="mt-2 flex items-center gap-2">
        <span aria-hidden className="text-mist">
          $
        </span>
        <input
          id={inputId}
          type="number"
          inputMode="decimal"
          min={0}
          max={MAX_JOB_VALUE}
          step="1"
          value={rawValue}
          onChange={(e) => setRawValue(e.target.value)}
          className="w-full max-w-40 rounded-lg border border-ink-line bg-ink px-3 py-2.5 text-paper focus:border-bolt focus:outline-none focus:ring-2 focus:ring-bolt/30"
        />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-ink-line bg-ink p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-mist">
            {RELAY_PLAN.name}
          </p>
          <p className="mt-2 font-nacelle text-2xl font-semibold text-bolt">
            {RELAY_PLAN.priceLabel}
          </p>
          <p className="text-sm text-mist">{RELAY_ANNUAL_LABEL}</p>
        </div>
        <div className="rounded-2xl border border-ink-line bg-ink p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-mist">
            Your example job
          </p>
          {isValid ? (
            <>
              <p className="mt-2 font-nacelle text-2xl font-semibold text-paper">
                ${numericValue.toLocaleString()}
              </p>
              <p className="text-sm text-mist">
                Relay&rsquo;s monthly subscription is about{" "}
                {percentOfJob !== null && percentOfJob >= 100
                  ? percentOfJob.toFixed(0)
                  : percentOfJob?.toFixed(1)}
                % of this example job&rsquo;s revenue.
              </p>
            </>
          ) : (
            <p className="mt-2 text-sm text-mist">Enter a value above $0.</p>
          )}
        </div>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-mist">
        This compares the revenue you enter to Relay&rsquo;s subscription cost. It uses
        revenue, not profit, and doesn&rsquo;t account for expenses &mdash; it&rsquo;s
        illustrative only, not a guaranteed return.
      </p>
    </div>
  );
}
