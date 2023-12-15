import { PostBody } from "./post-body/PostBody";
import { PostFooter } from "./post-footer/PostFooter";
import { PostHeader } from "./post-header/PostHeader";

export const PostCard = () => {
  return (
    <div className="w-80 sm:w-96 bg-white">
      <PostHeader />
      <PostBody description={"description"} location={"location"} url={"url"} />
      <PostFooter />
    </div>
  );
};
