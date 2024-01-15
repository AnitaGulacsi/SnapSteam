"use client";
import Image from "next/image";
import like from "@/public/icon/like.svg";
import { useState } from "react";

export const Like = () => {
  const [isLiked, setIsLiked] = useState(0);

  const handleLiked = () => {
    setIsLiked(isLiked + 1);
  };

  return (
    <div className="flex flex-row items-center gap-2">
      <Image onClick={handleLiked} src={like} alt={"like"} />
      <p>{isLiked}</p>
    </div>
  );
};
