"use client";

// import { CopyIcon } from "lucide-react";
// import { createContext, use } from "react";
import type { ComponentProps } from "react";

// let blockContext = createContext<boolean>(false);

export function Pre(props: ComponentProps<"pre">) {
  //   console.log(props);
  return (
    // <blockContext.Provider value={true}>
    <pre {...props} />
    // </blockContext.Provider>
  );
}

export function Code(props: ComponentProps<"code">) {
  //   let isBlock = use(blockContext);

  //   if (isBlock) {
  //     return (
  //       <div className="relative">
  //         <button
  //           type="button"
  //           className="absolute right-2 top-2 z-10 rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-500"
  //           onClick={() => {
  //             navigator.clipboard.writeText(props.children as string);
  //           }}
  //         >
  //           <CopyIcon className="h-4 w-4" />
  //         </button>
  //         <code {...props} />
  //       </div>
  //     );
  //   }

  return <code {...props} />;
}
