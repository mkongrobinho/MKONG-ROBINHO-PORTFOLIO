import { ArrowUpRightIcon, ExternalLinkIcon, FolderIcon, GitHubIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/site";

export function Projects() {
  return (
    <section id="projects">
      <div className="mx-auto w-full max-w-5xl px-6 py-24">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work."
          description="A few things I've built. Replace the placeholders with your real projects — each card is driven entirely by src/lib/site.ts."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal
              key={project.name}
              delay={i * 110}
              as="article"
              className="glass-card group flex flex-col overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:border-indigo-400/60 hover:shadow-lg dark:hover:border-indigo-400/50"
            >
              <div
                aria-hidden
                className={`relative flex h-32 items-center justify-center bg-gradient-to-br ${project.accent}`}
              >
                {project.highlight && (
                  <span className="absolute left-3 top-3 rounded-full bg-black/25 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur">
                    Featured
                  </span>
                )}
                <FolderIcon className="h-10 w-10 text-white/90 transition-transform duration-300 group-hover:scale-110" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="chip rounded-md px-2 py-0.5 font-mono text-[11px] text-zinc-700 dark:text-zinc-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center gap-3 border-t border-black/5 pt-4 dark:border-white/10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    Source
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                      Live demo
                    </a>
                  )}
                  <ArrowUpRightIcon className="ml-auto h-4 w-4 text-zinc-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-indigo-500 dark:text-zinc-600" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}