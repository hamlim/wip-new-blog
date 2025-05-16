import type { ReactNode } from "react";
import { Nav } from "#/components/nav";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative mb-26 min-h-screen">
      <Nav />
      {children}
    </div>
  );
}
