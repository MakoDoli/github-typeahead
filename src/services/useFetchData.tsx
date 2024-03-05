import { useContext, useEffect, useState } from "react";
import { ChildProps } from "@/types/interface";
import { message } from "../utils/constants";
import { useToast } from "@/components/ui/use-toast";
import { LoaderContext } from "@/context/LoaderContext";

export default function useFetchData(url: string, id: string) {
  const { toast } = useToast();
  const { setIsLoading } = useContext(LoaderContext);
  const [list, setList] = useState<ChildProps[]>([]);
  const [isError, setIsError] = useState(false);

  const [errorMessage, setErrorMessage] = useState(message);

  useEffect(() => {
    async function getData(url: string, id: string) {
      setErrorMessage(message);
      setIsLoading(true);
      setIsError(false);
      try {
        const res = await fetch(url + id);
        const data = await res.json();
        if (data?.items.length === 0) setIsError(true);
        setList(data.items);
      } catch (err) {
        setErrorMessage((err as Error).message);
        setIsError(true);
        console.warn(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (id) getData(url, id);
    if (!id) setList([]);
  }, [url, id, setIsLoading]);

  useEffect(() => {
    if (isError) {
      toast({ description: errorMessage });
    }
  }, [isError, toast, errorMessage]);

  return [list];
}
