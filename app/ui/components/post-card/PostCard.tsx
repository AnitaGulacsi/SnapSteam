"use client";
import { useState, FC } from "react";
import { PostBody } from "./post-body/PostBody";
import { PostFooter } from "./post-footer/PostFooter";
import { PostHeader } from "./post-header/PostHeader";
import { CommentArea } from "../social-actions/comment/CommentArea";

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
  const [openComArea, setOpenComArea] = useState(false);
  const [comments, setComments] = useState<string[]>([]);
  const [addComment, setAddComments] = useState<string>("");

  const handelAddComment = () => {
    if (addComment.trim() !== "") {
      setComments([...comments, addComment]);
      setAddComments("");
    }
  };

  const handelOpenCommentArea = () => {
    setOpenComArea(!openComArea);
  };

  return (
    <div className="bg-white my-5">
      <PostHeader profileImage={post.profileImage} username={post.username} />
      <PostBody
        description={post.description}
        location={post.location}
        url={post.url}
      />
      <PostFooter
        handelOpenCommentArea={handelOpenCommentArea}
        comments={comments}
      />
      {openComArea && (
        <CommentArea
          handelAddComment={handelAddComment}
          addComment={addComment}
          comments={comments}
          setAddComments={setAddComments}
        />
      )}
    </div>
  );
};
