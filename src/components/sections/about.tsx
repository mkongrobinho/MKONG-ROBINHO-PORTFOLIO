import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { about } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-5xl px-6 py-24">
      <SectionHeading
        eyebrow="About"
        title="Building software that ships, not just demos."
        description="A few paragraphs about who you are, what you enjoy working on, and the kind of problems you like to solve."
      />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-4 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={150}>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-5 text-center"
              >
                <dt className="order-2 mt-1 block text-sm text-zinc-500 dark:text-zinc-400">
                  {stat.label}
                </dt>
                <dd className="order-1 text-3xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}