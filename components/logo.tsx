import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "auto",
  weight: ["300", "400", "700", "900"],
});

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hidden md:flex gap-x-2  items-center transition hover:opacity-75">
        <Image src={"/logo.webp"} alt="Logo" width={60} height={60} priority />
        <p
          className={cn(
            "text-2xl mt-1 text-black  -700 font-semibold",
            merriweather.className
          )}
        >
          NEXUS
        </p>
      </div>
    </Link>
  );
};
