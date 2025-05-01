import { useId } from "react";
import type { ComponentProps } from "react";
import { cn } from "#/utils/cn";

export function Abbr(props: ComponentProps<"abbr">) {
  let id = useId();
  return (
    <>
      <abbr
        {...props}
        // Add the `peer` class to mark this element as a peer
        className={cn(props.className, `anchor/abbr-${id}`, "peer")}
        // Add tabIndex to make the abbr focusable if it doesn't naturally receive focus
        tabIndex={0}
      />
      <span
        // Keep `hidden` for the default state
        // Add `peer-hover:inline-flex` to show on hover of the peer
        // Add `peer-focus:inline-flex` to show on focus of the peer
        className={cn(
          `anchor`, // Keep anchor class if needed by toolwind/anchors or other logic
          `hidden`,
          "absolute",
          `peer-hover:inline-flex`,
          `peer-focus:inline-flex`, // Show on focus as well
          `anchored/abbr-${id}`,
          `anchored-bottom-span-right`,
          // "top-anchor-bottom-4",
          "top-[calc(anchor(bottom)+4rem)]",
          // "left-anchor-right-4",
          "left-[calc(anchor(right)+4rem)]",
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
