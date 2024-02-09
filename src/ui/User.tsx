import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { UserProps } from "@/types/interface";

export default function User({ src, name, url }: UserProps) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="flex column gap-10 mt-10">
        <Avatar>
          <AvatarImage src={src} />
        </Avatar>
        <h2>{name}</h2>
      </div>
    </a>
  );
}
