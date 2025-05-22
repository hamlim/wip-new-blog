import { Link } from "waku";
import type { RouteConfig } from "waku/router";
import type { HydratedFrontmatter } from "#/types";
import { FormattedDateTime } from "./formatted-date";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function PostCard({ post }: { post: HydratedFrontmatter }) {
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
            Published: <FormattedDateTime date={post.date} />
          </p>
        </CardHeader>
        <CardContent className="gap-2 flex flex-col justify-between">
          <p>{post.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
