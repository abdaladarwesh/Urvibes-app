import { useEffect, useRef, useState, type ReactNode } from "react";
import Card from "./Card";
import type { product } from "./Rectangle";
import { ChevronDown } from "lucide-react";


enum Filter {
    RATING, 
    PRICE,
    NONE,
    STOCK
}

export default function Stock ({products} : {products : product[]}) : ReactNode{
    
    const [opened, Setopened] = useState<boolean>(false);

    const [Selectedfilter , setSelectedfilter] = useState<Filter>(Filter.NONE);
    
    // const [products, setDataList] = useState<product[]>([]);
    // useEffect(() => {
    //     fetch("https://fakestoreapi.com/products")
    //     .then(res => res.json())
    //     .then(pro => setDataList(pro))
    // }, [])

    const containerRef = useRef<HTMLDivElement | null>(null);
    const toggleRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
    const listener = (e: MouseEvent | TouchEvent) => {
        const target = e.target as Node;
        if (
        (containerRef.current && containerRef.current.contains(target)) ||
        (toggleRef.current && toggleRef.current.contains(target))
        ) {
        return; // click inside, ignore
        }
        Setopened(false);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
    };
    }, [Setopened]);

        

    return (
        <div className="flex flex-col bg-gray-800 h-full w-full mt-10 rounded-2xl p-2">
            <div className="flex relative flex-row justify-between items-center mt-3 mb-10 mx-5">
                <div className="h-10 w-30 bg-gray-400/40 rounded flex justify-center items-center">
                    <p className="text-sm font-outfit font-medium text-white">New Products</p>
                </div>
                <div className="flex flex-col relative bg-gray-400/40 rounded w-30 justify-center items-center" ref={toggleRef}>
                    <div className="text-white cursor-pointer
                        hover:bg-gray-700 px-4 py-2 rounded transform 
                        transition-all duration-200 ease-in-out w-full text-center flex flex-row items-center justify-between"
                        ref={toggleRef}
                        onClick={() => Setopened(!opened)}
                        >
                        <p
                        ref={toggleRef}
                        onClick={() => Setopened(!opened)}>Filter by </p>
                        <ChevronDown />
                    </div>
                    {
                        opened && 
                        <div className="absolute z-100 h-fit w-25 bg-gray-500/95 p-2 gap-y-1 flex flex-col rounded-lg my-10 right-2 top-2" 
                         tabIndex={0}
                         ref={containerRef}
                         onBlur={() => Setopened(false)}   
                        >
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
                products!.slice(0, 6).map((p, i) => {
                    return(
                        <Card key={i} img={p.image} rate={p.rating.rate} name={p.title} cost={p.price} cat={p.category} count={p.rating.count}/>                    
                    );
                }) 
                :
                Selectedfilter == Filter.PRICE ? 
                products!.sort((a, b) => b.price - a.price).slice(0, 6).map((p, i) => {
                    return (
                        <Card key={i} img={p.image} rate={p.rating.rate} name={p.title} cost={p.price} cat={p.category} count={p.rating.count} />
                    );
                })
                :
                Selectedfilter == Filter.RATING ?
                products!.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 6).map((p, i) => {
                    return (
                        <Card key={i} img={p.image} rate={p.rating.rate} name={p.title} cost={p.price} cat={p.category} count={p.rating.count} />
                    );
                })
                :
                products!.sort((a, b) => b.rating.count - a.rating.count).slice(0, 6).map((p, i) => {
                    return (
                        <Card key={i} img={p.image} rate={p.rating.rate} name={p.title} cost={p.price} cat={p.category} count={p.rating.count} />
                    );
                })
            }
        </div>
    );
}