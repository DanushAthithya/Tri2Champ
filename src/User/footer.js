import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as Mail } from "@fortawesome/free-solid-svg-icons"; 
import "./footer.css";
import logo from "../logo1.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="footer-container bg-gradient-to-b from-teal-900 to-zinc-950  border-indigo-300">
        <div className="footer-left col-3 col-sm-3 col-md-3 col-lg-3">
          <a href="#nav1" onClick={scrollToTop}>
            <img src={logo} alt="Logo" className="footer-logo" />
          </a>
        </div>
        <div className=" col-6 col-sm-6 col-md-6 col-lg-6">
          <p
            className="copy2 "
            style={{ fontSize: "0.6rem", paddingBottom: "" }}
          ></p>
          <p className="copy1 ">
            Tri2champ is a triathlon training academy that specializes in
            coaching and mentoring elite triathletes who aspire to compete at
            the highest level. Whether you are aiming for the Olympics, the
            Ironman World Championship, or any other major event, we have the
            expertise and experience to help you achieve your dreams.
          </p>
          <p className="mx-auto d-block qq pt-4 pb-4 justify-end">
            &copy; 2023 Tri2Champ. All Rights Reserved.
          </p>
        </div>
        <div className="footer-right text-end  col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <div className="footer-icons">
            <a href="https://www.facebook.com/groups/545209797657546/?ref=share&paipv=0&eav=AfZZNXp5BRnZR42ez3jNFf0dbbDlFC63ktr8TgXCeNmR6cDO16oSVEhP6aI8xnfrPaI&_rdr" className="social-icons sicons ">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          
            <a href="https://www.instagram.com/tri_2_champ/" className="social-icons sicons">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=9677179907&text&type=phone_number&app_absent=0" className="social-icons sicons">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="mailto:team.tri2champ@gmail.com" className="social-icons ">
              <FontAwesomeIcon icon={Mail} /> 
            </a>
          </div>
          <div className="footer-links ">
            <a href="#" className="hover:text-orange-500 pb-2">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-500 pb-2">
              Terms of Service
            </a>
            <a href="tel:9677179907" className="hover:text-orange-500 pb-2">
              Call Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;