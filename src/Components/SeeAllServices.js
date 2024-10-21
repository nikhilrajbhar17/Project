import React from "react";
import ServiceCard from "./ServiceCard";

const SeeAllServices = () => {
  return (
    <div
      className="flex flex-col justify-center mx-auto"
      style={{ width: "1038.34px", height: "330.9px", marginTop: "10px" }}
    >
      {/* Row of Service Cards */}
      <div
        className="flex justify-between gap-x-2.5"
        style={{ width: "1038.34px", height: "330.9px", marginTop: "50px" }}
      >
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>

      {/* Centered Button */}
      <div className="flex justify-center mt-7">
        <button
          className=" "
          style={{
            width: "152px",
            height: "35px",
            borderRadius: "8px",
            backgroundColor: "#2C041D",
            fontFamily: "droid-serif",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "18.74px",
            alignItems: "center",
            color: "#FFFFFF",
          }}
        >
          See All Services
        </button>
      </div>
    </div>
  );
};

export default SeeAllServices;
