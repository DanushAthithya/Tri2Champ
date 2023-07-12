import React from "react";
import { useState ,useEffect} from "react";
import "./AdminPage.css";
import Signin  from "./signform";
import logo from "../logo1.png";
import Section0 from "./section0";
import Section1 from "./Section1";
import Section2 from "./section2";
import Form from "./form";
import Image from "./image";
import Footer from "./footer";
import { scroller } from "react-scroll";
import Team from "./Team";
import { Helmet } from "react-helmet";
import Gallery from './gallery';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from "./nav";


function AdminPage() {
  const scrollTo = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: -2,
      smooth: "easeInOutQuart",
    });
  };
  useEffect(() => {
    if(localStorage.getItem("authUID")!="6BMmVtW9yhSU4T3CHbkRo9thNv43"&&localStorage.getItem("authUID")!="8kSMYknJfcZm4NKkBEp0pr0YM9M2"&&localStorage.getItem("authUID")!="Bq1ZwulC7XM57m5iQVZS78J9lOK2"&&localStorage.getItem("authUID")!=""&&localStorage.getItem("authUID")!="")
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

  const handleProfile = () => {
    
  };

  const handleLogout = () => {
    localStorage.setItem("authUID","");
    window.location.replace("./App");
  };
 

  const currentPath = window.location.pathname;
  if (currentPath === "/team") {
    return <Team/>;
  } else if(currentPath === "/gallery") {
    return <Gallery/>;
  } else if(currentPath === "/signin") {
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
export default AdminPage;

