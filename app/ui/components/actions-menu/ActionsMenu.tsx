import { ActionItem } from "./ActionItem";

export const ActionsMenu = () => {
  return (
    <div className="bg-teal-100 bg-opacity-20 p-10">
      <div className="flex flex-col gap-3">
        <ActionItem>Profile Page</ActionItem>
        <ActionItem>Take a look</ActionItem>
        <ActionItem> Add new post</ActionItem>
        <ActionItem>Play Games</ActionItem>
        <ActionItem>Saved</ActionItem>
        <ActionItem>Add new user</ActionItem>
        <ActionItem>Delete Profile</ActionItem>
        <ActionItem>LogOut</ActionItem>
      </div>
    </div>
  );
};
