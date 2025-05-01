import type { ComponentProps } from "react";
import { Marquee } from "./marquee";

export function Spacer(props: ComponentProps<"div">) {
  return <Marquee className="mt-4" {...props} />;
}
