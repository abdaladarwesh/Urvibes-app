// Layout.tsx
import { Outlet } from "react-router-dom";
import Sidebar  from "../Components/Sidebar";

export const Layout = () => (
  <div className="flex h-screen bg-gray-900">
    <Sidebar />
    <div className="flex overflow-y-auto">
      <Outlet />
    </div>
  </div>
);
