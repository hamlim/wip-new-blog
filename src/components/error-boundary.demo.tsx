"use client";

import { type ReactNode, Suspense, useEffect, useState } from "react";
import { ErrorBoundary } from "./error-boundary";

console.log("ErrorBoundaryDemo");

function InnerDemo(): ReactNode {
  let [shouldThrow, setShouldThrow] = useState(false);

  useEffect(() => {
    setShouldThrow(true);
  }, []);

  if (shouldThrow) {
    throw new Error("This is a test error");
  }

  return null;
}

export function ErrorBoundaryDemo() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <InnerDemo />
      </Suspense>
    </ErrorBoundary>
  );
}
