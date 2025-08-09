import { useEffect, useState, type ReactNode } from "react";
import Falldown from "../Animations/Falldown";
import Topbar from "../Components/Topbar";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import type { product } from "@/Components/Rectangle";
import Chart from "@/Components/Chart";



export default function Analaytics () : ReactNode {

    const [data, Setdata] = useState<product[]>([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => Setdata(data))
        Setdata(data => data?.slice(0,7))
    }, [])


    return (
        <div className="bg-gray-900 h-screen w-full flex overflow-y-auto scroll-auto flex-col">
            <Topbar/>
            <Falldown ClassName="bg-gray-900 h-screen w-screen flex flex-col overflow-y-auto" duration={5} y={-20}>
                {/* <Card c>
                    <CardHeader>
                        Profit
                    </CardHeader>
                </Card> */}
                <Card className="max-w-full w-[500px] h-[440px] bg-[#171717] rounded-2xl m-2 ml-10 mt-10 hover-lift">
                    <CardHeader>
                        <CardTitle className="text-white">Sales</CardTitle>
                        <CardDescription>
                        Showing total Sales for the newest products
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-10">
                        <Chart data={data!}/>
                    </CardContent>
                </Card>
            </Falldown>
        </div>

    );
}