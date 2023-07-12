import React from "react";
import cycle1 from "./cycle1.png";
import "./sec0.css";

function teams_section3() {
  return (
    <div className="bg-zinc-200" style={{}} id="teams_sec1">
      <div className="para">
        <div className="cycle col-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
          <img src={cycle1} className="img-fluid object-fit-cover" />
        </div>
        <div className="text col-7 col-md-7 col-xl-7 col-xxl-7 col-lg-7">
          <div className="glitter pt-3 pb-2 bg-gradient-to-r text-cyan-500 text-blue-500">
          <b style={{fontSize:'130%'}}> CYCLING</b>
          </div>
          
          <p className="pb-3 pr-4">
            That’s when things started changing. I slowly leaned towards
            fitness. I began to jog, run and then took up cycling. He would
            undertake solo rides of 10-20km initially. My brother Saravanan is a
            body-builder and through him he was acquainted to SudhakarGanesh, a
            runner who went on to become Nishanth’s guide. Mr. Ganesh, an
            experienced triathlete, introduced Nishanth to the Chennai-based
            WCCG (We Are Chennai Cycling Group). “I joined the group on January
            16, 2015 and on the third day was my first event, a 50km ride in the
            Chennai Bypass with experience riders.
          </p>
        </div>
      </div>
    </div>
  );
}

export default teams_section3;