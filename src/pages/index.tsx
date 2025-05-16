import { metadata } from "#/metadata.gen";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2>Home</h2>
      <p>This is the home page.</p>
      <pre className="whitespace-pre-wrap">
        {JSON.stringify(metadata, null, 2)}
      </pre>
    </div>
  );
}

export function getConfig() {
  return {
    render: "dynamic",
  };
}
