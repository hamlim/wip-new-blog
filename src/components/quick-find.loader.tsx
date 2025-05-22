"use client";

import { lazy, useEffect, useState } from "react";

let LazyQuickFind = lazy(() =>
  import("./quick-find").then((m) => ({
    default: m.QuickFind,
  })),
);

export function QuickFindLoader() {
  let [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) {
    return null;
  }

  return <LazyQuickFind />;
}
