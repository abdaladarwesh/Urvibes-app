import { useEffect, useState, type FC } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faChartLine, faGear, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const routeToId = (path: string) => {
  if (path.startsWith("/analytics")) return 2;
  if (path === "/" || path === "") return 1;
  if (path.startsWith("/calendar")) return 3; // adjust if your path differs
  if (path.startsWith("/settings")) return 4;
  return 0; // fallback
};

const Sidebar: FC = () => {
  const location = useLocation();
  const [selectedIcon, setSelectedIcon] = useState<number>(() => routeToId(location.pathname));

  // Sync selection when route changes
  useEffect(() => {
    setSelectedIcon(routeToId(location.pathname));
  }, [location.pathname]);

  return (
    <div className="flex flex-col bg-gray-700 w-15 ml-2 mt-2 mb-2 top-2 rounded-xl sticky shadow-2xl items-center z-50">
      <div className="size-[50px] bg-gray-950 mt-2 rounded-xl flex justify-center items-center cursor-pointer">
        <Link to={"/"} className="cursor-pointer">
          <img src={logo} alt="Urvibes logo" width={40} height={40} className="cursor-pointer" />
        </Link>
      </div>
      <div className="flex flex-col mt-10 gap-8 relative">
        {[
          { id: 1, icon: faHouse, to: "/" },
          { id: 2, icon: faChartLine, to: "/analytics" },
          { id: 3, icon: faCalendarDays, to: "/calendar" },
          { id: 4, icon: faGear, to: "/settings" },
        ].map(({ id, icon, to }) => (
          <div className="relative flex items-center" key={id}>
            {selectedIcon === id && (
              <motion.div
                layoutId="indicator"
                className="absolute -left-5 w-1 h-6 bg-white rounded-tr-full rounded-br-full"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            <Link to={to} onClick={() => setSelectedIcon(id)}>
              <FontAwesomeIcon icon={icon} className="text-white cursor-pointer" />
            </Link>
          </div>
        ))}
      </div>
      <Link to={"/"} className="text-white mt-auto mb-5">
        <FontAwesomeIcon icon={faArrowRightFromBracket} cursor={"pointer"} />
      </Link>
    </div>
  );
};

export default Sidebar;
