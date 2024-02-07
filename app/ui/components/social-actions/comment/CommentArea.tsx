import Image from "next/image";
import send from "@/public/icon/send.svg";
import { CommentContent } from "./CommentContent";
import { FC } from "react";

interface CommentAreaProps {
  handelAddComment: () => void;
  setAddComments: (value: string) => void;
  addComment: string;
  comments: Array<string>;
}

export const CommentArea: FC<CommentAreaProps> = ({
  handelAddComment,
  setAddComments,
  addComment,
  comments,
}) => {
  return (
    <div className="m-2 w-[380px] h-[230px]">
      <div className="w-[380px] h-[150px] border overflow-y-auto p-2">
        {comments.map((comment, index) => (
          <CommentContent key={index}>
            <p>{comment}</p>
          </CommentContent>
        ))}
      </div>

      <div className="mt-3 w-[350px] h-[40px] rounded-full border border-teal-400 bg-transparent flex flex-row">
        <input
          className={`w-[290px] p-2 rounded-full outline-none focus:outline-none`}
          type="text"
          value={addComment}
          placeholder="Add comment"
          onChange={(e) => setAddComments(e.target.value)}
        />
        <Image
          className="m-2"
          onClick={handelAddComment}
          src={send}
          alt={"add"}
        />
      </div>
    </div>
  );
};
