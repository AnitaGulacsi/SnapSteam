import { FC } from "react";
import Image from "next/image";
import location_icon from "@/public/icon/location.svg";

interface PostBodyProps {
  description: string;
  location: string;
  url: string;
}

export const PostBody: FC<PostBodyProps> = ({ description, location, url }) => {
  return (
    <div className="p-0">
      <p className="px-5">{description}</p>
      <div className="px-5 flex flex-row gap-1">
        <Image src={location_icon} alt={"location_icon"} />
        <p className="text-ellipsis">{location}</p>
      </div>
      <Image
        className="mt-5 w-[400px] h-[400px]"
        src={url}
        alt={"img"}
        width={5060}
        height={4510}
      />
    </div>
  );
};
