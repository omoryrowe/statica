import { MONTHLY_PATH, PRICING_PATH, QUOTE_PATH, SITE } from "@/lib/site";

export default function sitemap() {
  const paths = [
    "/",
    "/websites",
    "/work",
    PRICING_PATH,
    MONTHLY_PATH,
    "/about",
    QUOTE_PATH,
  ];

  return paths.map((path) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
