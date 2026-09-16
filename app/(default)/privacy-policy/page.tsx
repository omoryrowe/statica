import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { LEGAL_EFFECTIVE_DATE, SITE, TERMS_PATH } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Statica Design Agency collects, uses, and discloses personal information across our website, forms, and communication programs.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="border-b border-ink-line">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <p className="eyebrow">Legal</p>
          <h1 className="display mt-5 text-3xl sm:text-4xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-mist">Effective date: {LEGAL_EFFECTIVE_DATE}</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl space-y-12 px-4 py-14 text-mist sm:px-6">
          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              1. About this policy
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>
                Statica Design Agency (&ldquo;Statica,&rdquo; &ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides website design, website
                maintenance, and business communication automation services.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, and disclose personal
                information when you visit staticadesigns.com, contact us, book a
                consultation, complete our forms, or use our services.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              2. Information we collect
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>
                <strong className="text-paper">Information you provide:</strong> We
                collect information you choose to submit, such as your name, business
                name, email address, telephone number, business address, website
                address, service needs, appointment details, and project preferences.
              </p>
              <p>
                <strong className="text-paper">Project materials:</strong> You may
                provide logos, photographs, written content, testimonials, and other
                materials needed to complete your project. Please provide only
                materials you are authorized to share and avoid submitting sensitive
                personal information that is unnecessary for the project.
              </p>
              <p>
                <strong className="text-paper">Communications:</strong> We retain
                information from communications with us, including inquiries, emails,
                text messages, support requests, and records of communication
                preferences and consent.
              </p>
              <p>
                <strong className="text-paper">Billing:</strong> When you purchase
                services, we may receive billing contact information, transaction
                references, payment status, and related records. Payment information is
                handled through the payment provider used for your transaction. Do not
                send payment card details through ordinary contact forms, email, or
                text messages.
              </p>
              <p>
                <strong className="text-paper">Technical information:</strong> Our
                website and service providers may collect technical information such as
                IP address, browser type, device information, pages requested,
                timestamps, and error logs to operate, secure, and troubleshoot our
                services.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              3. How we use information
            </h2>
            <p className="mt-4 leading-relaxed">We use personal information to:</p>
            <ul className="mt-4 space-y-2 leading-relaxed">
              {[
                "Respond to inquiries and prepare proposals.",
                "Schedule consultations and communicate about appointments.",
                "Build, maintain, and support websites and related services.",
                "Collect project materials and obtain approvals.",
                "Manage billing and business records.",
                "Send service communications and, where you have separately agreed, marketing communications.",
                "Maintain security, prevent misuse, and resolve technical problems.",
                "Meet applicable legal obligations and enforce our agreements.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="text-bolt">
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              4. Service providers and disclosures
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>
                We use service providers to support functions such as website hosting,
                customer relationship management, appointment scheduling, email and
                text delivery, file storage, and payment processing.
              </p>
              <p>
                These providers receive information needed to perform their services,
                subject to applicable agreements and restrictions.
              </p>
              <p>
                We may also disclose information when required by law or when
                reasonably necessary to protect rights, safety, and the security of our
                services.
              </p>
              <p>
                We do not sell personal information or share it with third parties for
                their own marketing or promotional purposes.
              </p>
              <p>
                Text messaging opt-in data and consent are not sold, rented, or shared
                with third parties or affiliates for marketing or promotional purposes.
                They may be disclosed to messaging providers and aggregators only as
                necessary to deliver and administer our text messaging services, or as
                required by law. Other disclosures described in this policy do not
                authorize sharing SMS consent for unrelated purposes.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              5. Text messages and communication preferences
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>
                If you choose to receive text messages from Statica, we use your
                telephone number and consent information to send the types of messages
                described when you opt in.
              </p>
              <p>
                Service messages may include appointment reminders, website project
                updates, and customer support. Promotional messages require separate
                marketing consent.
              </p>
              <p>
                Message frequency varies. Message and data rates may apply. Reply STOP
                to opt out or HELP for assistance. You may also contact us at{" "}
                <a className="text-bolt hover:underline" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
                .
              </p>
              <p>
                Choosing not to receive text messages does not prevent you from
                purchasing our services. Opting out of texts does not cancel an
                appointment, project, or service agreement.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              6. Cookies and embedded services
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>
                Our website and embedded services, such as appointment scheduling
                tools, may use cookies or similar technologies to operate features,
                maintain preferences, and support security.
              </p>
              <p>
                You can manage cookies through your browser settings. Blocking cookies
                may affect some features. Third-party services may collect information
                when their embedded features load or when you interact with them,
                subject to their own privacy policies.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              7. Retention
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>
                We retain information for as long as reasonably necessary to provide
                services, maintain business records, resolve disputes, meet legal
                obligations, and enforce agreements.
              </p>
              <p>
                Retention periods vary by the type of information and its purpose. We
                may retain limited opt-out records to ensure that communication
                preferences continue to be honored.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              8. Security
            </h2>
            <p className="mt-4 leading-relaxed">
              We use reasonable administrative and technical safeguards intended to
              protect personal information. No internet transmission or storage system
              is completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              9. Your choices and requests
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>
                You may contact us to request access to, correction of, or deletion of
                your personal information. Depending on your location and applicable
                law, you may have additional rights.
              </p>
              <p>
                We may need to verify your identity before responding. Some information
                may need to be retained for legal, security, or legitimate business
                purposes.
              </p>
              <p>
                To make a request, email{" "}
                <a className="text-bolt hover:underline" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
                .
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              10. Client customer information
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>
                When we manage website inquiries or communication tools on behalf of a
                business client, we may process that client&rsquo;s customer
                information according to the client&rsquo;s instructions and our
                agreement.
              </p>
              <p>
                The client&rsquo;s privacy policy governs its relationship with its
                customers. If your information was submitted to one of our clients,
                contact that business first. We will assist with applicable requests as
                appropriate.
              </p>
              <p>
                A customer&rsquo;s consent to receive messages from a client does not
                constitute consent to receive marketing from Statica.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              11. Third-party links and processing locations
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>
                Our website may link to external websites or services. We do not
                control their privacy practices.
              </p>
              <p>
                Service providers may process information in the United States or
                other countries where they operate. Applicable privacy protections may
                differ by location.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              12. Children
            </h2>
            <p className="mt-4 leading-relaxed">
              Our website and services are intended for business owners and adult
              representatives. We do not knowingly collect personal information from
              children under 13. Contact us if you believe a child has provided
              personal information so we can investigate and take appropriate action.
            </p>
          </div>

          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              13. Changes to this policy
            </h2>
            <p className="mt-4 leading-relaxed">
              We may update this Privacy Policy as our services or practices change.
              The effective date identifies the current version. Where required, we
              will provide additional notice of material changes.
            </p>
          </div>

          <div className="hairline-top pt-8">
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              14. Contact
            </h2>
            <div className="mt-4 space-y-1 leading-relaxed">
              <p>{SITE.name}</p>
              <p>
                Website:{" "}
                <a className="text-bolt hover:underline" href={SITE.url}>
                  {SITE.url}
                </a>
              </p>
              <p>
                Email:{" "}
                <a className="text-bolt hover:underline" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </p>
            </div>
            <p className="mt-6 text-sm text-mist">
              Also see our{" "}
              <Link href={TERMS_PATH} className="text-bolt hover:underline">
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
