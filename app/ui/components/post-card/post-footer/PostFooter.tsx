import { Like } from "../../social-actions/like/Like";
import { Comment } from "../../social-actions/comment/Comment";
import { Share } from "../../social-actions/share/Share";
import { Save } from "../../social-actions/save/Save";

export const PostFooter = () => {
  return (
    <div className="p-10">
      <div className="flex justify-between">
        <div className="flex flex-row items-center gap-2">
          <Like />
          <Comment />
          <Share />
        </div>
        <Save />
      </div>
    </div>
  );
};
