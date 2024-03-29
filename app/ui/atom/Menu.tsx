import { FC } from "react";
import Image from "next/image";
import menu from "@/public/icon/menu.svg";

interface MenuProp {
  onClick?: () => void;
  className?: string;
}

export const Menu: FC<MenuProp> = ({ onClick, className }) => (
  <button
    className={`flex item-center justify-center ${className}`}
    onClick={onClick}
  >
    <Image src={menu} width={40} height={10} alt={"menu"} className="pt-3 pr-3"/>
  </button>
);
