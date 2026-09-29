import { CodeIcon, ServerIcon, TerminalIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/site";

const iconFor = (label: string) => {
  if (label === "Frontend") return CodeIcon;
  if (label === "Backend") return ServerIcon;
  return TerminalIcon;
};

export function Skills() {
  return (
    <section id="skills">
      <div className="mx-auto w-full max-w-5xl px-6 py-24">
        <SectionHeading
          eyebrow="Skills"
          title="The stack I reach for."
          description="The tools and technologies I use day to day. Swap these out in src/lib/site.ts to match your real experience."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = iconFor(group.label);
            return (
              <Reveal
                key={group.label}
                delay={i * 120}
                className="glass-card group rounded-2xl p-6 transition-colors hover:border-indigo-400/60 dark:hover:border-indigo-400/50"
              >
                <div className="mb-4 inline-flex rounded-xl bg-white/40 p-3 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white dark:bg-white/10 dark:text-indigo-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{group.label}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{group.blurb}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="chip rounded-md px-2.5 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}