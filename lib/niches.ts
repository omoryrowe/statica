import type { NicheId } from "@/lib/attribution";
import { CARE_PLAN } from "@/lib/site";

/**
 * Copy and metadata for niche landing pages. Project data (URLs, previews,
 * strategy) lives in lib/concepts.ts and is joined by niche id at render time.
 * To add a niche: extend NICHE_SOURCES in lib/attribution.ts, add a concept in
 * lib/concepts.ts, add an entry here, and add a two-line route file.
 */

export interface NicheLanding {
  id: NicheId;
  path: `/${string}`;
  /** Plural audience, used in alt text and labels. */
  audience: string;
  metadata: { title: string; description: string };
  hero: { eyebrow: string; headline: string; lede: string };
  why: {
    eyebrow: string;
    headline: string;
    intro: string;
    points: ReadonlyArray<readonly [title: string, body: string]>;
    closing?: string;
  };
  featured: { headline: string; intro: string };
  build: {
    headline: string;
    intro: string;
    items: ReadonlyArray<readonly [title: string, body: string]>;
  };
  whyStatica: { intro: string };
  final: { headline: string; body: string };
}

export const NICHES: Record<NicheId, NicheLanding> = {
  contractors: {
    id: "contractors",
    path: "/contractors",
    audience: "contractors",
    metadata: {
      title: "Contractor Website Design in Orlando & Central Florida",
      description:
        "Custom contractor websites that show your finished work, explain your services and make estimate requests easy. Designed and built in Orlando by Statica.",
    },
    hero: {
      eyebrow: "Websites for contractors",
      headline: "Websites built to help contractors win more work.",
      lede: "Homeowners look at your website before they ever pick up the phone. I design and build custom sites that show your finished projects, explain your services clearly and make asking for an estimate simple.",
    },
    why: {
      eyebrow: "Why it matters",
      headline: "Homeowners check you out before they call.",
      intro:
        "A remodel is a big decision, and many homeowners compare a few contractors online first. They are looking for proof that you are the right crew to let into their home.",
      points: [
        ["Your previous work", "Finished projects, shown properly, say more than any description of your work."],
        ["Your services", "What you do, spelled out in plain language, so nobody has to call to find out."],
        ["Credibility", "Licensing, insurance, warranty and reviews where a cautious owner expects to find them."],
        ["Where you work", "Owners want to know quickly whether you serve their town."],
        ["An easy estimate request", "A short form and a tap-to-call button, within reach on every page."],
        ["A professional phone experience", "Many first visits happen on a phone, so the site has to hold up there."],
      ],
    },
    featured: {
      headline: "See what a contractor website can look like.",
      intro:
        "Ironwood Home & Build is a fictional Orlando remodeler I designed to show the approach. Open the live demo and explore all five pages the way a homeowner would.",
    },
    build: {
      headline: "A site shaped around how homeowners choose a contractor.",
      intro:
        "The exact pages depend on your business and the package we agree on. This is the kind of thing I build for contractors.",
      items: [
        ["Service pages", "Each kind of work you do, explained clearly, so the right jobs find you."],
        ["A project gallery", "Your best finished work, organized so homeowners can see what they would be getting."],
        ["An estimate request flow", "A simple form that lands in your inbox, with a call button beside it."],
        ["Service areas", "The cities and neighborhoods you cover, stated plainly."],
        ["Trust and credibility", "Licensing, insurance, warranty details and approved customer reviews, placed where they help."],
        ["Mobile-first calls to action", "Buttons sized for thumbs, so calling or requesting an estimate takes one tap."],
        ["Contact forms", "Clear ways to reach you, wherever a visitor decides they are ready."],
      ],
    },
    whyStatica: {
      intro:
        "I am based in Orlando and build websites for contractors across Central Florida, and remotely elsewhere. You work with me directly, from the first conversation to launch and beyond.",
    },
    final: {
      headline: "Let’s build a website that works as hard as you do.",
      body: "Tell me about your business and what you want the website to do. I will follow up personally, talk through the project, and agree on scope and price before any work begins.",
    },
  },

  "wedding-planners": {
    id: "wedding-planners",
    path: "/wedding-planners",
    audience: "wedding planners",
    metadata: {
      title: "Wedding Planner Website Design in Orlando",
      description:
        "Custom wedding planner websites with editorial presentation, portfolio-led design and consultation-ready inquiry flows. Designed and built in Orlando by Statica.",
    },
    hero: {
      eyebrow: "Websites for wedding planners",
      headline: "Beautiful websites for unforgettable wedding brands.",
      lede: "Couples decide whether to trust you long before the first consultation. I design custom websites that show your taste, present your services and make it easy to start the conversation.",
    },
    why: {
      eyebrow: "Why it matters",
      headline: "Couples judge the experience before they meet you.",
      intro:
        "Planning a wedding is personal and expensive, so couples look closely at how a planner presents themselves. Your website is the first thing they see of your work.",
      points: [
        ["Presentation", "The polish of the site tells couples how carefully you will handle their day."],
        ["Aesthetic fit", "They are asking whether your taste matches theirs, and images answer faster than words."],
        ["Previous weddings", "A considered portfolio shows what you can pull off, and how it feels."],
        ["Personality", "Couples hire a person. They want a sense of who will be beside them."],
        ["Services", "Clear options help them see where they fit, and what to ask about."],
        ["Trust", "Calm structure and thoughtful details signal that the day is in safe hands."],
      ],
      closing:
        "A website that feels premium makes your work feel premium, before the consultation ever happens.",
    },
    featured: {
      headline: "See what a wedding planner website can look like.",
      intro:
        "Vow & Velvet Weddings is a fictional luxury planning studio I designed to show the approach. Open the live demo and browse it the way an engaged couple would.",
    },
    build: {
      headline: "A website that carries your brand as beautifully as you carry a wedding.",
      intro:
        "The exact pages depend on your business and the package we agree on. This is the kind of thing I build for wedding planners.",
      items: [
        ["A wedding portfolio", "Your best weddings presented with room to breathe, at the scale your photography deserves."],
        ["Services and packages", "Full planning, coordination, design or destination work, explained so couples can see where they fit."],
        ["About and storytelling", "Your story and your standards, so couples feel they know you before they meet."],
        ["Consultation inquiry", "An inquiry form that invites a conversation instead of asking for a commitment."],
        ["Testimonials", "Words from your couples, with their approval, placed alongside the work they describe."],
        ["A polished phone experience", "Couples save inspiration on their phones, so the design is composed for small screens too."],
        ["Strong visual presentation", "Typography, layout and imagery worked out together, so nothing feels like a template."],
      ],
    },
    whyStatica: {
      intro:
        "I am based in Orlando and design websites for wedding planners across Central Florida, and remotely for planners elsewhere. You work with me directly, from the first conversation to launch and beyond.",
    },
    final: {
      headline: "Your work is beautiful. Your website should show it.",
      body: "Tell me about your studio and the couples you want to reach. I will follow up personally, talk through the project, and agree on scope and price before any work begins.",
    },
  },

  "pet-groomers": {
    id: "pet-groomers",
    path: "/pet-groomers",
    audience: "pet groomers",
    metadata: {
      title: "Pet Groomer Website Design in Orlando",
      description:
        "Custom pet grooming websites with before-and-after galleries, clear services and easy appointment requests. Designed and built in Orlando by Statica.",
    },
    hero: {
      eyebrow: "Websites for pet groomers",
      headline: "Turn happy pets into more booked appointments.",
      lede: "Pet owners want to see the results, know what a visit costs and trust who is holding the scissors. I design custom grooming websites that show your work and make requesting an appointment simple.",
    },
    why: {
      eyebrow: "Why it matters",
      headline: "Owners are handing over a family member. They look closely first.",
      intro:
        "Choosing a groomer is a trust decision. Before booking, most owners want reassurance that their pet will be well looked after.",
      points: [
        ["The results", "A before-and-after gallery shows what a visit can do, better than any promise."],
        ["The services", "Owners want to know what is included and roughly what it costs."],
        ["The people", "A friendly introduction to you and your team helps owners feel comfortable."],
        ["The environment", "A clean, professional space, shown honestly, builds confidence."],
        ["How booking works", "Clear next steps take the guesswork out of asking for a time."],
        ["A quick request", "A short form and a big button, especially on a phone."],
      ],
    },
    featured: {
      headline: "See what a pet grooming website can look like.",
      intro:
        "Paws & Polish Grooming Co. is a fictional Orlando dog groomer I designed to show the approach. Open the live demo and try the before-and-after gallery yourself.",
    },
    build: {
      headline: "A site that makes booking a groom feel easy.",
      intro:
        "The exact pages depend on your business and the package we agree on. This is the kind of thing I build for pet groomers.",
      items: [
        ["Grooming services", "Each service explained in plain language, so owners know what to ask for."],
        ["A before-and-after gallery", "Your best transformations, shown so visitors can see the difference for themselves."],
        ["An appointment request flow", "A short form that sends requests straight to your inbox."],
        ["Pricing guidance", "Clear starting points, so owners know what to expect before they reach out."],
        ["Meet the groomers", "A warm introduction to you and your team, and the way you care for each pet."],
        ["Trust sections", "Handling, cleanliness, policies and approved reviews, gathered where owners will look."],
        ["Mobile booking calls to action", "A request button within thumb reach, because many owners will book from their phone."],
      ],
    },
    whyStatica: {
      intro:
        "I am based in Orlando and build websites for pet groomers across Central Florida, and remotely elsewhere. You work with me directly, from the first conversation to launch and beyond.",
    },
    final: {
      headline: "Give pet owners a better way to find and book you.",
      body: "Tell me about your grooming business and what you want the site to do. I will follow up personally, talk through the project, and agree on scope and price before any work begins.",
    },
  },
};

export const NICHE_LIST = Object.values(NICHES);

/** Shared "why Statica" points. Kept short on purpose. */
export const WHY_STATICA_POINTS = [
  ["Custom design, never a template", "Every site is designed around your business, your work and your customers."],
  ["Comfortable on a phone", "Readable text, simple navigation and buttons sized for thumbs."],
  ["Built to get inquiries", "Clear ways to call or request a quote, on every page that matters."],
  ["One person, start to finish", "You talk directly with me, the person who designs, builds and maintains your site."],
  ["Managed after launch", `Statica Care covers hosting, SSL, monitoring and maintenance, from ${CARE_PLAN.priceLabel}.`],
] as const;
