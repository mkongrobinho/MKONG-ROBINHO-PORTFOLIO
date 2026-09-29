import { BriefcaseIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/site";

export function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-5xl px-6 py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked."
        description="Chronological history is optional for a portfolio — lead with your most relevant roles."
      />

      <ol className="relative space-y-10 border-l border-black/10 pl-8 dark:border-white/15">
        {experience.map((job, i) => (
          <Reveal
            key={`${job.company}-${job.role}`}
            as="li"
            delay={i * 100}
            className="relative"
          >
            <span className="glass absolute -left-[41px] top-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-zinc-500 dark:text-zinc-400">
              <BriefcaseIcon className="h-3 w-3" />
            </span>
            <div className="glass-card rounded-2xl p-6 transition-colors hover:border-indigo-400/60 dark:hover:border-indigo-400/50">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold">
                  {job.role}
                  <span className="text-zinc-400 dark:text-zinc-500"> · </span>
                  <span className="text-indigo-600 dark:text-indigo-400">{job.company}</span>
                </h3>
                <time className="font-mono text-sm text-zinc-500 dark:text-zinc-400">
                  {job.period}
                </time>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}