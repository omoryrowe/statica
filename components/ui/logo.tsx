import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/statica/Statica Logo White Cropped.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Statica Design Agency home">
      <Image src={logo} alt="" width={148} height={48} className="h-9 w-auto" />
    </Link>
  );
}
