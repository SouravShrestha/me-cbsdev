import { Metadata } from "next";
import Image from "next/image";
import portraitImage from "@/images/me.webp";
import Intro from "@/components/about/Intro";
import OffScreen from "@/components/about/OffScreen";
import Contact from "@/components/about/Contact";
import Skills from "@/components/about/Skills";
import Certifications from "@/components/about/Certifications";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="sm:px-8 mt-16 sm:mt-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
              <div className="flex flex-col gap-y-16">
                <Intro />
                <OffScreen />
              </div>

              <div className="flex flex-col gap-y-16 lg:pl-20">
                <div className="mx-auto max-w-xs px-2.5 lg:mx-0 lg:max-w-none">
                  <Image
                    src={portraitImage}
                    alt="Sourav Shrestha portrait"
                    sizes="(min-width: 1024px) 32rem, 20rem"
                    className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                  />
                </div>

                <Contact />
                <Skills />
                <Certifications />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
