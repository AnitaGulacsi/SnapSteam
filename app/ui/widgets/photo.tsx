import React, { FC } from "react";

interface PhotoWidgetsProps {
  test: number;
  image: string;
}

export const PhotoWidgets: FC<PhotoWidgetsProps> = ({ image }) => {
  return (
    <div className="w-[99px] h-[99px] sm:w-[166px] sm:h-[166px] border bg-white">
      {image}
    </div>
  );
};
