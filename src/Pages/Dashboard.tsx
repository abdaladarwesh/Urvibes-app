import type { FC } from "react";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";


const Dashboard : FC = () => {
    return (
        <div className="bg-gray-900 h-screen w-screen flex">
            <Sidebar/>
            <Topbar/>
        </div>
    );
}

export default Dashboard;