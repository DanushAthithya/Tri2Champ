import React from "react";
import swim1 from "./swim1.png";
import "./sec0.css";

function team_section1() {
  return (
    <div className="bg-zinc-200" style={{}} id="teams_sec1">
      <div className="para">
        <div className="cycle col-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
          <img src={swim1} className="img-fluid object-fit-cover" />
        </div>
        <div className="text col-7 col-md-7 col-xl-7 col-xxl-7 col-lg-7">
          <p className="glitter pt-3 pb-2 bg-gradient-to-r text-cyan-500 text-blue-500">
          <b style={{fontSize:'130%'}}>SWIMMING</b>
          </p>
          
          <p className="pb-3 pr-4">
            In the beginning lots of friends suggested me to learn swimming and
            participate in triathlon events since i is already doing good in
            running and cycling. Triathlons are multiple-stage competitions
            involving the completion of three continuous and sequential
            endurance disciplines. The most popular among them involves
            swimming, cycling, and running in immediate succession over various
            distances. The participants would pass through two transition points
            to change gears and take up the next sport in quick succession. I
            began to learn swimming in 2016 at the Velachery aquatic complex in
            order to participate in Triathlons. Mr Sundar Master was my trainer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default team_section1;