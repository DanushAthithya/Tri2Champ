import React from "react";
import "./App.css";
import logo from "./logo1.png";
import Login from "./Login/LoginApp";
import PhoneVer from "./Login/phonever";
import Section0 from "./section0";
import Section1 from "./Section1";
import Section2 from "./section2";
import Form from "./form";
import Image from "./image";
import Footer from "./footer";
import { scroller } from "react-scroll";
import Card from "./card";
import Team from "./Team";
import AdminPage from "./Admin/AdminPage";
import UserPage from "./User/UserPage";
import AdminProfile from "./Admin/signform";
import AdminGallery from "./Admin/gallery";
import AdminTeam from "./Admin/Team";
import UserGallery from "./User/gallery";
import UserProfile from "./User/signform";
import UserTeam from "./User/Team";
import AdminEvent from "./Admin/event";
import NavbarM from "./nav2";
import HomeEvent from "./event";
import UserEvent from "./User/event";
import Eventreg from "./User/eventreg";
import HomeGallery from "./gallery";

function App() {
  const scrollTo = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: -2,
      smooth: "easeInOutQuart",
    });
  };
  const currentPath = window.location.pathname;
  if (currentPath === "/team") {
    return <Team data-testid="team-component" />;
  } else if (currentPath === "/Login") {
    return <Login />;
  } else if (currentPath === "/PhoneVer") {
    return <PhoneVer />;
  } else if (currentPath === "/AdminPage") {
    return <AdminPage />;
  } else if (currentPath === "/UserPage") {
    return <UserPage />;
  } else if (currentPath === "/AdminTeam") {
    return <AdminTeam />;
  } else if (currentPath === "/AdminGallery") {
    return <AdminGallery />;
  } else if (currentPath === "/AdminProfile") {
    return <AdminProfile />;
  } else if (currentPath === "/UserTeam") {
    return <UserTeam />;
  } else if (currentPath === "/UserGallery") {
    return <UserGallery />;
  } else if (currentPath === "/UserProfile") {
    return <UserProfile />;
  } else if (currentPath === "/register") {
    return <Eventreg />;
  } else if (currentPath === "/AdminEvent") {
    return <AdminEvent />;
  } else if (currentPath === "/HomeEvent") {
    return <HomeEvent />;
  }  else if (currentPath === "/UserEvent") {
    return <UserEvent />;
  } else {
    return (
      <div style={{textAlign:'justify'}}>
        <NavbarM />
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

export default App;
