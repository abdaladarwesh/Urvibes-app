import { Outlet } from "react-router-dom";
import Sidebar  from "../Components/Sidebar";

export const Layout = () => (
  <div className="flex h-full bg-gray-900 w-full">
    <Sidebar />
    <div className="flex overflow-y-auto">
      <Outlet />
    </div>
  </div>
);

