import { FC } from "react";
import { Logo } from "../logo/Logo";
import { AppName } from "../logo/AppName";
import { Menu } from "../../atom/Menu";

interface NavbarProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Navbar: FC<NavbarProps> = ({ children, onClick }) => (
  <nav className="bg-green p-5 sm:p-10 flex flex-col md:flex-row md:justify-between">
    <div className="flex flex-row items-center justify-between">
      <div className="flex">
        <Logo />
        <div className="flex items-center ml-3">
          <AppName />
        </div>
      </div>
      <Menu onClick={onClick} className="ml-2 md:hidden" />
    </div>
    <div className="flex justify-center">
      <div className="flex flex-col justify-center mr-20">{children}</div>
    </div>
  </nav>
);
