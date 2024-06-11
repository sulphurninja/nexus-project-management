import { MedalIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Merriweather, Poppins } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "auto",
  weight: ["300", "400", "700", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col px-8 sm:px-20 md:px-36">
      <div className="flex items-center justify-center flex-col gap-3">
        <div className="flex px-4 py-3 justify-center items-center rounded-full bg-amber-200 text-amber-700">
          <MedalIcon className="h-6 w-6 mr-2" />
          The Ultimate Task Management Solution
        </div>
        <div className="mt-3 mb-1">
          <h1
            className={cn(
              "text-3xl md:text-6xl text-center bg-gradient-to-br from-rose-400 to-purple-500 text-transparent bg-clip-text font-extrabold",
              merriweather.className
            )}
          >
            NEXUS
          </h1>
          <h2 className="text-center font-semibold">
          Elevating task management for your business.
          </h2>
        </div>
        <article className="uppercase bg-gradient-to-br from-sky-400 to-orange-400 text-white/90 text-2xl px-4 p-2 rounded-lg font-semibold w-fit">
          Create an Impact.
        </article>
        <div
          className={cn(
            "text-slate-500 text-center max-w-3xl mx-auto",
            poppins.className
          )}
        >
        Experience seamless project management with Nexus by A3M. Effortlessly streamline tasks, collaborate seamlessly, and enhance productivity. Simplify and organize your projects, all in one cohesive platform.
        </div>
        <Button
          variant={"default"}
          className="hover:bg-gray-700 font-semibold mt-10"
        >
          <Link href={"/sign-in"}>Get Nexus for free</Link>
        </Button>
      </div>
    </div>
  );
};

export default MarketingPage;
