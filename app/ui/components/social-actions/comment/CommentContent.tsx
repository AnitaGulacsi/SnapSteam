import { FC } from "react";
import { Like } from "../like/Like";

interface CommentContentProps {
  children: React.ReactNode;
}

export const CommentContent: FC<CommentContentProps> = ({ children }) => {
  return (
    <div className="flex flex-row gap-3">
      <div className="w-[310px]">{children}</div>
      <Like />
    </div>
  );
};
