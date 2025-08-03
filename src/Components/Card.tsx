import type { ReactNode } from "react";


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
        <div className="w-full bg-gray-600 rounded-2xl p-3 flex items-start flex-row mb-5">
            <div className="size-13 bg-gray-900 rounded-xl p-1 flex-shrink-0">
                <img src={img} alt="Product" className="size-full object-contain" />
            </div>
            <div className="flex flex-col flex-grow min-w-0 ml-2">
                <p className="ml-2 text-white text-lg break-words">{name}</p>
                <div className="flex flex-row">
                    <p className="ml-2 text-white text-sm font-bold mx-2">Cost    <span className="text-gray-400 ml-1">{cost}$</span></p>
                    <p className="ml-2 text-white text-sm font-bold mx-2">Category   	 <span className="text-gray-400 ml-1">{cat}</span></p>
                    <p className="ml-2 text-white text-sm font-bold mx-2">Rating   	 <span className="text-gray-400 ml-1">{rate}</span></p>
                    <p className="ml-2 text-white text-sm font-bold mx-2">Count   	 <span className="text-gray-400 ml-1">{count}</span></p>
                </div>
            </div>
            {
                count <= 0 ?
                <div className="w-18 h-7 bg-red-500 ml-auto rounded-md flex justify-center items-center flex-shrink-0">
                    <p className="text-white">Sold out</p>
                </div> 
                :
                <div className="w-18 h-7 bg-green-400 ml-auto rounded-md flex justify-center items-center flex-shrink-0">
                    <p className="text-white">in stock</p>
                </div>
            }

        </div>
    );
}