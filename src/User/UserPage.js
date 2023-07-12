import React from "react";
import { useState,useEffect } from "react";
import "./UserPage.css";
import logo from "../logo1.png";
import Section0 from "./section0";
import Section1 from "./Section1";
import Section2 from "./section2";
import Form from "./form";
import Image from "./image";
import Footer from "./footer";
import { scroller } from "react-scroll";
import Signin from "./signform";
import Team from "./Team";
import { Helmet } from "react-helmet";
import Gallery from './gallery';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from "./nav";


function UserPage() {
  const scrollTo = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: -2,
      smooth: "easeInOutQuart",
    });
  };
  useEffect(() => {
    if(localStorage.getItem("authUID")=="")
    {
      window.location.replace("/App");
    }
  }, []);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(true);
  };

  const hideDropdown=() => {
    
      setShowDropdown(false);
    
  }


  const handleLogout = () => {
    localStorage.setItem("authUID","");
    window.location.replace("/App");
  };
 

  const currentPath = window.location.pathname;
  if (currentPath === "/team") {
    return <Team/>;
  } else if(currentPath === "/gallery") {
    return <Gallery/>;
  }
    else if(currentPath === "/Signin") {
      return <Signin/>;
  } else{
    return (
    
    <div style={{textAlign:'justify'}}>
      <Navbar/>
      <Section0 />
      <Section1 />
      <Section2 />
      <Image />
      
      <Form />
      
      <Footer />
      
    </div>
  );
  
            }
}
export default UserPage;

