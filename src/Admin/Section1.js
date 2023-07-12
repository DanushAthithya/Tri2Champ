import React from "react";
import "./sec1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import cy from "../sss.jpg";

function Section1() {
  return (
    <div className=" bg-blue-100  " id="sec1"  style={{fontSize: "120%"}}>
      <div className="ccc pad text-center col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <img
          src={cy}
          className="my-image   rounded mx-auto d-block img-thumbnail text-center col-8 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5"
        />
      </div>
        <div className="glitter ttt padd pt-2 pb-3 bg-gradient-to-r text-cyan-500 text-blue-500">
       <b style={{fontSize:'130%'}}> Tri2champ Swimming Training Plan </b>
        </div>
        <p className="padd ttt pb-10">
        Master the Water At Tri2champ, we know
        that swimming is a vital skill for triathlon success. That’s why we have
        designed a swimming training plan that will help you improve your
        technique, endurance, speed, and confidence in the water. Our swimming
        training plan is based on the principles of progression, variation, and
        specificity, which means that you will gradually increase your swimming
        fitness and adapt to different conditions and distances.<br/> You will start
        with a technique phase, where you will work on your stroke efficiency
        and skills. Then you will progress to an endurance phase, where you will
        build your aerobic capacity and stamina.  Whether you are a beginner or
        a seasoned pro, our swimming training plan will help you master the
        water and become a faster triathlete. Join Tri2champ today and get ready
        to swim like a champ!
      </p>
    </div>
  );
}

export default Section1;
