import type { ComponentProps } from "react";
import { Abbr } from "#/components/abbr";
import { Heading } from "#/components/heading";
import { Marquee } from "#/components/marquee";
import { Spacer } from "#/components/spacer";

function DemoWrap(props: ComponentProps<"div">) {
  return (
    <div
      className="flex flex-col gap-2 border-2 border-gray-200 p-4"
      {...props}
    />
  );
}

export default function Sandbox() {
  return (
    <main className="mx-auto max-w-screen-lg px-4 py-12 gap-6 flex flex-col">
      <Heading level={1}>Component Sandbox</Heading>
      <p>
        This is a sandbox for testing components. It is not part of the main
        site.
      </p>
      <hr />
      <Heading level={2}>Headings:</Heading>
      <DemoWrap>
        <Heading level={1}>Heading 1</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Heading level={4}>Heading 4</Heading>
        <Heading level={5}>Heading 5</Heading>
        <Heading level={6}>Heading 6</Heading>
      </DemoWrap>
      <Heading level={2}>Marquee:</Heading>
      <DemoWrap>
        <Marquee>This is a default (scroll) marquee.</Marquee>
        <Marquee behavior="slide">This is a slide marquee.</Marquee>
        <Marquee behavior="alternate">This is an alternate marquee.</Marquee>
      </DemoWrap>
      <Heading level={2}>Abbr:</Heading>
      <DemoWrap>
        <Abbr title="HyperText Markup Language">HTML</Abbr>
      </DemoWrap>
      <Heading level={2}>Spacer:</Heading>
      <DemoWrap>
        <p>Some text</p>
        <Spacer />
        <p>Some more text</p>
      </DemoWrap>
    </main>
  );
}
