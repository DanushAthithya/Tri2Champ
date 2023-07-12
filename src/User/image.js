import React from "react";
import bcycle from "../bcycle.jpg";
import "./image.css";

function Image() {
  return (
    <>
      <div className="bg-blue-50" style={{textAlign:'justify'}}>
        <p className="text pr-4" id="image" style={{ paddingTop: "6%" }}>
          A personalized training plan that is tailored to your strengths,
          weaknesses, and objectives A team of certified and experienced coaches
          who will guide you every step of the way Access to state-of-the-art
          facilities and equipment, including a swimming pool, a cycling studio,
          a running track, and a gym
        </p>
        <div className="">
          <img
            src={bcycle}
            alt="Cycle"
            style={{ maxHeight: "10%", maxWidth: "70%" }}
            className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text rounded mx-auto d-block pt-5 pb-5"
          />
          <p className="text pb-10 pr-10" style={{textAlign:'justify'}}>
            A comprehensive nutrition program that will optimize your health and
            performance A supportive and friendly environment that will motivate
            you and keep you accountable A network of sponsors and partners who
            will provide you with opportunities and benefits Tri2champ is more
            than just a training academy. It’s a lifestyle. It’s a family. It’s
            a way to unleash your full potential and become the best version of
            yourself. If you are ready to join Tri2champ and take your triathlon
            career to new heights, contact us today and schedule a free
            consultation. We can’t wait to hear from you and welcome you to our
            academy.
          </p>
        </div>
      </div>
    </>
  );
}

export default Image;
