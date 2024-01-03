import React, { FC } from "react";

interface PhotoWidgetsProps {
  image: string;
}

export const PhotoWidgets: FC<PhotoWidgetsProps> = ({ image }) => {
  return <div className="w-[166px] h-[166px] border bg-white">{image}</div>;
};
