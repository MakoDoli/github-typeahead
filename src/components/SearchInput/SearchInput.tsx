import { Input } from "@/components/ui/input";
import { ChangeEvent, useContext, useEffect, useRef } from "react";
import { SearchProps } from "./SearchInputType";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LoaderContext } from "@/context/LoaderContext";

export default function SearchInput({
  setAmount,
  setTheme,
  mode,
}: SearchProps) {
  const { setSearchValue, results, setResults } = useContext(LoaderContext);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      setSearchValue(e.target.value);
    }, 1000);
  }

  function handleTheme() {
    localStorage.theme = mode === "dark" ? "light" : "dark";
    setTheme(mode === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    setAmount(results);
  }, [results, setAmount]);

  return (
    <div className="flex gap-6 ">
      <Input className="dark:text-white" onChange={handleChange} />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="dark:text-teal-500">
            Showing {results} results
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Amount of results</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={results} onValueChange={setResults}>
            <DropdownMenuRadioItem value="5">show 5</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="10">show 10</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="all">show all</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button onClick={handleTheme}>
        {mode === "dark" ? "Let it shine" : "Save my eyes"}
      </Button>
    </div>
  );
}
