import { MailIcon } from "@/components/icons";
import { about, socialLinks } from "@/lib/about";

export default function Contact() {
  return (
    <div>
      <h3 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
        Follow on:
      </h3>
      <ul
        role="list"
        className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3.5 sm:grid-cols-2"
      >
        {socialLinks.map((link) => (
          <li key={link.name} className="flex">
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="group flex text-sm font-medium text-zinc-800 transition hover:text-accent-hover dark:text-zinc-200"
            >
              <link.icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-accent" />
              <span className="ml-4 mt-0.5">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <ul
        role="list"
        className="mt-6 border-t border-zinc-100 pt-6 dark:border-zinc-700/40"
      >
        <li className="flex">
          <a
            href={`mailto:${about.contactEmail}`}
            target="_blank"
            rel="noreferrer"
            className="group flex text-sm font-medium text-zinc-800 transition hover:text-accent-hover dark:text-zinc-200 dark:hover:text-accent-hover"
          >
            <MailIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-accent-hover" />
            <span className="ml-4 tracking-wide mt-0.5">
              {about.contactEmail}
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
