import React from "react";
import Running1 from "./Running1.jpg";
import "./section1.css";

function Section2() {
  return (
    <div className="bg-red-100 " style={{}}>
      <div className="para">
        
        <div className="text col-6 col-md-6 col-xl-6 col-xxl-6 col-lg-6">
          <div className="glitter pt-3 pb-3 bg-gradient-to-r text-cyan-500 text-blue-500">
          <b style={{fontSize:'130%'}}>Tri2champ Running Training Plan</b>
          </div>
          <p className="pb-3" style={{textAlign:'justify'}}>
            Run Faster and Stronger At Tri2champ, we know that running is a key
            skill for triathlon success. That’s why we have designed a running
            training plan that will help you improve your speed, endurance,
            strength, and efficiency on the run. Our running training plan is
            based on the principles of overload, recovery, and specificity,
            which means that you will gradually increase your running fitness
            and adapt to different terrains and paces. Whether you are a
            beginner or a seasoned pro, our running training plan will help you
            run faster and stronger and become a better triathlete. Join
            Tri2champ today and get ready to run like a champ!
          </p>
        </div>
        <div className="cycle col-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 pr-4">
          <img src={Running1} className="img-fluid object-fit-cover" />
        </div>
      </div>
    </div>
  );
}

export default Section2;
