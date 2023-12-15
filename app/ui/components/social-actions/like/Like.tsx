import Image from "next/image";
import like from "@/public/icon/like.svg";

export const Like = () => (
  <div className="flex flex-row items-center gap-2">
    <Image src={like} alt={"like"} />
    <p>0</p>
  </div>
);
