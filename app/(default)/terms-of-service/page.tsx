import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { LEGAL_EFFECTIVE_DATE, PRIVACY_PATH, SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms that govern use of the Statica Design Agency website and our client communication programs, including Statica Relay.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <>
      <section className="border-b border-ink-line">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <p className="eyebrow">Legal</p>
          <h1 className="display mt-5 text-3xl sm:text-4xl">Terms of Service</h1>
          <p className="mt-4 text-sm text-mist">Effective date: {LEGAL_EFFECTIVE_DATE}</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl space-y-12 px-4 py-14 text-mist sm:px-6">
          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">1. Scope</h2>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>
                These Terms of Service govern use of the Statica Design Agency website
                and the communication programs described below.
              </p>
              <p>
                By using our website, you agree to these terms to the extent permitted
                by applicable law. If you do not agree, please discontinue use.
              </p>
              <p>
                Paid services are governed by the proposal, statement of work, service
                agreement, or other written terms accepted for your project. These
                website terms do not replace that agreement. If there is a conflict
                concerning paid services, the applicable client agreement controls.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              2. Our services
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>
                Statica provides website design, website maintenance, and business
                communication automation services, including Statica Relay.
              </p>
              <p>
                Website descriptions explain available services generally. Your
                accepted agreement determines the deliverables, fees, timelines,
                revisions, ongoing support, and any usage limits or additional charges.
              </p>
              <p>
                Submitting an inquiry or booking a consultation does not create an
                obligation to purchase services or require Statica to accept a project.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              3. Project information and responsibilities
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>
                Clients are responsible for providing accurate business information,
                timely approvals, necessary access, and materials they are authorized
                to use.
              </p>
              <p>
                You must have the necessary rights or permissions for submitted logos,
                photos, text, testimonials, and other materials. Do not submit
                confidential information or credentials through public forms.
              </p>
              <p>
                Project schedules may depend on receipt of content, approvals, access,
                and third-party services. Any binding deadlines must be stated in the
                applicable project agreement.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              4. Fees, renewals, and cancellation
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>
                Setup fees, deposits, payment schedules, recurring charges, renewal
                arrangements, cancellation procedures, and refund eligibility are
                governed by the agreement accepted for your services.
              </p>
              <p>
                Domain registration, renewals, third-party subscriptions, and work
                outside the agreed scope are handled as specified in that agreement.
              </p>
              <p>
                These website terms do not create an additional nonrefundable deposit
                requirement, minimum subscription commitment, or cancellation penalty.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              5. Intellectual property
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>
                Statica&rsquo;s own website content, branding, and design are owned by
                Statica or used with permission. You may not reproduce or commercially
                exploit them without authorization, except as permitted by law.
              </p>
              <p>
                Ownership and licensing of client deliverables are determined by the
                applicable project agreement. Third-party fonts, software, stock
                assets, and services remain subject to their respective licenses.
              </p>
              <p>
                You retain your rights in materials you provide and authorize us to use
                them as necessary to perform the agreed services. Any use of your
                materials for our portfolio or promotion is subject to your
                authorization or the applicable agreement.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              6. Acceptable use
            </h2>
            <p className="mt-4 leading-relaxed">
              You may not use our website or services to:
            </p>
            <ul className="mt-4 space-y-2 leading-relaxed">
              {[
                "Conduct unlawful, fraudulent, deceptive, or abusive activity.",
                "Infringe intellectual property, privacy, or other rights.",
                "Distribute malware or interfere with systems.",
                "Attempt unauthorized access to accounts or information.",
                "Send unsolicited messages or bypass consent and opt-out requirements.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="text-bolt">
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 leading-relaxed">
              We may restrict access when reasonably necessary to address misuse,
              security threats, or legal requirements, subject to applicable law and
              any client agreement.
            </p>
          </div>

          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              7. Third-party services
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>
                Our services may depend on hosting providers, domain registrars,
                payment processors, scheduling tools, communication platforms, and
                telecommunications carriers.
              </p>
              <p>
                Those services may have separate terms, fees, limitations, and
                availability. We cannot guarantee uninterrupted operation of
                third-party systems, although we will provide the support specified in
                your agreement.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              8. Results and availability
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>
                We aim to provide reliable websites and communication tools. We do not
                guarantee a particular number of leads, sales, appointments, search
                rankings, conversion rates, or revenue.
              </p>
              <p>
                Statica Relay supports responding to and following up with inquiries.
                It does not guarantee new demand, successful message delivery, or that
                a prospect will become a customer.
              </p>
              <p>
                Website information is provided for general informational purposes and
                may be updated or corrected.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              9. Statica text messaging program
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>Program name: Statica Design Agency Client Communications.</p>
              <p>
                If you separately opt in, we may send text messages about
                appointments, website project updates, and customer support. Messages
                may be sent using automated technology.
              </p>
              <p>
                Marketing and promotional texts are sent only where separate marketing
                consent has been obtained. Agreeing to these Terms of Service,
                purchasing a service, or providing a telephone number alone does not
                enroll you in marketing texts.
              </p>
              <p>Message frequency varies. Message and data rates may apply.</p>
              <p>
                To stop receiving messages, reply STOP. You may receive a final
                confirmation of your opt-out. To rejoin, complete the applicable
                opt-in process again.
              </p>
              <p>
                For assistance, reply HELP or email{" "}
                <a className="text-bolt hover:underline" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
                .
              </p>
              <p>
                Consent to receive texts is not a condition of purchase. You must be
                authorized to provide the telephone number you enroll, and you should
                notify us if that number changes.
              </p>
              <p>
                Carriers are not liable for delayed or undelivered messages. Messaging
                availability depends on participating carriers and other technical
                conditions.
              </p>
              <p>
                Text message opt-out does not cancel your project, appointment,
                subscription, or payment obligations. Contact us separately regarding
                those matters.
              </p>
              <p>
                See our Privacy Policy at{" "}
                <Link href={PRIVACY_PATH} className="text-bolt hover:underline">
                  {PRIVACY_PATH}
                </Link>{" "}
                for information about collection and use of personal information and
                messaging consent.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              10. Client messaging responsibilities
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>
                Clients using communication automation services are responsible for
                their business&rsquo;s message content, appropriate recipient consent,
                accurate disclosures, and compliance with applicable messaging
                requirements.
              </p>
              <p>
                Statica&rsquo;s tools do not provide permission to send unsolicited
                messages. Consent obtained for one business or purpose must not be
                assumed to cover another business or purpose.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              11. Liability and applicable rights
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>
                To the extent permitted by law, Statica is not responsible for
                indirect or consequential losses arising solely from use of this
                informational website.
              </p>
              <p>
                Responsibility and liability for paid services are addressed in the
                applicable client agreement. Nothing in these terms excludes rights or
                liability that cannot lawfully be excluded.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              12. Changes to these terms
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>
                We may update these terms to reflect changes to our website or
                communication programs. Updated terms will display a revised effective
                date, and additional notice will be provided when required.
              </p>
              <p>
                Changes to this page do not automatically modify an existing client
                agreement.
              </p>
            </div>
          </div>

          <div className="hairline-top pt-8">
            <h2 className="font-nacelle text-xl font-semibold text-paper">
              13. Contact
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
              <Link href={PRIVACY_PATH} className="text-bolt hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
