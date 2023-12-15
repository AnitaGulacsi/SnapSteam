import { ActionItem } from "../../../atom/ActionItem";

export const PostMenu = () => (
  <div className="absolute top-0 right-0 p-5 ">
    <ActionItem>UnFollow</ActionItem>
    <ActionItem>About this account</ActionItem>
    <ActionItem>Hide</ActionItem>
  </div>
);
