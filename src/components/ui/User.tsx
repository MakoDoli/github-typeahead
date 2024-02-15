import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { UserResultProps } from "@/types/interface";
import { Link } from "@tanstack/react-router";

export default function User({ src, name }: UserResultProps) {
  return (
    <div className="flex column gap-10 mt-10">
      <Link to="/userInfo/$postId" params={{ postId: name }}>
        <Avatar>
          <AvatarImage src={src} />
        </Avatar>
      </Link>
      <Link to="/userInfo/$postId" params={{ postId: name }}>
        <h2>{name}</h2>
      </Link>
    </div>
  );
}
