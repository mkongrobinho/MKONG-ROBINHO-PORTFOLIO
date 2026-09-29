import Image from "next/image";
import { ArrowRightIcon, GitHubIcon, DownloadIcon, MapPinIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Typewriter } from "@/components/typewriter";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 text-zinc-900 dark:text-white"
      />
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-5xl items-center gap-14 px-6 py-24 lg:grid-cols-[1fr_auto]">
        <div className="flex flex-col">
          <Reveal>
            <p className="glass mb-5 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-sm font-medium text-indigo-700 dark:text-indigo-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
              </span>
              Available for opportunities
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-300">
                {site.name}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 min-h-[2.5rem] text-xl font-medium text-zinc-700 sm:text-2xl dark:text-zinc-300">
              <Typewriter words={site.roles} />
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {site.tagline}
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="glass-strong inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-white/95 dark:text-zinc-950"
              >
                View my work
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href={site.resumeUrl}
                className="glass-btn inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:bg-white/15 dark:text-zinc-100 dark:hover:bg-white/15"
              >
                <DownloadIcon className="h-4 w-4" />
                Download CV
              </a>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:bg-white/15 dark:text-zinc-100 dark:hover:bg-white/15"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <p className="mt-10 inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <MapPinIcon className="h-4 w-4" />
              {site.location}
            </p>
          </Reveal>
        </div>

        <Reveal delay={150} className="justify-self-center lg:justify-self-end">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-full bg-indigo-500/35 blur-2xl"
            />
            <div className="glass relative h-64 w-64 overflow-hidden rounded-full p-1.5 sm:h-72 sm:w-72">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/me.jpg"
                  alt={`Portrait of ${site.firstName} ${site.name.split(" ").pop()}`}
                  fill
                  priority
                  sizes="288px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}