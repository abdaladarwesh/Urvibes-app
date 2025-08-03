import { useEffect, useState, type ReactNode } from "react";
import Card from "./Card";
import type { product } from "./Rectangle";


enum Filter {
    RATING, 
    PRICE,
    NONE,
    STOCK
}

export default function Stock () : ReactNode{
    
    const [opened, Setopened] = useState<boolean>(false);

    const [Selectedfilter , setSelectedfilter] = useState<Filter>(Filter.NONE);
    
    const [dataList, setDataList] = useState<product[]>([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(async (res) => {
            setDataList(await res.json());
        })
    }, [])

    

    return (
        <div className="flex flex-col bg-gray-800 h-full w-full mt-10 rounded-2xl p-2">
            <div className="flex relative flex-row justify-between items-center mt-3 mb-10 mx-5">
                {/* <p className="text-white">New Products</p> */}
                <div className="h-10 w-30 bg-purple-400/40 rounded flex justify-center items-center">
                    <p className="text-sm font-outfit font-medium text-purple-400">New Products</p>
                </div>
                <div className="flex flex-col relative">
                    <p className="text-white cursor-pointer
                    hover:bg-gray-700 p-2 rounded transform 
                    transition-all duration-200 ease-in-out" 
                    onClick={() => Setopened(!opened)}>Filter by </p>
                    {
                        opened && 
                        <div className="absolute z-100 h-fit w-25 bg-gray-500/95 p-2 gap-y-1 flex flex-col rounded-lg my-10 right-0.5">
                            <div className="hover:bg-gray-600 w-full h-7 text-center flex items-center flex-col
                            justify-center rounded text-white transform transition-all duration-200 ease-in-out"
                            onClick={() => {setSelectedfilter(Filter.PRICE);Setopened(false)}}
                            >
                                <p>Price</p>
                            </div>
                            <div className="hover:bg-gray-600 w-full h-7 text-center flex items-center flex-col
                            justify-center rounded text-white transform transition-all duration-200 ease-in-out"
                            onClick={() => {setSelectedfilter(Filter.RATING);Setopened(false)}}
                            >
                                <p>Rating</p>
                            </div>
                            <div className="hover:bg-gray-600 w-full h-7 text-center flex items-center flex-col
                            justify-center rounded text-white transform transition-all duration-200 ease-in-out"
                            onClick={() => {setSelectedfilter(Filter.STOCK);Setopened(false)}}
                            >
                                <p>Stock</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
            {
                Selectedfilter == Filter.NONE ?
                dataList!.slice(0, 6).map((p, i) => {
                    return(
                        <Card key={i} img={p.image} rate={p.rating.rate} name={p.title} cost={p.price} cat={p.category} count={p.rating.count}/>                    
                    );
                }) 
                :
                Selectedfilter == Filter.PRICE ? 
                dataList!.sort((a, b) => b.price - a.price).slice(0, 6).map((p, i) => {
                    return (
                        <Card key={i} img={p.image} rate={p.rating.rate} name={p.title} cost={p.price} cat={p.category} count={p.rating.count} />
                    );
                })
                :
                Selectedfilter == Filter.RATING ?
                dataList!.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 6).map((p, i) => {
                    return (
                        <Card key={i} img={p.image} rate={p.rating.rate} name={p.title} cost={p.price} cat={p.category} count={p.rating.count} />
                    );
                })
                :
                dataList!.sort((a, b) => b.rating.count - a.rating.count).slice(0, 6).map((p, i) => {
                    return (
                        <Card key={i} img={p.image} rate={p.rating.rate} name={p.title} cost={p.price} cat={p.category} count={p.rating.count} />
                    );
                })
            }
        </div>
    );
}