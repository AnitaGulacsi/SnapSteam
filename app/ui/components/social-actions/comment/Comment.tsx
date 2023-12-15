import Image from "next/image";
import comment from "@/public/icon/comment.svg";

export const Comment = () => (
  <div className="flex flex-row items-center gap-2">
    <Image src={comment} alt={"comment"} />
    <p>0</p>
  </div>
);
