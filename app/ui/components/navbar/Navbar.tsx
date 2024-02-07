import { FC } from "react";
import { Logo } from "../logo/Logo";
import { AppName } from "../logo/AppName";

interface NavbarProps {
  welcome?: string;
  username?: string;
  children?: React.ReactNode;
}

export const Navbar: FC<NavbarProps> = ({ children, welcome, username }) => (
  <nav className="bg-green p-5 sm:p-10 flex flex-col md:flex-row md:justify-between">
    <div className="flex flex-row items-center justify-between">
      <div className="flex">
        <Logo />
        <div className="flex items-center ml-3">
          <AppName />
        </div>
      </div>
      {children}
    </div>
    <div className="flex justify-center">
      <div className="flex flex-col justify-center mr-20">
        <p className="text-teal-300">{welcome}</p>
        <p className="text-white">{username}</p>
      </div>
    </div>
  </nav>
);
