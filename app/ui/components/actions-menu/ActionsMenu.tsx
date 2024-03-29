import Link from "next/link";
import { ActionItem } from "../../atom/ActionItem";
import { FC } from "react";

interface ActionItemProps {
  type: string;
}

export const ActionsMenu: FC<ActionItemProps> = ({ type }) => {
  return (
    <div className="bg-teal-100 bg-opacity-20 p-5 md:pt-10 md:pl-0 lg:p-10">
      <div className="flex flex-col gap-3">
        <Link href={"/dashboard/username"}>
          <ActionItem>{type}</ActionItem>
        </Link>
        <ActionItem>Take a look</ActionItem>
        <Link href={"/new-post"}>
          <ActionItem>Add new post</ActionItem>
        </Link>
        <Link href={"/develop"}>
          <ActionItem>Play Games</ActionItem>
        </Link>
        <Link href={"/develop"}>
          <ActionItem>Saved</ActionItem>
        </Link>
        <Link href={"/develop"}>
          <ActionItem>Add new user</ActionItem>
        </Link>
        <Link href={"/develop"}>
          <ActionItem>Delete Profile</ActionItem>
        </Link>
        <Link href={"../"}>
          <ActionItem>LogOut</ActionItem>
        </Link>
      </div>
    </div>
  );
};
