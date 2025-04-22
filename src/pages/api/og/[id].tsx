import { ImageResponse } from "@vercel/og";

export async function getConfig() {
  return {
    render: "static",
    // @TODO
    staticPaths: ["123", "456"],
  } as const;
}

export function GET(request: Request) {
  let id = request.url.split("/").pop();
  return new ImageResponse(
    <div
      style={{
        fontSize: 40,
        color: "black",
        background: "white",
        width: "100%",
        height: "100%",
        padding: "50px 200px",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      👋 Hello {id}
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
