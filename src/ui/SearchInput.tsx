import { Input } from "@/components/ui/input";
import { ChangeEvent, useRef } from "react";
import { SearchProps } from "@/types/interface";

export default function SearchInput({ setUser }: SearchProps) {
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      setUser(e.target.value);
    }, 1000);
  }

  return <Input onChange={handleChange} />;
}
