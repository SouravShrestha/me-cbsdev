import { getModules } from "@/lib/modules";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import BackToModules from "@/components/modules/BackToModules";
import ModuleHeader from "@/components/modules/ModuleHeader";
import ModuleBody from "@/components/modules/ModuleBody";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, PERSON_ID } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const modules = await getModules();
  return modules.map((mod) => ({
    slug: mod.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const modules = await getModules();
  const mod = modules.find((m) => m.slug === slug);

  if (!mod) {
    return {
      title: "Module Not Found",
    };
  }

  return {
    title: `${mod.name} | Modules`,
    description: mod.description,
    alternates: {
      canonical: `/modules/${mod.slug}`,
    },
    openGraph: {
      title: `${mod.name} | Modules - Sourav Shrestha`,
      description: mod.description,
      url: `/modules/${mod.slug}`,
    },
  };
}

export default async function ModulePage({ params }: Props) {
  const { slug } = await params;
  const modules = await getModules();
  const mod = modules.find((m) => m.slug === slug);

  if (!mod) {
    notFound();
  }

  return (
    <div className="sm:px-8 mt-16 sm:mt-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="xl:relative">
              <div className="mx-auto max-w-2xl">
                <JsonLd
                  data={{
                    "@context": "https://schema.org",
                    "@type": "SoftwareSourceCode",
                    name: mod.name,
                    description: mod.description,
                    url: `${SITE_URL}/modules/${mod.slug}`,
                    keywords: mod.keywords.join(", "),
                    license: mod.license,
                    programmingLanguage: "JavaScript",
                    ...(mod.github && { codeRepository: mod.github.href }),
                    author: { "@id": PERSON_ID, "@type": "Person", name: "Sourav Shrestha" },
                  }}
                />
                <JsonLd
                  data={{
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: [
                      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                      { "@type": "ListItem", position: 2, name: "Modules", item: `${SITE_URL}/modules` },
                      { "@type": "ListItem", position: 3, name: mod.name, item: `${SITE_URL}/modules/${mod.slug}` },
                    ],
                  }}
                />
                <BackToModules />
                <ModuleHeader pkg={mod} />
                <ModuleBody pkg={mod} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
