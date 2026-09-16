export const SITE = {
  name: "Statica Design Agency",
  short: "Statica",
  url: "https://staticadesigns.com",
  email: "info@staticadesigns.com",
  founder: "Omory Rowe",
  location: "Orlando, Florida",
  region: "Central Florida",
};

export const QUOTE_PATH = "/request-services/request-quote";
export const PRICING_PATH = "/request-services/pricing-plans";
export const MONTHLY_PATH = "/request-services/monthly-plans";
export const RELAY_PATH = "/relay";
export const PRIVACY_PATH = "/privacy-policy";
export const TERMS_PATH = "/terms-of-service";

export const LEGAL_EFFECTIVE_DATE = "September 15, 2026";

export const CONSULT_URL =
  "https://api.leadconnectorhq.com/widget/booking/wR9nVtuLYxofMrwtUU6v";

export const PRICING_CUE =
  "Custom websites from $750 + ongoing management from $99/month.";

export const PRICING_HERO_LINE =
  "Website builds from $750. Monthly management from $99.";

export const DOMAIN_LAUNCH_POLICY =
  "Website setup, domain connection, and launch are included in your build price. Domain registration and renewal fees are additional and confirmed before purchase. Your monthly plan begins on the agreed service start date.";

export const BUILD_DOMAIN_INCLUSION = "Domain setup and connection assistance";

export const ADDITIONAL_WORK_POLICY =
  "Updates beyond your monthly allowance are billed at $75/hour in 30-minute increments. Statica provides an estimate for your approval before work begins. Changes beyond the approved scope require a revised estimate and approval.";

export const MONTHLY_ALLOWANCE_NOTE =
  "Your monthly allowance covers eligible updates to the existing website. New pages, features, integrations, and substantial redesigns are quoted separately. Correcting an error introduced by Statica is not billed as extra work.";

export const ADDITIONAL_PAGES_FAQ = {
  question: "Can I add more pages later?",
  answer:
    "Yes. Additional pages start at $150 per page and include a layout consistent with your website, client-provided text and images, mobile formatting, basic page title and meta description setup, and one round of revisions. Custom landing pages, substantial copywriting, and pages requiring additional functionality are quoted separately. New pages are not included in the monthly content-update allowance.",
} as const;

export const SETUP_PLANS = [
  {
    id: "one-page",
    name: "One Page Website",
    priceLabel: "$750",
    features: [
      "One custom-designed page styled around your brand",
      "Clearly organized sections for your services and business information",
      "Mobile-friendly layout for phones, tablets, and desktops",
      "Contact form so visitors can send an inquiry",
      "Prominent call and contact buttons",
      "Business hours, service areas, and contact details",
      "Placement of your supplied photos and approved testimonials",
      "Domain setup and connection assistance",
    ],
  },
  {
    id: "business",
    name: "Business Website",
    priceLabel: "$1,000",
    features: [
      "Everything in the One Page Website package",
      "Up to five individually designed pages",
      "Dedicated space for your services, company story, and contact information",
      "Clear navigation to help visitors find what they need",
      "More room for project photos, testimonials, and business details",
      "Service information organized to help customers understand your offer",
      "Contact calls to action across relevant pages",
    ],
  },
  {
    id: "expanded",
    name: "Expanded Website",
    priceLabel: "$1,500",
    features: [
      "Everything in the Business Website package",
      "Up to eight individually designed pages",
      "More dedicated pages for individual services or business information",
      "Room for a larger portfolio, project showcase, or FAQ",
      "Related pages linked to help visitors explore your services",
      "More space to address customer questions before they contact you",
      "Page structure planned around a broader range of services",
    ],
  },
] as const;

export const CARE_PLAN = {
  id: "care",
  name: "Statica Care",
  available: true,
  priceLabel: "$99/month",
  tagline: "Your website, taken care of.",
  updateAllowance: "30 minutes of minor content updates per month",
  features: [
    "Managed hosting",
    "SSL management",
    "Ongoing domain connection support",
    "Uptime and contact-form monitoring",
    "Maintenance and fixes for existing website functionality",
    "Website-related technical support",
    "30 minutes total of minor content updates per month",
  ],
} as const;

export const RELAY_PLAN = {
  id: "relay",
  name: "Statica Relay",
  available: true,
  priceLabel: "$249/month",
  tagline: "Managed lead response and follow-up.",
  updateAllowance: "60 minutes of minor content updates per month",
  features: [
    "Everything in Statica Care",
    "60 minutes total of minor content updates per month",
    "Missed-call text back and automatic inquiry responses",
    "Automated follow-up when prospects go quiet",
    "Lead pipeline: New Lead → Contacted → Interested → Appointment → Won/Lost",
    "Centralized conversations and lead history",
  ],
} as const;

export const MONTHLY_PLANS = [CARE_PLAN, RELAY_PLAN] as const;

export const RELAY_NOTES = [
  "Statica maintains the follow-up system. You handle customer conversations.",
  "Setup and activation are arranged during onboarding. Calling and messaging usage is billed separately.",
  "Relay setup costs, if applicable, are included in the initial quote before agreement.",
] as const;

