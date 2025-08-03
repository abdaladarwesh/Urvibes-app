import type { FC } from "react";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import Falldown from "../Animations/Falldown";



const Dashboard: FC = () => {
    return (
        <div className="bg-gray-900 h-screen w-screen flex">
            <Falldown ClassName="bg-gray-900 h-screen w-screen flex" duration={1} y={-200}>
                    <Topbar/>
                    <Sidebar/>
            </Falldown>
        </div>

    );
}

export default Dashboard;