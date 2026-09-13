import { Suspense } from "react";
import { pageMetadata } from "@/lib/metadata";
import QuoteForm from "@/components/quote-form";

export const metadata = pageMetadata({
  title: "Request a Website Quote",
  description:
    "Tell Statica about your small business website project. Share your name, business, and what you need. Omory will follow up.",
  path: "/request-services/request-quote",
});

export default function QuotePage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6">
      <h1 className="font-nacelle text-4xl font-semibold text-paper">Tell me about your website.</h1>
      <p className="mt-4 text-mist">
        Share a few details about your business and what you have in mind. I’ll follow up to discuss the project and put together your quote.
      </p>
      <div className="mt-10">
        <Suspense fallback={<p className="text-mist">Loading form…</p>}>
          <QuoteForm />
        </Suspense>
      </div>
    </div>
  );
}
