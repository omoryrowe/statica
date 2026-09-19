import { CONCEPT_PROJECTS } from "@/lib/concepts";
import { NICHE_LIST } from "@/lib/niches";
import {
  MONTHLY_PATH,
  PRICING_PATH,
  PRIVACY_PATH,
  QUOTE_PATH,
  RELAY_PATH,
  SITE,
  TERMS_PATH,
} from "@/lib/site";

export default function sitemap() {
  const paths = [
    "/",
    "/websites",
    RELAY_PATH,
    "/work",
    ...NICHE_LIST.map((niche) => niche.path),
    ...CONCEPT_PROJECTS.map((project) => project.projectPath),
    PRICING_PATH,
    MONTHLY_PATH,
    "/about",
    QUOTE_PATH,
    PRIVACY_PATH,
    TERMS_PATH,
  ];

  return paths.map((path) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : path === PRIVACY_PATH || path === TERMS_PATH ? 0.3 : 0.7,
  }));
}
