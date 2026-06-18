import Image from "next/image";
import { BriefcaseIcon, ArrowDownIcon } from "@/components/icons";
import { works } from "@/lib/work";

export default function Work() {
  return (
    <div className="order-1 space-y-10 lg:pl-16 xl:pl-24">
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <span className="ml-3 mt-1">Work</span>
        </h2>
        <ol className="mt-8 space-y-6">
          {works.map((work, index) => (
            <li key={index}>
              <a
                href={work.link}
                className="flex gap-4"
                aria-label={work.role}
                target="_blank"
                rel="noreferrer"
                title={`${work.company} - ${work.role}`}
              >
                <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    alt={`${work.company} logo`}
                    loading="lazy"
                    width={work.width}
                    height={work.height}
                    decoding="async"
                    className="h-7 w-7 rounded-full"
                    style={{ color: "transparent", objectFit: "cover" }}
                    src={work.logo}
                  />
                </div>
                <dl className="flex flex-auto flex-wrap gap-x-2 mt-1 -ml-2 sm:ml-0">
                  <dt className="sr-only">Company</dt>
                  <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {work.company}
                  </dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                    {work.role}
                  </dd>
                  <dt className="sr-only">Date</dt>
                  <dd
                    className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                    aria-label={`${work.startDate} until ${work.endDate}`}
                  >
                    <time dateTime={work.dateTimeStart}>{work.startDate}</time>{" "}
                    <span aria-hidden="true"> - </span>{" "}
                    <time dateTime={work.dateTimeEnd}>{work.endDate}</time>
                  </dd>
                </dl>
              </a>
            </li>
          ))}
        </ol>
        <a
          className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
          href="https://www.icloud.com/iclouddrive/01dRgeVVa3AdFJROvZztVnD0A#SouravShrestha-Resume"
        >
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </a>
      </div>
    </div>
  );
}
