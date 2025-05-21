import { Link } from "waku";
import type { RawFrontmatter } from "#/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function PostCard({ post }: { post: RawFrontmatter }) {
  return (
    <Link
      className="w-full flex flex-col grow"
      key={post.path}
      // @ts-expect-error - this is a valid path
      to={post.path}
    >
      <Card className="grow">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{post.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
