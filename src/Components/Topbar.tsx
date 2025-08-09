import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-regular-svg-icons"
import { type ChangeEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import type { product } from "./Rectangle";

type props = {
  img? : string,
  input? : string,
  SetInput? : (value: string) => void,
  products? : product[]
}

const Topbar = ({img, input, SetInput, products} : props) => {


  if (products !== undefined){
  return (
    <div className="flex top-0 w-full justify-end items-center mt-7 px-7 gap-6 z-20">
      <h1 className="text-2xl text-white mr-auto ml-5 font-outfit whitespace-nowrap">
        Hello Sir!
      </h1>

      <div className="relative w-75 h-fit">
        <input
          type="text"
          value={input}
          onChange={(e : ChangeEvent<HTMLInputElement>) => {SetInput!(e.currentTarget.value)}}
          placeholder="Search..."
          aria-label="Search"
          className="w-full pl-10 pr-4 py-2 rounded-4xl bg-gray-700/90 text-white placeholder-gray-500 focus:outline-none placeholder:text-sm"
        />
          {
            input &&
            <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute w-[257px] h-fit bg-gray-500 left-8 top-15 p-2 rounded"
            >
              <motion.div
               className="text-center text-white  gap-1 rounded p-2 flex flex-col scroll-auto"
                key={input}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
              {
                products.length === 0 ?
                products!.slice(0, 4).map((p, i) => {
                  return(
                      <Card key={i} img={p.image} rate={p.rating.rate} name={p.title} cost={p.price} cat={p.category} count={p.rating.count}/>                    
                    );
                }) 
                :
                <Card name={"Item not found"}/>
               }
               </motion.div>
            </motion.div>

          }
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </div>
      <div className="rounded-full bg-gray-700/90 size-10 flex items-center justify-center">
        <FontAwesomeIcon icon={faBell} className="text-white"/>
      </div>
      {
      img == null ? 
          <img 
          src="https://eu.ui-avatars.com/api/?name=Abdullah+Darwesh&size=250&color=191a1a"
          className="rounded-full bg-gray-700/90 size-10 flex items-center justify-center"
          alt="Profile picture"
          ></img> 
      : 
          <img 
          src={img}
          className="rounded-full bg-gray-700/90 size-10 flex items-center justify-center"
          alt="Profile picture"
          >
          </img>
      }
      
        
    </div>
  );}

  else{
    return(
    <div className="flex top-0 w-full justify-end items-center mt-7 px-7 gap-6 z-20">
      <h1 className="text-2xl text-white mr-auto ml-5 font-outfit whitespace-nowrap">
        Hello Sir!
      </h1>


      <div className="rounded-full bg-gray-700/90 size-10 flex items-center justify-center">
        <FontAwesomeIcon icon={faBell} className="text-white"/>
      </div>
      {
      img == null ? 
          <img 
          src="https://eu.ui-avatars.com/api/?name=Abdullah+Darwesh&size=250&color=191a1a"
          className="rounded-full bg-gray-700/90 size-10 flex items-center justify-center"
          alt="Profile picture"
          ></img> 
      : 
          <img 
          src={img}
          className="rounded-full bg-gray-700/90 size-10 flex items-center justify-center"
          alt="Profile picture"
          >
          </img>
      }
      
        
    </div>
    );
  }
}



export default Topbar;
type Cprops = {
    img? : string,
    name? : string,
    cost? : number,
    cat? : string,
    count? : number,
    rate? : number,
}

function Card({ img , name } : Cprops) : ReactNode {

    return (
      <div className="flex flex-row items-center bg-gray-700/70 rounded my-1 p-1">
        <div className="size-13 bg-gray-900 rounded-xl p-1 flex-shrink-0 m-2 flex-row">
            <img src={img} alt="Product" className="size-full object-contain" />
        </div>
        <p>{name!.slice(0, 20)} ...</p>
      </div>
    );
}
