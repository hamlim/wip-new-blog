export async function getConfig() {
  return {
    render: "static",
    // @TODO
    staticPaths: ["123", "456"],
  } as const;
}

export function GET(request: Request) {
  let id = request.url.split("/").pop();
  return new Response("Yo", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
