import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useToast } from "@/components/ui/use-toast";
import User from "./User";
import { ListProps, ChildProps } from "@/types/interface";

const BASE_URL = "https://api.github.com/search/users?q=";

export default function List({ searchValue }: ListProps) {
  const { toast } = useToast();
  const message = "That user hasn't started programming yet";

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState<ChildProps[]>([]);
  const [errorMessage, setErrorMessage] = useState(message);

  useEffect(() => {
    const getData = async () => {
      setErrorMessage(message);
      setIsLoading(true);
      setIsError(false);
      try {
        const res = await fetch(BASE_URL + searchValue);
        const data = await res.json();
        if (data.items.length === 0) setIsError(true);
        setList(data.items.slice(0, 5));
      } catch (err) {
        setErrorMessage((err as Error).message);
        setIsError(true);
        console.warn(err);
      } finally {
        setIsLoading(false);
      }
    };
    if (searchValue) getData();
    if (!searchValue) setList([]);
  }, [searchValue]);

  useEffect(() => {
    if (isError) {
      toast({ description: errorMessage });
    }
  }, [isError, toast]);

  return (
    <div className="inline-block">
      {isLoading && <Spinner />}
      {list.map((item) => (
        <User
          name={item.login}
          key={item.id}
          src={item.avatar_url}
          url={item.html_url}
        />
      ))}
    </div>
  );
}
