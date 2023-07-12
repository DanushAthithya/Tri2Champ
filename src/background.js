import React from "react";
import picc from "./bgpic.png";

const Background = () => {
  return (
    <div className="">
      <img src={picc} useMap="map" class="object-fit-cover border rounded" alt="..." />
      <map name="map">
        <area shape="rect" alt="link" coords="0,0,1000,1000" href="https://www.townscript.com/e/Aquafest-140333" />
      </map>
    </div>
  );
};

export default Background;
