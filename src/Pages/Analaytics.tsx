import { type ReactNode } from "react";
import Falldown from "../Animations/Falldown";
import Topbar from "../Components/Topbar";


export default function Analaytics () : ReactNode {


    return (
        <div className="bg-gray-900 h-screen w-screen flex overflow-y-auto scroll-auto flex-col">
            <Topbar/>
            <Falldown ClassName="bg-gray-900 h-screen w-screen flex flex-col overflow-y-auto" duration={5} y={-20}>
                <div className="flex gap-20 ml-20 flex-row mt-10">
                    <Card NameTop={"5.5 M"} NameDown={"Profit"} />
                    <Card NameTop={"1025 K"} NameDown={"Total Stock"} />
                    <Card NameTop={"1.5 K"} NameDown={"Loss"} />
                    <Card NameTop={"1.2 M"} NameDown={"Customers"} />
                    <Card NameTop={"5.5 M"} NameDown={"Profit"} />
                </div>
            </Falldown>
        </div>

    );

    function Card({NameTop , NameDown} : { NameTop : string, NameDown : string}) {
      return (
    <div className="
        w-40 h-25 hover-lift border-purple-400/30 border-2 bg-gradient-to-r
        from-[#4c2080] to-[#7729a7] rounded flex flex-col
        justify-center items-center shadow-2xl">
        <p className="text-white text-xl font-bold">{NameTop}</p>
        <p className="text-white text-sm">{NameDown}</p>
    </div>
        );
    }
  }