import type { FC } from "react";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import Falldown from "../Animations/Falldown";
import Reactangle from "../Components/Rectangle";



const Dashboard: FC = () => {
    return (
        <div className="bg-gray-900 h-screen w-screen flex">
            <Sidebar/>
            <Falldown ClassName="bg-gray-900 h-screen w-screen flex flex-col" duration={5} y={-20}>
                    <Topbar/>
                    <Reactangle/>
            </Falldown>
        </div>

    );
}

export default Dashboard;