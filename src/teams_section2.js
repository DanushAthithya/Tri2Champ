import React from "react";
import swim_2 from "./swim3.png";
import "./teams_section2.css";

function teams_section2() {
  return (
    <div
      className="bg-zinc-250 border-2 border-zinc-800"
    >
      <div className="para">
        <div className="text col-7 col-md-7 col-xl-7 col-xxl-7 col-lg-7">
          <p className="pt-5 pb-5">
          Swimming in Triathlons are tougher since it involves managing half hours to
          1 hours in the sea. There are no lanes or markers unlike indoor swimming so
          the participant has to frequently indulge in ‘sighting’, raise the head to check if
          they are in the correct route. Triathlon involves taking up swimming, cycling
          and running back-to-back and swimming drains your energy before taking up
          the other tasks. I resorted to Youtube videos to learn the tips and tricks in the
          trade. 
          </p>
        </div>
        <div
          className="cycle col-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5 pr-3"
        >
          <img
            src={swim_2}
            className="img-fluid object-fit-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default teams_section2;