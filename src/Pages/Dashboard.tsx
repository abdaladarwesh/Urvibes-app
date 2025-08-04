import { type FC } from "react";
import Topbar from "../Components/Topbar";
import Reactangle from "../Components/Rectangle";
import Stock from "../Components/Stock";
import Falldown from "../Animations/Falldown";



const Dashboard: FC = () => {

    return (
        <div className="bg-gray-900 h-screen w-screen flex overflow-y-auto scroll-auto">
            <div className="bg-gray-900 h-screen w-screen flex flex-col overflow-y-auto" >
                <Topbar/>
                <Falldown duration={5} y={-20}>
                    <Reactangle/>
                    <div className="flex flex-row mx-10 mb-10 gap-2 pb-10">
                        <Stock/>
                    </div>
                </Falldown>
            </div>
        </div>

    );
}

export default Dashboard;