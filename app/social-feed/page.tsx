"use client";
import { useState } from "react";
import { ActionsMenu } from "../ui/components/actions-menu/ActionsMenu";
import { Navbar } from "../ui/components/navbar/Navbar";
import { PostCard } from "../ui/components/post-card/PostCard";
import { Menu } from "../ui/atom/Menu";
import { PostData } from "@/app/test/post-data";

export default function Page() {
  const [openMenu, setOpenMenu] = useState(false);
  const [postData, setPostData] = useState(PostData);

  const handleMenuVisibility = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <main>
      <Navbar welcome={"Welcome"} username={"@username"}>
        <Menu onClick={handleMenuVisibility} className="ml-2 md:hidden" />
      </Navbar>
      <div className="absolute hidden md:flex sm:m-0 lg:p-7 xl-20">
        <ActionsMenu />
      </div>
      {openMenu && (
        <div className="absolute end-px bg-emerald-50 md:hidden">
          <ActionsMenu />
        </div>
      )}
      <div className="flex justify-center h-screen">
        <div className="bg-green p-5 sm:p-10 overflow-y-auto">
          {postData.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
