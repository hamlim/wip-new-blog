import { Anchor } from "#/components/anchor";
import { ProseContainer } from "#/components/container";
import { Heading } from "#/components/heading";

export default function Resume() {
  return (
    <main className="pt-10">
      <title>Matt Hamlin's Resume</title>
      <meta
        rel="description"
        content="Matt Hamlin is a Staff Software Engineer with 10 years of experience across the frontend ecosystem."
      />
      <ProseContainer>
        <Heading level={2}>Matt Hamlin's Resume</Heading>
        <blockquote>
          Also available via{" "}
          <Anchor
            target="_blank"
            rel="noopener noreferrer"
            href="https://matt-hamlin.notion.site/Matt-Hamlin-s-Resume-190eb1b56b2d48c3b58a5f3a2d121c81?pvs=4"
          >
            Notion
          </Anchor>
          ,{" "}
          <Anchor
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/1Om1ilLporVXdLxC_CS20rRjDMmjeVKfNHUDoK8odtdA/edit?usp=sharing"
          >
            Google Docs
          </Anchor>
          , and{" "}
          <Anchor
            target="_blank"
            rel="noopener noreferrer"
            href="/resume-may-2025.pdf"
          >
            PDF
          </Anchor>
          .
        </blockquote>
        <ul className="mt-0">
          <li>
            Phone: <Anchor href="tel:4252100980">(425) 210-0980</Anchor>
          </li>
          <li>
            Email:{" "}
            <Anchor href="mailto:matthewjameshamlin@gmail.com">
              matthewjameshamlin@gmail.com
            </Anchor>
          </li>
          <li>
            LinkedIn:{" "}
            <Anchor href="https://www.linkedin.com/in/hamlim/">
              https://www.linkedin.com/in/hamlim/
            </Anchor>
          </li>
          <li>
            GitHub:{" "}
            <Anchor href="https://github.com/hamlim">
              https://github.com/hamlim
            </Anchor>
          </li>
        </ul>
        <p className="mb-4">
          <strong>Staff Software Engineer</strong> - Strong technical leader in
          the frontend web development space with 10+ years of experience,
          passionate about building the best possible web user experiences and
          the teams that support them
        </p>

        <Heading level={3}>Experience</Heading>
        <div>
          <Heading level={4}>Senior Software Engineer II - HubSpot</Heading>
          <p className="font-bold">2025 - Present</p>
          <p>
            Joined the Frontend Infrastructure Core team at HubSpot, building
            and maintaining internal build tooling that orchestrates local and
            CI frontend development tools like Storybook, TypeScript,
            webpack/rspack, eslint, and more.
          </p>
          {/* @TODO: add more details about the role here */}
        </div>
        <div>
          <Heading level={4}>
            Senior Staff Frontend Software Engineer - Fireworks AI
          </Heading>
          <p className="font-bold">2024 - 2025</p>
          <p>
            Joined Fireworks as employee #27, worked with a small team to
            rapidly build out a refined web application for managing the various
            AI services that Fireworks offers to customers.
          </p>
          <ul>
            <li>
              Built out core features of the web application including the AI
              model deployment flow, API Key management, and refreshing our web
              auth flows for better user experience
            </li>
            <li>
              Heavily optimized the internal codebase to improve our team's
              velocity. Migrating from Yarn to Bun, replacing eslint with Biome,
              all in cutting our CI times in half from 12 minutes down to 5 and
              a half minutes.
            </li>
          </ul>
        </div>
        <div>
          <Heading level={4}>
            Staff SWE, Frontend Platform Tech Lead - Wayfair
          </Heading>
          <p className="font-bold">June 2021 - May 2024</p>
          <p>
            Lead the Frontend Platform team at Wayfair, supporting our customer,
            supplier, and internal facing experiences and teams.
          </p>
          <ul>
            <li>
              Lead architect for a frontend-replatforming effort to adopt
              Next.js, React Server Components, and GraphQL Federation
            </li>
            <li>
              Designed and implemented various aspects of our overall frontend
              web architecture (tracking, data-fetching orchestration,
              Authentication, web monorepo tooling), resulting in a more
              performant and better web user experience for Wayfair's customers
            </li>
          </ul>
        </div>
        <div>
          <Heading level={4}>
            Senior SWE, Design Systems Tech Lead - Wayfair
          </Heading>
          <p className="font-bold">July 2017 - June 2021</p>
          <p>
            Lead the Design Systems engineering team, collaborating with
            designers to build, and maintain the Wayfair Design System, composed
            of three internal component libraries for our customer, internal,
            and supplier-facing websites.
          </p>
          <ul>
            <li>
              Built various iterations of our internal Design System component
              library and documentation site, including custom features like
              live demos and an editable sandbox
            </li>
          </ul>
        </div>
        <div>
          <Heading level={4}>Frontend Software Engineer - Wayfair</Heading>
          <p className="font-bold">July 2016 - July 2017</p>
          <p>
            Worked on several teams to ship new features and fix various bugs
            across the Wayfair website and its affiliated brands (All Modern,
            Joss and Main, Birch Lane, Perigold).
          </p>
          <ul>
            <li>
              Early internal adopter of React at Wayfair, migrated several key
              features on site
            </li>
          </ul>
        </div>
        <Heading level={3}>Education</Heading>
        <div>
          <p>
            B.S. Information Technology and Web Science - Rensselaer Polytechnic
            Institute - 2012-2016
          </p>
        </div>

        <Heading level={3}>Projects</Heading>
        <div>
          <ul>
            <li>
              <span className="font-bold">Inline-MDX.macro</span> A Babel macro
              for authoring and transforming mdx
              <Anchor
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/hamlim/inline-mdx.macro"
              >
                https://github.com/hamlim/inline-mdx.macro
              </Anchor>
            </li>
            <li>
              <span className="font-bold">Simple Props</span> A minimal, css
              variable backed style-prop library for [p]react
              <Anchor
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ds-pack/simple-props"
              >
                https://github.com/ds-pack/simple-props
              </Anchor>
            </li>
            <li>
              <span className="font-bold">Rainbow Sprinkles</span> Dynamic,
              theme-driven, style props for Vanilla Extract
              <Anchor
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/wayfair/rainbow-sprinkles"
              >
                https://github.com/wayfair/rainbow-sprinkles
              </Anchor>
            </li>
          </ul>
        </div>

        <Heading level={3}>
          Programming Languages, Libraries, and Runtimes
        </Heading>
        <div>
          <Heading level={4}>Programming Languages</Heading>
          <p>
            TypeScript (and JavaScript), GraphQL, CSS (including SCSS), HTML,
            PHP, and Go.
          </p>
        </div>
        <div>
          <Heading level={4}>Libraries and Runtimes:</Heading>
          <p>
            Node.js, Deno, Bun, React and ReactDOM, Next.js, webpack, Babel,
            Jest, Cypress, Docker, Kubernetes (with Istio and Flagger), Vanilla
            Extract, Tailwind, Styled Components, GraphQL (with Apollo Client),
            Yarn, PNPM, and Turborepo.
          </p>
        </div>
      </ProseContainer>
    </main>
  );
}

export function getConfig() {
  return {
    render: "dynamic",
  };
}
