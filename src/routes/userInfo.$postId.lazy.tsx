import Spinner from "@/components/ui/Spinner";

import { Button } from "@/components/ui/button";
import { UserType } from "@/types/interface";
import { BASE_URL_USER } from "@/utils/constants";
import { Link, createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const Route = createLazyFileRoute("/userInfo/$postId")({
  component: UserInfo,
});

function UserInfo() {
  const { postId } = Route.useParams();

  const [isLoading, setisLoading] = useState(false);
  const [info, setInfo] = useState<UserType>({
    login: "",
    avatar_url: "",
    bio: "",
    followers: 0,
    html_url: "",
    public_repos: 0,
  });

  useEffect(() => {
    getData(BASE_URL_USER, postId);
  }, [postId]);

  const {
    login,
    avatar_url: avatarUrl,
    bio,
    followers,
    html_url: htmlUrl,
    public_repos: publicRepos,
  } = info;
  async function getData(url: string, id: string) {
    try {
      setisLoading(true);
      const res = await fetch(url + id);
      const data = await res.json();
      setInfo(data);
    } catch (err) {
      console.warn(err);
    } finally {
      setisLoading(false);
    }
  }
  if (isLoading) return <Spinner />;
  return (
    <div className="w-[300px] md:w-[500px] border border-slate-300 shadow-md  rounded -2xl  mx-auto mt-12 text-center p-2">
      <HoverCard>
        <HoverCardTrigger asChild>
          <img className="rounded-full w-24 mx-auto mt-6" src={avatarUrl} />
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <a href={htmlUrl} target="_blank" rel="noreferrer">
              <div className="space-y-1">
                <h4 className="text-sm text-teal-500 font-semibold">
                  Click here for
                </h4>
                <p className="text-sm"> {login}'s github account</p>
              </div>
            </a>
          </div>
        </HoverCardContent>
      </HoverCard>

      <div className="flex m-10 flex-wrap ">
        <div className="w-1/2">
          <p>Login: </p>
          <p>Followers: </p>
          <p> Public repos: </p>
          <p>Bio: </p>
        </div>
        <div className="text-teal-500 w-1/2">
          <p>{login}</p>

          <p>{followers}</p>
          <p>{publicRepos}</p>
          <p>{bio}</p>
        </div>
      </div>
      <Button>
        <Link to="/">Back</Link>
      </Button>
    </div>
  );
}
