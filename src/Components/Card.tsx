import { Badge } from "@/components/ui/badge";
import type { ReactNode } from "react";
import { ArrowUp01, CircleDollarSign, PackageOpen, Star } from "lucide-react";


type props = {
    img : string,
    name : string,
    cost : number,
    cat : string,
    count : number,
    rate : number,
}

export default function Card({ img , name , cost , cat , count, rate} : props) : ReactNode {

    return (
        <div className="w-full bg-gray-600 rounded-2xl p-3 flex items-center flex-row mb-5">
            <div className="size-13 bg-gray-900 rounded-xl p-1 flex-shrink-0">
                <img src={img} alt="Product" className="size-full object-contain" />
            </div>
            <div className="flex flex-col flex-grow min-w-0 ml-2">
                <p className="ml-2 text-white text-lg break-words">{name}</p>
                <div className="flex flex-row m-1 gap-3">
                    <Badge
                        variant="secondary"
                        className="bg-gray-500 text-white dark:bg-blue-600 font-bold"
                    >
                        <CircleDollarSign size={50} color="white"/>
                        Cost <span className="text-gray-200 ml-1">{cost}</span>
                    </Badge>
                    <Badge
                        variant="secondary"
                        className="bg-gray-500 text-white dark:bg-blue-600 font-bold"
                    >
                        <PackageOpen size={50} color="white"/>
                        Category <span className="text-gray-200 ml-1">{cat}</span>
                    </Badge>
                    <Badge
                        variant="secondary"
                        className="bg-gray-500 text-white dark:bg-blue-600 font-bold"
                    >
                        <Star size={50} color="white"/>
                        Rating <span className="text-gray-200 ml-1">{rate}</span>
                    </Badge>
                    <Badge
                        variant="secondary"
                        className="bg-gray-500 text-white dark:bg-blue-600 font-bold"
                    >
                        <ArrowUp01 size={50} color="white"/>
                        Quantity <span className="text-gray-200 ml-1">{count}</span>
                    </Badge>
                </div>
            </div>
            {
                count <= 0 ?
                <div className="w-18 h-7 bg-red-500 ml-auto rounded-md flex justify-center items-center flex-shrink-0">
                    <p className="text-white">Sold out</p>
                </div> 
                :
                <div className="w-18 h-7 bg-green-400/50 ml-auto rounded-md flex justify-center items-center flex-shrink-0">
                    <p className="text-white">in stock</p>
                </div>
            }

        </div>
    );
}