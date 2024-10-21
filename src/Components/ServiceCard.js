import React from "react";
import serviceImg from "../Assets/serviceimg.jpeg";
const ServiceCard = () => {
  return (
    <div className="flex-col justify-center">
      <div>
        <img
          src={serviceImg}
          style={{ width: "248.36px", height: "165.9px" }}
          alt="someimage"
        ></img>
      </div>
      <div style={{ width: "240px", height: "76px" }}>
        <div
          style={{
            fontFamily: "Playball",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "22.5px",
          }}
        >
          Bridal wedding makeup
        </div>
        <div
          style={{
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "16.41px",
            color: "#AAAAAA",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Risus aliquam egestas sit leo
          nunc.
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
