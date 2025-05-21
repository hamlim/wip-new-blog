import { Link } from "waku";
import type { RouteConfig } from "waku/router";
import type { RawFrontmatter } from "#/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

let dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
}).format;

export function PostCard({ post }: { post: RawFrontmatter }) {
  return (
    <Link
      className="w-full flex flex-col grow"
      key={post.path}
      to={post.path as RouteConfig["paths"]}
    >
      <Card className="grow">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <p className="text-sm text-muted-foreground">
            Published: {dateFormatter(post.date)}
          </p>
        </CardHeader>
        <CardContent className="gap-2 flex flex-col justify-between">
          <p>{post.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
