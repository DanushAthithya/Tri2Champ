import React from "react";
import run1 from "../run3.png";
import "./teams_section1.css";

function teams_section5() {
  return (
    <div className="bg-teal-100" style={{}} id="teams_sec1">
      <div className="para">
        <div className="cycle col-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <img src={run1} className="img-fluid object-fit-cover" />
        </div>
        <div className="text col-8 col-md-8 col-xl-8 col-xxl-8 col-lg-8">
          <div className="glitter pt-3 pb-2 bg-gradient-to-r text-cyan-500 text-blue-500">
          <b style={{fontSize:'130%'}}> RUNNING</b>
          </div>
          
          <p className="pb-3 pr-4">
          Seven years back, My friend
            Mr. SudhakarGanesh pursued him to
            sign up for the Porur Anniversary Run
            marathon. I reluctantly agreed for his
            friend’s sake. “at the Beginning stage
            I’m not a professional runner, and I
            didn’t know how to run, that too long
            distance,”.
            In a Whatsapp group of cyclists one
            Mr. Dinesh Pandy announced he is
            going to run slow since the Porur run
            is not a timed event and he is willing
            to teach others how to run in
            marathons. But after
            Mr. Pandy insisted, I couldn’t deny.
            “When the event started, he taught
            me how to run fast. After 5-7km, I got
            little bit slow as legs began to ache but
            I followed him. I saw the u-turn point
            10.5km, I still followed him.
          </p>
        </div>
      </div>
    </div>
  );
}

export default teams_section5;

