import { useState, type FC } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse , faCalendarDays} from '@fortawesome/free-regular-svg-icons';
import { faChartLine , faGear, faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";


const Sidebar : FC = () => {
    const [selectedIcon, setSelectedIcon] = useState<number>(1);

    return(

        <div className="flex flex-col bg-gray-700 w-15 ml-2 mt-2 mb-2 top-2 rounded-xl sticky shadow-2xl items-center z-50">
            <div className="size-[50px] bg-gray-950 mt-2 rounded-xl flex justify-center items-center cursor-pointer">
                <Link to={"/"} className="cursor-pointer">
                    <img src={logo} alt="Urvibes logo" width={40} height={40} className="cursor-pointer"/>
                </Link>
            </div>
            <div className="flex flex-col mt-10 gap-8 relative">
                {
                    [
                        { id: 1, icon: faHouse },
                        { id: 2, icon: faChartLine },
                        { id: 3, icon: faCalendarDays },
                        { id: 4, icon: faGear }
                    ].map(({ id, icon }) => {
                        return (
                            <div className="relative flex items-center" key={id}>
                                {
                                    selectedIcon === id &&
                                    <motion.div
                                        layoutId="indicator"
                                        className="absolute -left-5 w-1 h-6 bg-white rounded-tr-full rounded-br-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    />
                                }
                                <Link to={id === 2 ? "/analytics" : "/"} onClick={() => setSelectedIcon(id)}>
                                    <FontAwesomeIcon icon={icon} className="text-white cursor-pointer" />
                                </Link>
                            </div>
                        );
                    })
                }
            </div>
            <Link to={"/"} className="text-white mt-auto mb-5">
                <FontAwesomeIcon icon={faArrowRightFromBracket} cursor={"pointer"}/>
            </Link>
        </div>
    );
}

export default Sidebar;