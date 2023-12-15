import { FC } from "react";

interface ActionItemProps {
  children: React.ReactNode;
}

export const ActionItem: FC<ActionItemProps> = ({ children }) => (
  <div className="flex gap-3 ml-10 cursor-pointer hover:underline">
    <div className="w-5 h-5 bg-green-900 rounded-xl" />
    <p>{children}</p>
  </div>
);
