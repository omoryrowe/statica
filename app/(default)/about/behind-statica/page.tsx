import { permanentRedirect } from "next/navigation";

export default function LegacyBehindStatica() {
  permanentRedirect("/about");
}
