import { FC } from "react";
import { Like } from "../like/Like";

interface CommentContentProps {
  children: React.ReactNode;
}

export const CommentContent: FC<CommentContentProps> = ({ children }) => {
  return (
    <div className="flex flex-row">
      {children}
      <Like />
    </div>
  );
};
