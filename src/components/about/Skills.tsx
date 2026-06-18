import { skills } from "@/lib/about";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section>
      <SectionHeading number="02" label="Skills" />

      <div className="mt-6 space-y-6">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {skillGroup.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-2.5 py-2 sm:py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-700/50 dark:bg-zinc-800/60 dark:text-zinc-300"
                >
                  <skill.icon className="h-3.5 w-3.5 text-zinc-500 dark:text-zinc-400" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
