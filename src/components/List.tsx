import { LoaderContext } from "@/context/LoaderContext";
import Spinner from "./ui/Spinner";
import User from "./ui/User";
import { ListProps } from "@/types/interface";
import { BASE_URL } from "@/utils/constants";
import useFetchData from "@/utils/useFetchData";
import { useContext } from "react";

export default function List({ searchValue, amount }: ListProps) {
  const [list] = useFetchData(BASE_URL, searchValue);
  const { isLoading } = useContext(LoaderContext);
  if (isLoading) return <Spinner />;
const slicedList = amount === 'all' ? list : list.slice(0, Number(amount) )
  return (
    <div className="inline-block">
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
