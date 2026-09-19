import NicheLandingPage from "@/components/niche-landing";
import { pageMetadata } from "@/lib/metadata";
import { NICHES } from "@/lib/niches";

const niche = NICHES["wedding-planners"];

export const metadata = pageMetadata({ ...niche.metadata, path: niche.path });

export default function Page() {
  return <NicheLandingPage niche="wedding-planners" />;
}
