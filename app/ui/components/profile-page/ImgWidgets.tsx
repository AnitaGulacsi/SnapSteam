import Image from "next/image";
import { FC } from "react";

interface ImgWidgetsProps {
  img: string;
}

export const ImgWidgets: FC<ImgWidgetsProps> = ({ img }) => {
  return (
    <Image
      className="w-[250px] h-[250px]"
      src={img}
      alt={"post"}
      width={100}
      height={100}
    />
  );
};
