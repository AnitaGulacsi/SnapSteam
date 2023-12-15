"use client";
import { useState } from "react";
import { ActionsMenu } from "../ui/components/actions-menu/ActionsMenu";
import { Navbar } from "../ui/components/navbar/Navbar";

export default function Page() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuVisibility = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <main>
      <Navbar onClick={handleMenuVisibility}>
        <p className="text-teal-300">Welcome</p>
        <p className="text-white">@user</p>
      </Navbar>
      <div className="absolute m-10 hidden md:flex">
        <ActionsMenu />
      </div>
      {openMenu && (
        <div className="absolute end-px bg-emerald-50 md:hidden">
          <ActionsMenu />
        </div>
      )}
      <div className="flex justify-center h-screen">
        <div className="bg-green text-white p-20">Post</div>
      </div>
    </main>
  );
}
