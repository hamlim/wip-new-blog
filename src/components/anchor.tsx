import type { ComponentProps, ReactNode } from "react";
import { Link } from "waku";
import { cn } from "#/utils/cn";

export let anchorClassName =
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-primary underline-offset-4 hover:underline focus:underline";

type AnchorProps = ComponentProps<"a"> & {
  children: ReactNode;
};

export function Anchor(props: AnchorProps): ReactNode {
  return <a {...props} className={cn(anchorClassName, props.className)} />;
}

export function LinkAnchor({ href, ...props }: AnchorProps): ReactNode {
  return (
    <Link
      {...props}
      to={href}
      className={cn(anchorClassName, props.className)}
    />
  );
}