export const RELAY_MONTHLY_PRICE = 249;
export const RELAY_ANNUAL_PRICE = RELAY_MONTHLY_PRICE * 12;
export const RELAY_ANNUAL_LABEL = "$2,988/year";

export const RELAY_SHORT_DESCRIPTOR = "Automated lead response and follow-up.";
export const RELAY_HEADLINE = "Stop losing leads you already worked to get.";
export const RELAY_SUBHEAD =
  "Relay responds to missed calls and website inquiries, follows up when prospects go quiet, and helps turn more inquiries into booked appointments.";

export const RELAY_WORKFLOW_STEPS = [
  {
    title: "Missed call or website inquiry",
    body: "A call goes unanswered, or someone fills out a form on your site.",
  },
  {
    title: "Automatic response",
    body: "Relay responds by text or email so the person hears from you, even while you're busy.",
  },
  {
    title: "Conversation and follow-up",
    body: "If they go quiet, Relay follows up. You can pick up the conversation whenever you're ready.",
  },
  {
    title: "Opportunity to book",
    body: "Interested prospects get a link to schedule an appointment.",
  },
] as const;

export const RELAY_CAPABILITIES = [
  {
    group: "Respond",
    items: [
      "Missed call text back",
      "Automatic website inquiry responses by SMS and/or email",
      "Notifications about new leads and important activity",
    ],
  },
  {
    group: "Follow up",
    items: [
      "Automated follow-up when prospects don't respond",
      "Booking links so interested prospects can schedule an appointment",
    ],
  },
  {
    group: "Organize",
    items: [
      "A lead pipeline: New Lead → Contacted → Interested → Appointment → Won/Lost",
      "Centralized conversations and lead history",
      "Basic reporting on lead activity, responses, and appointments where tracking supports it",
    ],
  },
] as const;

export const RELAY_MANAGED_ITEMS = [
  "Initial system setup and workflow configuration",
  "Connecting your phone number, forms, and calendar",
  "Ongoing automation maintenance and troubleshooting",
] as const;

export const RELAY_NOT_INCLUDED = [
  "an AI receptionist or advanced conversational AI",
  "review or reputation automation",
  "advertising management",
  "unlimited custom automations",
] as const;

export const NEED_OPTIONS = [
  "New website",
  "Website redesign",
  "Website management",
  "Not sure",
] as const;

export const MARCUS_WEBSITE_EXCERPT =
  "The website is not only visually stunning but also user-friendly, making it easy for my customers to navigate and find what they need.";

export const WEBSITE_REVIEWS = [
  {
    name: "Marcus W.",
    company: "Vatt Media Marketing",
    paragraphs: [
      "I recently had the pleasure of working with Statica on a new website for my business, and I couldn’t be happier with the results. Statica's graphic design skills are top-notch, bringing a fresh and modern look to my online presence that truly resonates with my audience. His attention to detail and commitment to delivering a quality product are unmatched.",
      "The website is not only visually stunning but also user-friendly, making it easy for my customers to navigate and find what they need. Since launching the new site, I've noticed a significant increase in client inquiries and conversions. The professional and attractive digital presence that Statica created has been instrumental in helping me attract and retain more clients.",
      "If you're looking for a talented and reliable graphic designer, I highly recommend Statica. He’s not just a designer; he’s a creative partner who genuinely cares about your vision and business success.",
    ],
  },
  {
    name: "Dwight D.",
    company: "Tuftalot",
    paragraphs: [
      "Statica’s work is amazing! Have been working with them over 2 years, and the production only gets better. Pays close attention to detail, very responsive and works hard to bring your exact idea to life",
    ],
  },
  {
    name: "Dashiell Desravines",
    company: "FleriLab",
    paragraphs: [
      "Statica helped me turn my vision into a reality through designing an intuitive and user-friendly website for my business, FleriLab. There were many intricacies that had to be overcome to make this possible, such as designing the payment link and contact form. Statica made every challenge look easy and maintained constant communication throughout the website design process. These qualities made the overall process smooth, straightforward, and understandable. I’m looking forward to using Statica’s services again to add even more features to my website!",
    ],
  },
] as const;

export const FLERILAB = {
  slug: "flerilab",
  name: "FleriLab",
  label: "Client project",
  deliveryLabel: "Website at delivery",
  type: "Nonprofit website",
  scope: "Website design and build",
  heroImage: "/images/projects/fleri1.png",
  detailImage: "/images/projects/fleri2.png",
  details:
    "A website for FleriLab, a nonprofit advancing sustainable agriculture and scientific innovation in Haiti. Visitors can learn about the work, meet the founder, and donate.",
} as const;

export function isSetupPlanId(value: string | null) {
  return SETUP_PLANS.some((plan) => plan.id === value);
}

export function isMonthlyPlanId(value: string | null) {
  return MONTHLY_PLANS.some((plan) => plan.id === value);
}
