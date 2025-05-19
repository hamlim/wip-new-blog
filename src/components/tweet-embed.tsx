import { TwitterIcon } from "lucide-react";
import type { ReactNode } from "react";

export function TweetEmbed({ children }: { children: ReactNode }): ReactNode {
  return (
    <div className="bg-blue-100 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-400 dark:border-blue-600 prose prose-blue">
      <TwitterIcon className="w-8 h-8 block mb-2 text-blue-400 dark:text-blue-600" />
      <blockquote>{children}</blockquote>
    </div>
  );
}
