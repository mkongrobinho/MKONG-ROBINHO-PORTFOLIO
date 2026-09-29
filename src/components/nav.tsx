"use client";

import { useState } from "react";
import { CloseIcon, GitHubIcon, LinkedInIcon, MenuIcon, MailIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mt-4 flex justify-center px-4">
      <nav className="glass-nav flex h-14 w-full max-w-3xl items-center justify-between gap-3 rounded-full pl-5 pr-2">
        <a href="#hero" className="shrink-0 text-sm font-semibold tracking-tight">
          <span className="text-indigo-600 dark:text-indigo-400">mkong</span>
          <span className="text-zinc-400 dark:text-zinc-500">/</span>
          <span className="text-zinc-800 dark:text-zinc-100">{site.firstName.toLowerCase()}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-white/20 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="glass-btn inline-flex h-9 w-9 items-center justify-center rounded-full text-zinc-700 dark:text-zinc-200"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass absolute left-1/2 top-full mt-2 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 rounded-2xl p-2">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-full px-3 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-white/20 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-1 flex items-center gap-1 border-t border-black/5 pt-2 dark:border-white/10">
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-600 hover:bg-white/20 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-600 hover:bg-white/20 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-600 hover:bg-white/20 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}