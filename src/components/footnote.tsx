export function FootnoteRef({ id }: { id: string }) {
  return (
    <sup id={`fn-${id}`}>
      <a href={`#fnref-${id}`} className="footnote-ref">
        {id}
      </a>
    </sup>
  );
}

export function Footnote({
  id,
  children,
}: { id: string; children: React.ReactNode }) {
  return (
    <p id={`fnref-${id}`}>
      <a href={`#fn-${id}`} className="footnote">
        👆
      </a>{" "}
      {children}
    </p>
  );
}
