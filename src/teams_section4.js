import React from "react";
import cycle2 from "./cycle2.png";
import "./teams_section2.css";

function teams_section4() {
  return (
    <div className="bg-zinc-250 border-2 border-zinc-800">
      <div className="para">
        <div className="text col-7 col-md-7 col-xl-7 col-xxl-7 col-lg-7">
          <p className="pt-5 pb-5">
            <br/>
            Individual Time Trial(ITT) Racer
            <br />1. WCCG ECR – January 2016
            <br />2. Decathlon ORR – 15 th July 2017
            <br />3. WCCG Mayajal – 27 th January 2018
            <br />4. TCC Off Road ECR – 4 th February 2018 - 2nd Place in Elite
            Men
            <br />5. TCC ORR – 13 th May 2018
            <br />6. TCC ECR – 29 th July 2018
            <br />7. WCCG ECR - January 2019
            <br />8. WCCG Coast Rush - January 2020
            <br />
            9.Personal Best for 25km TT - 46 Minutes 23 Secs Personal Best for
            40Km TT - 1 Hour 4 minutes
          </p>
        </div>
        <div className="cycle col-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5 pr-4">
          <img src={cycle2} className="img-fluid object-fit-cover" />
        </div>
      </div>
    </div>
  );
}

export default teams_section4;