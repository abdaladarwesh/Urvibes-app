import { useEffect, useState, type FC } from "react";
import Topbar from "../Components/Topbar";
import Reactangle, { type product } from "../Components/Rectangle";
import Stock from "../Components/Stock";
import Falldown from "../Animations/Falldown";



const Dashboard: FC = () => {

    const [products, setProducts] = useState<product[]>([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(pro => setProducts(pro))
    }, [])
    const [input , SetInput] = useState<string>("");
    const filtered = products.filter(product =>
        product.title.toLowerCase().includes(input.toLowerCase())
    );

    return (
        <div className="bg-gray-900 h-screen w-screen flex overflow-y-auto scroll-auto">
            <div className="bg-gray-900 h-screen w-screen flex flex-col overflow-y-auto" >
                <Topbar input={input} SetInput={SetInput} products={filtered}/>
                <Falldown duration={5} y={-20}>
                    <Reactangle/>
                    <div className="flex flex-row mx-10 mb-10 gap-2 pb-10">
                        <Stock products={products}/>
                    </div>
                </Falldown>
            </div>
        </div>

    );
}

export default Dashboard;