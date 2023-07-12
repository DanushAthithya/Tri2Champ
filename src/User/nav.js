import React, { useState } from "react";
import logo from "../logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { scroller } from "react-scroll";
import UserProfile from "./signform";
import UserTeam from "./Team";
import UserGallery from "./gallery";
import UserEvent from "./event";
import Tilt from "react-parallax-tilt";
import UserPage from "./UserPage";
import "./nav.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const hideDropdown = () => {
    setShowDropdown(false);
  };

  const handleProfile = () => {
  };

  const handleLogout = () => {
    localStorage.setItem("authUID","");
    window.location.replace("./App");
  };

  const scrollTo = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: -2,
      smooth: "easeInOutQuart",
    });
  };

  const currentPath = window.location.pathname;
  if (currentPath === "/team") {
    return <UserTeam />;
  } else if (currentPath === "/gallery") {
    return <UserGallery />;
  } else if (currentPath === "/Signin") {
    return <UserProfile />;
  } else if (currentPath === "/event") {
    return <UserEvent />;
  }
   else {
  return (
    <div style={{}} className="">
      <nav
        className="flex border-b-2  border-sky-400 items-center justify-between flex-wrap p-2 navbar bg-gradient-to-r from-zinc-900  via-indigo-950 to-zinc-900"
        id="nav1"
      >
        <a
          href="/UserPage"
          className="flex items-center flex-shrink-0 mr-6 justify-start col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"
        ><Tilt>
          <img
            src={logo}
            alt="Logo"
            className="logo-image mx-auto b-block"
            style={{}}
          /></Tilt>
        </a>
        <div className="flex-grow">
          <ul className="flex justify-end">
            <li className="pr-8 pl-3 pt-4 pb-4">
              <a
                href="/UserPage"
                className="hov under size"
              >
                Home
              </a>
            </li>
            <li className="pr-8 pt-4 pb-4">
              <a
                href="/UserTeam"
                className="hov under size"
              >
                Team
              </a>
            </li>
            <li className="pr-8 pt-4 pb-4">
              <a
                href="/UserGallery"
                className="hov under size"
              >
                Gallery
              </a>
            </li>
            <li className="pr-8 pt-4 pb-4">
              <a
                href="/EventPage"
                className="hov under size"
              >
                Event
              </a>
            </li>
            <li className="pr-2 pt-4 pb-4 rounded relative" onMouseLeave={hideDropdown}>
              <a href="#" className="hov under size icon-color" onMouseEnter={toggleDropdown}>
                Profile<FontAwesomeIcon icon={faCaretDown} className="ms-1 icon-color" />
              </a>
               {showDropdown && (
                <div className="absolute pbar  bg-indigo-950 border-2 border-zinc-50  text-white z-10 rounded-lg" >
                  <ul className="rounded-lg">
                   <a href="./UserProfile" >
                      <button href="./UserProfile" className=" w-full profile-button  hover:text-zinc-300 hover:rounded-lg hover:border border-b" onMouseEnter={handleProfile}>
                        View Profile
                      </button>
                      </a>
                      <button className="w-full profile-button hover:text-zinc-300 hover:rounded-lg hover:border border-t" onClick={handleLogout}>
                        Logout
                      </button>
                    
                    </ul>
                    </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
}

export default Navbar;