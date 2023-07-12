import React from "react";
import cycling3 from "./cycling3.jpg";
import "./sec0.css";

function Section0() {
  return (
    <div className="bg-teal-100" style={{}} id="sec0">
      <div className="para">
        <div className="cycle col-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
          <img src={cycling3} className="img-fluid object-fit-cover" />
        </div>
        <div className="text col-7 col-md-7 col-xl-7 col-xxl-7 col-lg-7">
          <div className="glitter pt-3 pb-3 bg-gradient-to-r text-cyan-500 text-blue-500">
          <b style={{fontSize:'130%'}}>Tri2champ Cycling Training Plan</b>
          </div>
          <p className="pb-3 pr-4">
            Boost Your Bike Performance At Tri2champ, we know that cycling is a
            crucial component of triathlon success. That’s why we have designed
            a cycling training plan that will help you improve your power,
            endurance, speed, and efficiency on the bike. Our cycling training
            plan is based on the principles of periodization, which means that
            you will cycle through different phases of training intensity and
            volume to optimize your fitness and avoid burnout. You will have
            access to our online platform where you can track your progress, get
            feedback from our coaches, and interact with other triathletes. You
            will also have the opportunity to join our group rides, where you
            can enjoy the camaraderie and support of your fellow cyclists.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section0;
