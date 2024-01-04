"use client";
import { useState, FC } from "react";
import { Menu } from "@/app/ui/atom/Menu";
import { PostMenu } from "../post-menu/PostMenu";
import Image from "next/image";

interface PostHeaderProps {
  profileImage: string;
  username: string;
}

export const PostHeader: FC<PostHeaderProps> = ({ profileImage, username }) => {
  const [openPostMenu, setOpenPostMenu] = useState(false);

  const handlePostMenuVisibility = () => {
    setOpenPostMenu(!openPostMenu);
  };

  return (
    <div className="p-10">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <Image
            className="w-16 h-16 rounded-full bg-green"
            src={profileImage}
            alt={"prof-img"}
            width={700}
            height={100}
          />
          <p>{username}</p>
        </div>
        <Menu onClick={handlePostMenuVisibility} />
      </div>
      {openPostMenu && (
        <div className="relative">
          <PostMenu></PostMenu>
        </div>
      )}
    </div>
  );
};
