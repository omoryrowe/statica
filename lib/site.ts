export const SITE = {
  name: "Statica Design Agency",
  short: "Statica",
  url: "https://staticadesigns.com",
  founder: "Omory Rowe",
  location: "Orlando, Florida",
  region: "Central Florida",
};

export const QUOTE_PATH = "/request-services/request-quote";
export const PRICING_PATH = "/request-services/pricing-plans";
export const MONTHLY_PATH = "/request-services/monthly-plans";

export const PRICING_CUE =
  "Website setup from $750 + management from $99/month.";

export const SETUP_PLANS = [
  {
    id: "one-page",
    name: "One Page Website",
    priceLabel: "$750",
    summary:
      "Your services, business details, and contact form together on one focused page.",
  },
  {
    id: "business",
    name: "Business Website",
    priceLabel: "$1,000",
    summary:
      "Up to five pages, with dedicated space for your services, story, and contact details.",
  },
  {
    id: "expanded",
    name: "Expanded Website",
    priceLabel: "$1,500",
    summary:
      "Up to eight pages for businesses that need to explain more services or share more information.",
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
    "SSL and domain-configuration management",
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
  tagline: "Care, plus inquiry follow-up.",
  updateAllowance: "60 minutes of minor content updates per month",
  features: [
    "Everything in Statica Care",
    "60 minutes total of minor content updates per month",
    "Missed-call text back",
    "Automated inquiry follow-up",
    "Lead pipeline setup and maintenance",
  ],
} as const;

export const MONTHLY_PLANS = [CARE_PLAN, RELAY_PLAN] as const;

export const RELAY_NOTES = [
  "Statica maintains the follow-up system. You handle customer conversations.",
  "Setup and activation are arranged during onboarding. Calling and messaging usage is billed separately.",
  "Relay setup costs, if applicable, are included in the initial quote before agreement.",
] as const;

export const NEED_OPTIONS = [
  "New website",
  "Website redesign",
  "Website management",
  "Not sure",
] as const;

export const MARCUS_WEBSITE_EXCERPT =
  "The website is not only visually stunning but also user-friendly, making it easy for my customers to navigate and find what they need.";

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
