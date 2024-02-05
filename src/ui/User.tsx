import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

interface UserProps {
  src: string;
  name: string;
}
export default function User({ src, name }: UserProps) {
  return (
    <div className="flex column gap-10 mt-10">
      <Avatar>
        <AvatarImage src={src} />
      </Avatar>
      <h2>{name}</h2>
    </div>
  );
}
