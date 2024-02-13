import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { UserResultProps } from "@/types/interface";
import { Link } from "@tanstack/react-router";

export default function User({ src, name }: UserResultProps) {
  return (
    <Link to="/userInfo/$postId" params={{ postId: name }}>
      {" "}
      <div className="flex column gap-10 mt-10">
        <Avatar>
          <AvatarImage src={src} />
        </Avatar>
        <h2>{name}</h2>
      </div>
    </Link>
  );
}
