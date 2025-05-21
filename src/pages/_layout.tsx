import type { ReactNode } from "react";
import { ErrorBoundary } from "#/components/error-boundary";
import { Nav } from "#/components/nav";
import { QuickFind } from "#/components/quick-find";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative mb-26 min-h-screen">
      <title>Matt 👋</title>
      <meta rel="description" content="Matt Hamlin's Personal Website" />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="white"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="black"
      />
      <meta name="color-scheme" content="light dark" />
      <link rel="author" href="https://matthamlin.me" />
      <meta name="author" content="Matt Hamlin" />
      <meta
        name="keywords"
        content="Matt Hamlin,blog,portfolio,web developer,software engineer"
      />
      <meta name="creator" content="Matt Hamlin" />
      <meta property="og:title" content="Matt Hamlin" />
      <meta
        property="og:description"
        content="Matt Hamlin's Personal Website"
      />
      <meta property="og:url" content="https://matthamlin.me" />
      <meta property="og:site_name" content="Matt's Website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content="https://matthamlin.me/me.png" />
      <meta property="og:image:width" content="384" />
      <meta property="og:image:height" content="512" />
      <meta property="og:image:alt" content="Matt Hamlin's Personal Website" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@immatthamlin" />
      <meta name="twitter:creator" content="@immatthamlin" />
      <meta name="twitter:title" content="Matt's Website" />
      <meta
        name="twitter:description"
        content="Matt Hamlin's personal website"
      />
      <meta name="twitter:image" content="https://matthamlin.me/me.png" />
      <meta name="twitter:image:width" content="384" />
      <meta name="twitter:image:height" content="512" />
      <meta name="twitter:image:alt" content="Matt Hamlin's Personal Website" />
      <meta name="twitter:image:type" content="image/png" />
      <link rel="shortcut icon" href="/favicon.ico" />

      <Nav />
      <QuickFind />
      <ErrorBoundary>{children}</ErrorBoundary>
    </div>
  );
}

export function getConfig() {
  return {
    render: "dynamic",
  };
}
