import { useEffect, useState } from "react";
import Spinner from "./Spinner";

import { useToast } from "@/components/ui/use-toast";
import User from "./User";

interface ListProps {
  searchValue: string;
}
export default function List({ searchValue }: ListProps) {
  const BASE_URL = "https://api.github.com/search/users?q=";

  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const res = await fetch(BASE_URL + searchValue);
        const data = await res.json();
        if (data.items.length === 0) setIsError(true);
        setList(data.items.slice(0, 5));
        console.log(data);
      } catch (err) {
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
      toast({ description: "That user hasn't started programming yet" });
    }
  }, [isError, toast]);

  return (
    <div>
      {isLoading && <Spinner />}
      {list.map((item) => (
        <User name={item.login} key={item.id} src={item.avatar_url} />
      ))}
    </div>
  );
}
