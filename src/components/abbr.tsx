import { useId } from "react";
import type { ComponentProps } from "react";
import { cn } from "#/utils/cn";

export function Abbr(props: ComponentProps<"abbr">) {
  let id = useId().replace(/:/g, "-");
  return (
    <>
      <abbr
        {...props}
        style={{
          ...props.style,
          // @ts-ignore - TS doesn't recognize anchorName as a valid property
          anchorName: `--abbr-${id}`,
        }}
        className={cn(
          props.className,
          // - can't add this in because it's a dynamic classname which
          // - tailwind doesn't support
          // `anchor/abbr`,
          // - peer used to handle the hover/focus state
          "peer",
          "inline-flex",
        )}
        tabIndex={0}
      />
      <span
        style={{
          // @ts-ignore - TS doesn't recognize positionAnchor as a valid property
          positionAnchor: `--abbr-${id}`,
        }}
        className={cn(
          `hidden`,
          "absolute",
          `peer-hover:inline-flex`,
          `peer-focus:inline-flex`,
          // - can't add this in because it's a dynamic classname which
          // - tailwind doesn't support
          // `anchored/abbr`,
          "top-anchor-bottom-1",
          "left-anchor-left-0",
          `p-2`,
          `bg-slate-600`,
          `text-white`,
          `rounded`,
        )}
      >
        {props.title}
      </span>
    </>
  );
}
