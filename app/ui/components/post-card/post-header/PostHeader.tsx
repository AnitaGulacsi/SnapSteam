"use client";
import { useState } from "react";
import { Menu } from "@/app/ui/atom/Menu";
import { PostMenu } from "../post-menu/PostMenu";

export const PostHeader = () => {
  const [openPostMenu, setOpenPostMenu] = useState(false);

  const handlePostMenuVisibility = () => {
    setOpenPostMenu(!openPostMenu);
  };

  return (
    <div className="p-10">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          {/* user profile image */}
          <div className="w-10 h-10 rounded-full bg-green" />
          <p>@username</p>
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
