import type { ReactNode } from "react";

export function TLDR({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  return (
    <details className="border border-green-400 rounded-md p-4">
      <summary className="font-bold cursor-pointer">TL;DR</summary>
      <div>{children}</div>
    </details>
  );
}
