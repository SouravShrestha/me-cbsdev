"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { carouselItems as items } from "@/lib/carousel";

export default function ImageCarousel() {
  // Track which flag is revealed by tap/click (hover is handled by CSS).
  const [active, setActive] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft =
        (containerRef.current.scrollWidth - containerRef.current.clientWidth) /
        2;
    }
  }, []);

  return (
    <div ref={containerRef} className="-my-4 overflow-x-auto py-4 no-scrollbar">
      <div className="flex gap-5 [justify-content:safe_center] sm:gap-8">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-label={item.label}
            onClick={() =>
              setActive((current) => (current === item.id ? null : item.id))
            }
            className={`group relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 ${item.rotate}`}
          >
            <Image
              src={item.image}
              alt={item.label}
              placeholder="blur"
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div
              className={`absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-zinc-100 text-3xl transition duration-200 group-hover:opacity-100 dark:bg-zinc-800 ${
                active === item.id ? "opacity-100" : "opacity-0"
              }`}
            >
              {item.emoji}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
