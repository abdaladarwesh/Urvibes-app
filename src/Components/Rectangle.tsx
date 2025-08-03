import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";


export interface product {
    id : number,
    title : string,
    price : number,
    description : string,
    category : string, 
    image : string,
    rating : {rate : number, count : number}
}

export default function Reactangle () : ReactNode {

    const [photo, setPhoto] = useState<string>("");
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/1")
        .then(async (res) => {
            const product : product = await res.json();
            setPhoto(product.image);
        })
    }, [])

    return (
        <div className="w-full">
            <div className="flex flex-row h-[290px] bg-gray-950 mt-10 ml-11 mr-11 border-purple-400/30 border-2 rounded-3xl">
                <div className="flex flex-col">
                    <div className="h-7 mt-7 ml-7 w-20 bg-purple-400/40 rounded flex justify-center items-center">
                        <p className="text-sm font-outfit font-medium text-purple-400">New Item</p>
                    </div>
                    <p className="text-white ml-7 mt-5 text-4xl font-outfit">A new item in stock!</p>
                    <p className="text-white ml-7 mt-5 text-2xl font-outfit">Go to <Link to={"/"} className="text-purple-400 text-bold">analysis</Link> to know more</p>
                    <div className="relative w-70 ml-7 mt-auto mb-6 flex flex-row items-center">
                        <div className="size-10 bg-purple-400 rounded-full flex justify-center items-center cursor-pointer">
                            <FontAwesomeIcon icon={faPlay}/>
                        </div>
                        <p className="text-purple-300 font-outfit ml-2">Look at the other products</p>
                    </div>
                </div>
                <div className="mb-7 w-80 bg-white/50 ml-auto rounded-xl mr-12 mt-7 flex justify-center items-center p-2">
                    <img src={photo} alt="Product" className="size-full object-contain" />
                </div>
            </div>
        </div>
    );
}