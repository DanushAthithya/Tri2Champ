import React, { useState } from "react";
import logo from "./logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { scroller } from "react-scroll";
import Tilt from "react-parallax-tilt";

const NavbarL = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const hideDropdown = () => {
    setShowDropdown(false);
  };

  const handleProfile = () => {};

  const handleLogout = () => {};

  const scrollTo = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: -2,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div style={{}} className="">
      <nav
        className="flex border-b-2  border-sky-400 items-center justify-between flex-wrap p-2 navbar bg-gradient-to-r from-zinc-900  via-indigo-950 to-zinc-900"
        id="nav1"
      >
        <a
          href="/"
          className="flex items-center flex-shrink-0 mr-6 justify-start col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"
        >
          <Tilt>
            <img
              src={logo}
              alt="Logo"
              className="logo-image mx-auto b-block"
              style={{}}
            />
          </Tilt>
        </a>
        <div className="flex-grow">
          <ul className="flex justify-end">
          <li className="pr-8 pl-3 pt-4 pb-4">
              <a
                href="/"
                className="hov under size"
              >
                Home
              </a>
            </li>
            <li className="pr-8  pt-4 pb-4">
              <a
                href="/HomeEvent"
                className="hov under size"
              >
                Events
              </a>
            </li>
            <li className="pr-8 pt-4 pb-4">
              <a
                href="/Login"
                className="hov under size"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarL;