import React from "react";
import run1 from "./run3.png";
import "./teams_section1.css";

function teams_section5() {
  return (
    <div className="bg-zinc-200" style={{}} id="teams_sec1">
      <div className="para">
        <div className="cycle col-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
          <img src={run1} className="img-fluid object-fit-cover" />
        </div>
        <div className="text col-7 col-md-7 col-xl-7 col-xxl-7 col-lg-7">
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

export default teams_section5;