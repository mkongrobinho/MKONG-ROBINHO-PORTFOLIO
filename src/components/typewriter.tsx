"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
  className?: string;
};

export function Typewriter({
  words,
  typingSpeed = 85,
  deletingSpeed = 40,
  pauseMs = 1600,
  className = "",
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const word = words[wordIndex % words.length];

  useEffect(() => {
    const word = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex === word.length) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setCharIndex(0);
        setWordIndex((i) => (i + 1) % words.length);
      }, deletingSpeed);
    } else {
      timeout = setTimeout(
        () => setCharIndex((c) => c + (deleting ? -1 : 1)),
        deleting ? deletingSpeed : typingSpeed,
      );
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, pauseMs, typingSpeed, deletingSpeed]);

  return (
    <span className={className}>
      {word.slice(0, charIndex)}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.1em] animate-pulse rounded-full bg-indigo-500 dark:bg-indigo-400" />
    </span>
  );
}