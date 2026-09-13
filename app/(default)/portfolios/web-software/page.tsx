import { permanentRedirect } from "next/navigation";

export default function LegacyWebPortfolio() {
  permanentRedirect("/work");
}
