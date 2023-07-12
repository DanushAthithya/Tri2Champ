import React, { useState,useEffect } from "react";
import logo from "../logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { scroller } from "react-scroll";
import AdminProfile from "./signform";
import Event from "./event";
import AdminTeam from "./Team";
import AdminGallery from "./gallery";
import AdminEvent from "./event";

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
    window.location.replace("/");
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
    return <AdminTeam />;
  } else if (currentPath === "/gallery") {
    return <AdminGallery />;
  } else if (currentPath === "/Signin") {
    return <AdminProfile />;
  } else if (currentPath === "/event") {
    return <AdminEvent />;
  } else {
  return (
    <div style={{}} className="">
      <nav
        className="flex border-b-2  border-sky-400 items-center justify-between flex-wrap p-2 navbar bg-gradient-to-r from-zinc-900  via-indigo-950 to-zinc-900"
        id="nav1"
      >
        <a
          href="/AdminPage"
          className="flex items-center flex-shrink-0 mr-6 justify-start col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"
        >
          <img
            src={logo}
            alt="Logo"
            className="logo-image mx-auto b-block"
            style={{}}
          />
        </a>
        <div className="flex-grow">
          <ul className="flex justify-end">
            <li className="pr-8 pl-3 pt-4 pb-4">
              <a
                href="/AdminPage"
                className="hov under size"
                onClick={() => scrollTo("event")}
              >
                Home
              </a>
            </li>
            <li className="pr-8 pt-4 pb-4">
              <a
                href="/AdminTeam"
                className="hov under size"
              >
                Team
              </a>
            </li>
            <li className="pr-8 pt-4 pb-4">
              <a
                href="/AdminGallery"
                className="hov under size"
              >
                Gallery
              </a>
            </li>
            <li className="pr-8 pt-4 pb-4">
              <a
                href="/AdminEvent"
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
                <div className="absolute pbar  bg-indigo-950 border-2 border-zinc-50  text-white z-10 rounded-lg  ">
                  <ul className="rounded-lg">
                   <a href="./AdminProfile" >
                      <button href="./AdminProfile" style={{fontSize:'2.4vh'}} className=" w-full   hover:text-zinc-300 hover:rounded-lg hover:border border-b" onMouseEnter={handleProfile}>
                        View Profile
                      </button>
                      </a>
                      <button style={{fontSize:'2.4vh'}} className="w-full hover:text-zinc-300 hover:rounded-lg hover:border border-t" onClick={handleLogout}>
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