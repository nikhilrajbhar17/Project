import React from "react";
import flowerIcon from "../Assets/flowerIcon.svg";
const BeautyThats = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <div
        className="text-center"
        style={{
          fontFamily: "droid-serif",
          fontWeight: "400",
          fontSize: "24px",
          lineHeight: "28.11px",
        }}
      >
        BEAUTY THAT'S ALL YOURS
      </div>
      <div style={{ width: "59.4px", height: "16.8px" }} className="mt-2">
        <img className="object-contain" src={flowerIcon} alt="flower"></img>
      </div>
    </div>
  );
};

export default BeautyThats;
