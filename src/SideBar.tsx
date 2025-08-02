import React from "react";

    function SideBar({logo, faHouse, faChartLine, faCalendarDays, faGear, faArrowRightFromBracket}) {
      return (<div className="bg-gray-900 h-screen w-screen">
            <div className="fixed flex flex-col bg-gray-700 w-15 left-2 top-2 bottom-2 rounded-xl shadow-2xl items-center">
                <div className="size-[50px] bg-gray-950 mt-2 rounded-xl flex justify-center items-center">
                    <Link to={"/"}>
                        <img src={logo} alt="Urvibes logo" width={40} height={40} />
                    </Link>
                </div>
                <div className="flex flex-col mt-10 gap-8">
                    <FontAwesomeIcon icon={faHouse} className="text-white" cursor={"pointer"} />
                    <FontAwesomeIcon icon={faChartLine} className="text-white" cursor={"pointer"} />
                    <FontAwesomeIcon icon={faCalendarDays} className="text-white" cursor={"pointer"} />
                    <FontAwesomeIcon icon={faGear} className="text-white" cursor={"pointer"} />
                </div>
                <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-white mt-auto mb-5" cursor={"pointer"} />


            </div>
        </div>);
    }
  


    