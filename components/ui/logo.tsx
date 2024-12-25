import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Statica">
      <Image src={logo} alt="Statica Logo" width={150} height={150} />
    </Link>
  );
}
