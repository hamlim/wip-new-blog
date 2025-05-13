"use client";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Anchor } from "#/components/anchor";

export function BlueskyShareLink({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  let [currentURL, setCurrentURL] = useState<string | null>(null);

  useEffect(() => {
    setCurrentURL(window.location.href);
  }, []);

  return (
    <Anchor
      target="_blank"
      href={`https://bsky.app/intent/compose?text=${encodeURIComponent(
        `${title}\n${currentURL}`,
      )}`}
    >
      {children}
    </Anchor>
  );
}
