import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-regular-svg-icons"

type props = {
  img? : string
}

const Topbar = ({img} : props) => {

  return (
    <div className="flex fixed top-0 w-full justify-end items-center mt-7 px-7 gap-6 z-20">
      <h1 className="text-2xl text-white mr-auto ml-20 font-outfit whitespace-nowrap">
        Hello Sir!
      </h1>

      <div className="relative w-75">
        <input
          type="text"
          placeholder="Search..."
          aria-label="Search"
          className="w-full pl-10 pr-4 py-2 rounded-4xl bg-gray-700/90 text-white placeholder-gray-500 focus:outline-none placeholder:text-sm"
        />
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
  );
}



export default Topbar;