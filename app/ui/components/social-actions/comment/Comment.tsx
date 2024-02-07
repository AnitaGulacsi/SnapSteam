import { FC } from "react";
import Image from "next/image";
import comment from "@/public/icon/comment.svg";
import { handleFun } from "@/app/utils/types";

interface CommentProps {
  handelOpenCommentArea: handleFun;
  comments: Array<string>;
}

export const Comment: FC<CommentProps> = ({
  handelOpenCommentArea,
  comments,
}) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <div onClick={handelOpenCommentArea}>
        <Image src={comment} alt={"comment"} />
      </div>
      <p>{comments.length}</p>
    </div>
  );
};
