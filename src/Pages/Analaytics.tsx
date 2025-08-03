import type { ReactNode } from "react";
import Falldown from "../Animations/Falldown";
import Topbar from "../Components/Topbar";


export default function Analaytics () : ReactNode {
    return (
        <div className="bg-gray-900 h-screen w-screen flex overflow-y-auto scroll-auto">
            <Falldown ClassName="bg-gray-900 h-screen w-screen flex flex-col overflow-y-auto" duration={5} y={-20}>
                <Topbar/>
            </Falldown>
        </div>

    );
}