import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto grid w-full max-w-5xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionHeading eyebrow="Contact" title="Let's build something together." />
          <Reveal delay={100}>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Have a role, a project, or a problem worth solving? My inbox is always open — I
              usually reply within a day.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-3 text-zinc-700 transition-colors hover:text-indigo-600 dark:text-zinc-300 dark:hover:text-indigo-400"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/50 bg-white/40 dark:border-white/15 dark:bg-white/10">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  {site.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/50 bg-white/40 dark:border-white/15 dark:bg-white/10">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                {site.location}
              </li>
            </ul>
            <div className="mt-8 flex items-center gap-2">
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="glass inline-flex h-11 w-11 items-center justify-center rounded-xl text-zinc-600 transition-colors hover:border-indigo-400/60 hover:text-indigo-600 dark:text-zinc-300 dark:hover:border-indigo-400/50 dark:hover:text-indigo-400"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="glass inline-flex h-11 w-11 items-center justify-center rounded-xl text-zinc-600 transition-colors hover:border-indigo-400/60 hover:text-indigo-600 dark:text-zinc-300 dark:hover:border-indigo-400/50 dark:hover:text-indigo-400"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <form
            action={site.formspreeEndpoint}
            method="POST"
            className="glass-card space-y-5 rounded-2xl p-6 sm:p-8"
          >
            <input type="hidden" name="_subject" value={`New message from ${site.name} portfolio`} />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jane Doe"
                  className="w-full rounded-lg border border-white/50 bg-white/40 px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/15 dark:bg-white/10 dark:text-zinc-100 dark:placeholder:text-zinc-400"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@example.com"
                  className="w-full rounded-lg border border-white/50 bg-white/40 px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/15 dark:bg-white/10 dark:text-zinc-100 dark:placeholder:text-zinc-400"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Message
              </span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or opportunity…"
                className="w-full resize-y rounded-lg border border-white/50 bg-white/40 px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/15 dark:bg-white/10 dark:text-zinc-100 dark:placeholder:text-zinc-400"
              />
            </label>
            <button
              type="submit"
              className="glass-strong w-full rounded-lg px-5 py-3 text-sm font-semibold text-zinc-900 transition-shadow hover:shadow-lg dark:text-zinc-950"
            >
              Send message
            </button>
            <p className="text-center text-xs text-zinc-400 dark:text-zinc-500">
              Form powered by Formspree — set your endpoint in{" "}
              <code className="font-mono">src/lib/site.ts</code>.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}