import { FC } from "react";
import { Like } from "../../social-actions/like/Like";
import { Comment } from "../../social-actions/comment/Comment";
import { Share } from "../../social-actions/share/Share";
import { Save } from "../../social-actions/save/Save";
import { handleFun } from "@/app/utils/types";

interface PostFooterProps {
  handelOpenCommentArea: handleFun;
  comments: Array<string>;
}

export const PostFooter: FC<PostFooterProps> = ({
  handelOpenCommentArea,
  comments,
}) => {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div className="flex flex-row items-center gap-2">
          <Like />
          <Comment
            handelOpenCommentArea={handelOpenCommentArea}
            comments={comments}
          />
          {/* <Share /> */}
        </div>
        {/* <Save /> */}
      </div>
    </div>
  );
};
