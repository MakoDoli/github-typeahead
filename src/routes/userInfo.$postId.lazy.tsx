import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/userInfo/$postId")({
  component: UserInfo,
});

function UserInfo() {
  const { postId } = Route.useParams();

  return (
    <div>
      <p>{postId}</p>
    </div>
  );
}
