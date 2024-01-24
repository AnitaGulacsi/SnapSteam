"use client";
import { useState } from "react";
import { Menu } from "../ui/atom/Menu";
import { Navbar } from "../ui/components/navbar/Navbar";
import { ActionsMenu } from "../ui/components/actions-menu/ActionsMenu";

export default function Layout({ children }: any) {
  //   const [openMenu, setOpenMenu] = useState(false);
  //   const handleMenuVisibility = () => {
  //     setOpenMenu(!openMenu);
  //   };

  return (
    <main>
      <Navbar welcome={"Welcome"} username={"@username"}>
        <Menu className="ml-2 md:hidden" />
      </Navbar>
      {/* {openMenu && (
        <div className="absolute end-px bg-emerald-50 md:hidden">
          <ActionsMenu type="Personal page" />
        </div>
      )} */}
      <div>{children}</div>
    </main>
  );
}
