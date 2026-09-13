import { permanentRedirect } from "next/navigation";

export default function LegacyOurStory() {
  permanentRedirect("/about");
}
