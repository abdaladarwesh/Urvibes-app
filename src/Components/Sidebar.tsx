import type { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse , faCalendarDays} from '@fortawesome/free-regular-svg-icons';
import { faChartLine , faGear, faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";


const Sidebar : FC = () => {
    return(

        <div className="flex flex-col bg-gray-700 w-15 ml-2 mt-2 mb-2 rounded-xl shadow-2xl items-center">
            <div className="size-[50px] bg-gray-950 mt-2 rounded-xl flex justify-center items-center">
                <Link to={"/"}>
                    <img src={logo} alt="Urvibes logo" width={40} height={40}/>
                </Link>
            </div>
            <div className="flex flex-col mt-10 gap-8">
                <Link to={"/"}>
                    <FontAwesomeIcon icon={faHouse} className="text-white" cursor={"pointer"}/>
                </Link>
                <FontAwesomeIcon icon={faChartLine} className="text-white" cursor={"pointer"}/>
                <FontAwesomeIcon icon={faCalendarDays} className="text-white" cursor={"pointer"}/>
                <FontAwesomeIcon icon={faGear} className="text-white" cursor={"pointer"}/>
            </div>
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-white mt-auto mb-5" cursor={"pointer"}/>
        </div>
    );
}

export default Sidebar;