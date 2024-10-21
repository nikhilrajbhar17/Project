import React from "react";
import brideImage from "../Assets/bride.png";
const LandingImage = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src={brideImage}
        alt="background"
        className="w-full h-screen object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-4 bg-black bg-opacity-50">
        {/* Text */}
        <div
          className=" "
          style={{
            fontSize: "48px",
            color: "#C89946",
            width: "326px",
            height: "56px",
            lineHeight: "56.23px",
            fontWeight: "400",
            fontFamily: "droid-serif",
            fontStyle: "normal",
          }}
        >
          BRIDAL LOOK
        </div>
        <div
          className=""
          style={{
            width: "662px",
            height: "63px",
            color: "#C89946",
            lineHeight: "21.09px",
            fontFamily: "roboto",
            fontWeight: "500",
            fontStyle: "normal",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Accumsan proin dictum
          dignissim amet a vulputate ullamcorper nibh. Sodales facilisis nulla
          nibh sed. Volutpat lectus eget vitae at fusce libero. Tincidunt cum at
          ut non nec.
        </div>
        {/* Button */}
        <button
          className="flex justify-center"
          style={{
            width: "123px",
            height: "23px",
            backgroundColor: "#C89946",
            borderRadius: "8px",
          }}
        >
          <p
            style={{
              width: "91px",
              height: "21px",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "21.08px",
              color: "#FFFFFF",
              fontFamily: "droid-serif",
              fontStyle: "normal",
            }}
          >
            Contact Us
          </p>
        </button>
      </div>
    </div>
  );
};

export default LandingImage;
