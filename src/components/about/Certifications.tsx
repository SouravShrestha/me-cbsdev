import { ExternalLinkIcon } from "@/components/icons";
import { getCertifications } from "@/lib/about";
import SectionHeading from "./SectionHeading";

export default async function Certifications() {
  const certifications = await getCertifications();

  return (
    <section>
      <SectionHeading number="03" label="Certifications & Badges" />

      <div className="mt-6 -mx-3 space-y-1.5">
        {certifications.map((cert) => {
          const CertContent = (
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-none items-center justify-center overflow-hidden rounded-md bg-white text-zinc-500 ring-1 ring-zinc-200 dark:ring-zinc-700/50">
                <cert.icon className="h-7 w-7 text-zinc-500 dark:text-zinc-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {cert.title}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {cert.issuer} {cert.details && `· ${cert.details}`}
                </p>
              </div>
              {cert.url && (
                <ExternalLinkIcon className="h-4 w-4 flex-none text-zinc-400 dark:text-zinc-500" />
              )}
            </div>
          );

          if (cert.url) {
            return (
              <a
                key={cert.title}
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg p-3 transition hover:bg-zinc-50 dark:hover:bg-zinc-800/40"
              >
                {CertContent}
              </a>
            );
          }

          return (
            <div key={cert.title} className="rounded-lg p-3">
              {CertContent}
            </div>
          );
        })}
      </div>
    </section>
  );
}
