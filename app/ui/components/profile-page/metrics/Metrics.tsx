import { FC } from "react";
import Image from "next/image";

interface MetricsProps {
  profile: string;
  post: string;
  postCounter: number;
  followers: string;
  followersCounter: number;
  following: string;
  followingCounter: number;
}

export const Metrics: FC<MetricsProps> = ({
  profile,
  post,
  postCounter,
  followers,
  followersCounter,
  following,
  followingCounter,
}) => {
  return (
    <div className="flex flex-row gap-10 justify-between p-5 lg:p-10 sm:px-24 md:justify-center">
      <div className="flex flex-col">
        <Image
          className="h-[100px] w-[100px] lg:w-[150px] lg:h-[150px] rounded-full"
          src={profile}
          alt="prof"
          width={200}
          height={200}
        />

        <div className="flex flex-row gap-2 ml-5 xl:hidden text-sm md:text-lg">
          <p>{post}</p>
          <p>{postCounter}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 xl:flex-row text-sm md:text-lg">
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
