import { FC } from "react";
import { PostBody } from "./post-body/PostBody";
import { PostFooter } from "./post-footer/PostFooter";
import { PostHeader } from "./post-header/PostHeader";

interface PostCardProps {
  post: {
    profileImage: string;
    username: string;
    description: string;
    location: string;
    url: string;
  };
}

export const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white my-5">
      <PostHeader profileImage={post.profileImage} username={post.username} />
      <PostBody
        description={post.description}
        location={post.location}
        url={post.url}
      />
      <PostFooter />
    </div>
  );
};
