import { ArrowUpRightIcon, GitHubIcon, StarIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { githubUsername, site } from "@/lib/site";

type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork_count?: number;
  updated_at: string;
};

export const dynamic = "force-static";

async function fetchRepos(username: string): Promise<Repo[] | null> {
  if (!username || username.length === 0) return null;
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6&type=owner`,
      { headers: { Accept: "application/vnd.github+json" }, next: { revalidate: 3600 } },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as Repo[];
    return data.sort((a, b) => b.stargazers_count - a.stargazers_count);
  } catch {
    return null;
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

export async function GitHubSection() {
  const repos = await fetchRepos(githubUsername);

  return (
    <section id="github" className="mx-auto w-full max-w-5xl px-6 py-24">
      <SectionHeading
        eyebrow="Open Source"
        title="Latest from GitHub."
        description="Fetched live from the GitHub API at build time — point githubUsername in src/lib/site.ts at your account."
      />

      {repos === null ? (
        <Reveal>
          <div className="glass-card rounded-2xl border-dashed p-8 text-center">
            <GitHubIcon className="mx-auto h-10 w-10 text-zinc-300 dark:text-zinc-600" />
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
              No public repos found for{" "}
              <code className="font-mono text-indigo-600 dark:text-indigo-400">
                {githubUsername || "your-username"}
              </code>
              . Set <code className="font-mono">githubUsername</code> in{" "}
              <code className="font-mono">src/lib/site.ts</code>, or make a repo public.
            </p>
          </div>
        </Reveal>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {repos.map((repo, i) => (
            <Reveal key={repo.name} delay={i * 70} as="article">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group flex h-full flex-col rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:border-indigo-400/60 hover:shadow-md dark:hover:border-indigo-400/50"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-mono text-sm font-semibold text-indigo-600 group-hover:underline dark:text-indigo-400">
                    {repo.name}
                  </h3>
                  <ArrowUpRightIcon className="h-4 w-4 text-zinc-300 transition-colors group-hover:text-indigo-500 dark:text-zinc-600" />
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {repo.description ?? "No description provided."}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
                  {repo.language && (
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-indigo-500" />
                      {repo.language}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1">
                    <StarIcon className="h-3.5 w-3.5" />
                    {repo.stargazers_count}
                  </span>
                  <span className="ml-auto">Updated {formatDate(repo.updated_at)}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      )}

      <Reveal className="mt-8 text-center">
        <a
          href={site.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-btn inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:bg-white/15 dark:text-zinc-100 dark:hover:bg-white/15"
        >
          <GitHubIcon className="h-4 w-4" />
          See all repositories
        </a>
      </Reveal>
    </section>
  );
}