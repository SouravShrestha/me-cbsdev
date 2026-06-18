import Link from "next/link";
import { heroSocialLinks } from "@/lib/home";

export default function Hero() {
  return (
    <div className="sm:px-8 mt-12">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="max-w-2xl">
              <h1 className="reveal text-3xl font-semibold text-zinc-800 sm:text-5xl dark:text-zinc-100 leading-10 sm:leading-14">
                Hi I&apos;m Sourav Shrestha, <br /> But you can call me{" "}
                <span
                  tabIndex={0}
                  className="relative group cursor-pointer hover:text-accent focus:text-accent outline-none [-webkit-tap-highlight-color:transparent]"
                >
                  CBS
                  <span className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-zinc-800/50 pl-2 pr-2 py-1 text-sm font-normal text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 dark:bg-zinc-800 dark:text-white z-50">
                    🔥 Cool Boy Sourav
                  </span>
                </span>
              </h1>
              <p className="reveal reveal-d1 mt-6 text-base text-zinc-600 dark:text-zinc-400 leading-7">
                I&apos;m a .NET Full Stack Developer passionate about building
                scalable applications, clean architectures, and great user
                experiences.
                <br />
                I&apos;m building{" "}
                <a
                  href="https://github.com/SouravShrestha/we-track"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-zinc-900 hover:underline dark:text-zinc-100"
                >
                  we-track
                </a>
                ,{" "}
                <a
                  href="https://github.com/SouravShrestha/q-and-a-guru"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-zinc-900 hover:underline dark:text-zinc-100"
                >
                  q-and-a-guru
                </a>{" "}
                and other cool{" "}
                <Link
                  href="/projects"
                  className="font-semibold text-zinc-900 hover:underline dark:text-zinc-100"
                >
                  projects
                </Link>
                .
                <br />I love turning ideas into reliable software.
              </p>
              <div className="reveal reveal-d2 mt-6 flex flex-wrap items-center justify-start gap-6">
                {heroSocialLinks.map((link) => (
                  <SocialLink
                    key={link.name}
                    href={link.url}
                    icon={link.icon}
                    ariaLabel={link.ariaLabel}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialLink({
  icon: Icon,
  href,
  ariaLabel,
}: {
  icon: React.ElementType;
  href: string;
  ariaLabel: string;
}) {
  return (
    <a
      className="group -m-1 p-1"
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noreferrer"
    >
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </a>
  );
}
