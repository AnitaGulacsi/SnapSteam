import Image from "next/image";
import { FC } from "react";

interface ImgWidgetsProps {
  img: string;
}

export const ImgWidgets: FC<ImgWidgetsProps> = ({ img }) => {
  return (
    <Image
      className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[192px] md:h-[192px] xl:w-[250px] xl:h-[250px]"
      src={img}
      alt={"post"}
      width={100}
      height={100}
    />
  );
};
