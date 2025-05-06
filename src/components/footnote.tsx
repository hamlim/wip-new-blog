export function FootnoteRef({
  id,
  children,
}: { id: string; children: React.ReactNode }) {
  return (
    <>
      <button
        type="button"
        style={{
          // @ts-ignore - TS doesn't recognize anchorName as a valid property
          anchorName: `--fnref-${id}`,
        }}
        popoverTarget={`fnref-${id}`}
        id={`fn-${id}`}
        className="inline-flex md:hidden target:border-dashed target:border-primary border-2 border-transparent bg-neutral-300 px-1 text-sm mx-1 align-baseline items-center justify-center rounded-full"
      >
        fn-{id}
      </button>
      <span
        style={{
          // @ts-ignore - TS doesn't recognize positionAnchor as a valid property
          positionAnchor: `--fnref-${id}`,
        }}
        id={`fnref-${id}`}
        popover="auto"
        className="popover-open:inline-flex p-2 bg-slate-600 text-white rounded absolute anchored-bottom max-w-[100vw-1rem] try-order-w try-flip-x top-anchor-bottom-1"
      >
        {children}
      </span>
      <sup
        id={`fn-${id}`}
        className="hidden md:inline-block target:border-dashed target:border-primary border-2 border-transparent"
      >
        <a
          href={`#fnref-${id}`}
          className="text-primary hover:underline focus:underline"
        >
          [{id}]<span className="sr-only">Jump to footnote</span>
        </a>
      </sup>
    </>
  );
}

export function Footnote({
  id,
  children,
}: { id: string; children: React.ReactNode }) {
  return (
    <p
      id={`fnref-${id}`}
      className="hidden md:inline-block target:border-dashed target:border-primary border-2 border-transparent"
    >
      <a
        href={`#fn-${id}`}
        className="text-primary hover:underline focus:underline"
      >
        👆<span className="sr-only">Back to reference</span>
      </a>{" "}
      {children}
    </p>
  );
}
