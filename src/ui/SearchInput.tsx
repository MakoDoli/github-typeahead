import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";
import { SearchProps } from "@/types/interface";

export default function SearchInput({ setUser }: SearchProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    window.setTimeout(() => {
      setUser(e.target.value);
    }, 2000);
  }
  return <Input onChange={handleChange} />;
}
