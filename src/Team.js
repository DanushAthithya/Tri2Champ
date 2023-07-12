import React from "react";
import logo from "./logo1.png";
import Team_section1 from "./team_section1";
import Teams_section2 from "./teams_section2";
import Teams_section3 from "./teams_section3";
import Teams_section4 from "./teams_section4";
import Teams_section5 from "./teams_section5";
import Footer from "./footer";
import { scroller } from "react-scroll";

function Team() {
  const scrollTo = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: -2,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div>
      <nav
        className="flex border-b-2  border-sky-400 items-center justify-between flex-wrap p-2 navbar bg-gradient-to-r from-zinc-900  via-indigo-950 to-zinc-900"
        id="nav1"
      >
        <a
          href="App.js"
          className="flex items-center flex-shrink-0 mr-6 justify-start col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"
        >
          <img src={logo} alt="Logo" className="logo-image" style={{}} />
        </a>
        <div className="flex-grow ">
          <ul className="flex justify-end ">
            <li className="pr-9 pt-4 pl-5 pb-4">
              <a
                href="App.js"
                className="hov under size"
                onClick={() => scrollTo("reg")}
              >
                Events
              </a>
            </li>
            <li className=" pr-9 pt-4 pb-4">
              <a href="#" className="hov under size">
                Team
              </a>
            </li>
            <li className=" pr-9 pt-4 pb-4">
              <a
                href="App.js"
                className="hov under size"
                onClick={() => scrollTo("event")}
              >
                Gallery
              </a>
            </li>
            <li className="pr-2 pt-4 pb-4">
              <a
                href="App.js"
                className="hov under size"
                onClick={() => scrollTo("form")}
              >
                Contact
              </a>
            </li>
            <li className="  pt-4 pb-4">
              <a
                href="#form"
                className="hov under size"
                onClick={() => scrollTo("form")}
              ></a>
            </li>
          </ul>
        </div>
      </nav>

      <Team_section1 />
      <Teams_section2 />
      <Teams_section3 />
      <Teams_section4 />
      <Teams_section5 />
      <Footer />
    </div>
  );
}

export default Team;