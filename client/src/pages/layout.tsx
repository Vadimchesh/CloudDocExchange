import { MainNav } from "@/components/main-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div className="hidden flex-col md:flex">
      <div className="flex justify-between h-16 items-center px-4">
        <MainNav />
        <ModeToggle />
      </div>
      <div className="border-b"></div>
      <div className="flex alflex justify-center items-center h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
