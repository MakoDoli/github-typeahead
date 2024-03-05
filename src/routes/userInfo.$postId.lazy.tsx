import { createLazyFileRoute } from "@tanstack/react-router";
import UserInfo from "@/components/UserInfo/UserInfo";

const UserProfile = () => {
  const { postId } = Route.useParams();
  return <UserInfo searchValue={postId} />;
};

export const Route = createLazyFileRoute("/userInfo/$postId")({
  component: UserProfile,
});
