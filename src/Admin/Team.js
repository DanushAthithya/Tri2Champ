import React from "react";
import logo from "../logo1.png";
import Team_section1 from "./team_section1";
import Teams_section2 from "./teams_section2";
import Teams_section3 from "./teams_section3";
import Teams_section4 from "./teams_section4";
import Teams_section5 from "./teams_section5";
import Footer from "./footer";
import { scroller } from "react-scroll";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Navbar from "./nav";




function AdminTeam() {
  useEffect(() => {
    if(localStorage.getItem("authUID")!="6BMmVtW9yhSU4T3CHbkRo9thNv43"&&localStorage.getItem("authUID")!="8kSMYknJfcZm4NKkBEp0pr0YM9M2"&&localStorage.getItem("authUID")!="Bq1ZwulC7XM57m5iQVZS78J9lOK2"&&localStorage.getItem("authUID")!=""&&localStorage.getItem("authUID")!="")
    {
      window.location.replace("/App");
    }
  }, []);

  const scrollTo = (id) => {
    scroller.scrollTo(id, {
      duration: 1000,
      delay: -2,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <Helmet>
        <title>Team</title>
        <link rel="icon" type="image/png" href="logo.png" />
      </Helmet>
      <div>
        <Navbar/>
        <div style={{ fontSize: "120%" }}>
          <Team_section1 />
          <Teams_section2 />
          <Teams_section3 />
          <Teams_section4 />
          <Teams_section5 />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default AdminTeam;
