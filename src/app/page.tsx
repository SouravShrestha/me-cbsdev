import Hero from "@/components/home/Hero";
import ImageCarousel from "@/components/home/ImageCarousel";
import Work from "@/components/home/Work";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <Hero />
      <ImageCarousel />
      <div className="sm:px-8 mt-10">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <Work />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
