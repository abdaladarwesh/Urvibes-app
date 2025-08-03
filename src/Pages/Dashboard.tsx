import type { FC } from "react";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import Falldown from "../Animations/Falldown";
import Reactangle from "../Components/Rectangle";
import Stock from "../Components/Stock";



const Dashboard: FC = () => {
    return (
        <div className="bg-gray-900 h-screen w-screen flex overflow-y-auto scroll-auto">
            <Sidebar/>
            <Falldown ClassName="bg-gray-900 h-screen w-screen flex flex-col overflow-y-auto" duration={5} y={-20}>
                <Topbar/>
                <Reactangle/>
                <div className="flex flex-row mx-10 mb-10 gap-2 pb-10">
                    <Stock/>
             
                </div>
            </Falldown>
        </div>

    );
}

export default Dashboard;