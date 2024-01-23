import { FC } from "react";

interface MetricsProps {
  post: string;
  postCounter: number;
  followers: string;
  followersCounter: number;
  following: string;
  followingCounter: number;
}

export const Metrics: FC<MetricsProps> = ({
  post,
  postCounter,
  followers,
  followersCounter,
  following,
  followingCounter,
}) => {
  return (
    <div className="flex flex-row gap-10 justify-between p-10 sm:px-24 md:justify-center">
      <div className="flex flex-col">
        <div className="h-[100px] w-[100px] bg-red-800 rounded-full" />
        <div className="flex flex-row gap-2 ml-5 xl:hidden">
          <p>{post}</p>
          <p>{postCounter}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 xl:flex-row">
        <div className="flex flex-row gap-2 ml-5 hidden xl:block">
          <p>{post}</p>
          <p>{postCounter}</p>
        </div>
        <div className="text-center">
          <p>{followers}</p>
          <p>{followersCounter}</p>
        </div>
        <div className="text-center">
          <p>{following}</p>
          <p>{followingCounter}</p>
        </div>
      </div>
    </div>
  );
};
