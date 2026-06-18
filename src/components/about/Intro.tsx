import { getAbout } from "@/lib/about";

export default async function Intro() {
  const about = await getAbout();

  return (
    <div>
      <h1 className="text-3xl font-semibold text-zinc-800 sm:text-5xl dark:text-zinc-100 leading-10 sm:leading-14">
        {about.title}
      </h1>
      <div className="mt-6 space-y-4 text-base text-zinc-600 dark:text-zinc-400 leading-7">
        {about.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
