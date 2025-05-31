import { metadata } from "#/metadata.gen";

export async function GET(request: Request): Promise<Response> {
  let { searchParams } = new URL(request.url);
  let encodedPath = searchParams.get("path");
  if (!encodedPath) {
    return new Response("No path provided", { status: 400 });
  }
  let path = decodeURIComponent(encodedPath);
  let post = metadata.find((post) => post.path === path);
  if (!post) {
    return new Response("Post not found", { status: 404 });
  }
  return new Response(JSON.stringify(post), { status: 200 });
}
