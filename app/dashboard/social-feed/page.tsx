"use client";
import { useState } from "react";
import { PostData } from "@/app/test/post-data";
import { ActionsMenu } from "@/app/ui/components/actions-menu/ActionsMenu";
import { PostCard } from "@/app/ui/components/post-card/PostCard";

export default function Page() {
  const [postData, setPostData] = useState(PostData);

  return (
    <main>
      <div className="absolute hidden md:flex sm:m-0 lg:p-7 xl-20">
        <ActionsMenu type="Personal page" />
      </div>
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
