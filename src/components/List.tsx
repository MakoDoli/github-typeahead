import { LoaderContext } from "@/context/LoaderContext";
import Spinner from "./ui/Spinner";
import User from "./ui/User";
import { ListProps } from "@/types/interface";
import { BASE_URL } from "@/utils/constants";
import useFetchData from "@/utils/useFetchData";
import { useContext } from "react";

export default function List({ amount }: ListProps) {
  const [list] = useFetchData(BASE_URL, sessionStorage.search);

  const { isLoading } = useContext(LoaderContext);

  const slicedList = amount === "all" ? list : list.slice(0, Number(amount));

  if (isLoading) return <Spinner />;

  return (
    <div className=" dark:text-white grid grid-cols-1 md:grid-cols-2">
      {slicedList.map((item) => (
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
