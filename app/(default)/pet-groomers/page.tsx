import NicheLandingPage from "@/components/niche-landing";
import { pageMetadata } from "@/lib/metadata";
import { NICHES } from "@/lib/niches";

const niche = NICHES["pet-groomers"];

export const metadata = pageMetadata({ ...niche.metadata, path: niche.path });

export default function Page() {
  return <NicheLandingPage niche="pet-groomers" />;
}
