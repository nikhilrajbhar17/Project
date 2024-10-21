import React from "react";
import ContactForm from "./ContactForm";
import phoneIcon from "../Assets/phoneIcon.svg";
import mailIcon from "../Assets/mailIcon.svg";
import locationIcon from "../Assets/locationIcon.svg";
import mapImage from "../Assets/mapImage.png";
import flowerIcon from "../Assets/flowerIcon.svg";

const ConnectWithUs = () => {
  return (
    <div
      className="mx-auto flex-col justify-center"
      style={{ width: "1046px", height: "491.6px", gap: "24px" }}
    >
      <div
        className="flex flex-col items-center justify-center mx-auto mt-[5%]"
        style={{ width: "1041px", height: "89.9px" }}
      >
        <div
          style={{
            height: "61px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="flex"
        >
          <div
            style={{
              height: "28px",
              fontFamily: "droid-serif",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "28.11px",
            }}
          >
            CONNECT WITH US
          </div>
          <div
            style={{
              fontFamily: "Playball",
              fontWeight: "400",
              lineHeight: "25px",
              fontSize: "20px",
              color: "#2C041D",
              // Space between the two divs
            }}
          >
            Send us a message
          </div>
        </div>

        <div style={{ width: "59.4px", height: "16.8px" }}>
          <img className="object-contain" src={flowerIcon} alt="flower"></img>
        </div>
      </div>
      <div
        style={{ width: "1041px", height: "377.8px", gap: "100px" }}
        className="flex flex-row"
      >
        <div style={{ width: "450px", height: "377px" }}>
          <ContactForm></ContactForm>
        </div>
        <div
          style={{
            height: "377.8px",
            width: "490px",
            gap: "10px",
            fontFamily: "droid-serif",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "21.8px",
            color: "#2C041D",
          }}
        >
          <div className="text-lg font-bold mb-4">Reach Us At</div>

          {/* Telephone Section */}
          <div
            className="flex items-center space-x-3 my-[8px]"
            style={{ gap: "5.2px" }}
          >
            <img
              src={phoneIcon}
              alt="Phone Icon"
              className=" object-contain" // Ensure the image fits within the given dimensions
            />
            <span
              className=""
              style={{
                fontFamily: "droid-serif",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "18.74px",
                color: "#2C041D",
              }}
            >
              Contact Us: +91 0987654321
            </span>
          </div>

          {/* Email Section */}
          <div
            className="flex items-center space-x-3 "
            style={{ gap: "5.2px" }}
          >
            <img
              src={mailIcon}
              alt="Mail Icon"
              className="w-4 h-4 object-contain" // Adjusted the size of the mail icon
            />
            <span
              className=""
              style={{
                fontFamily: "droid-serif",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "18.74px",
                color: "#2C041D",
              }}
            >
              Email Id: www.ourmakeupstudio.com
            </span>
          </div>

          {/* Location Section */}
          <div
            className="flex items-center space-x-3 "
            style={{ gap: "5.2px" }}
          >
            <img
              src={locationIcon}
              alt="Location Icon"
              className=" object-contain" // Ensure proper scaling
            />
            <span
              className="my-[8px]"
              style={{
                fontFamily: "droid-serif",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "18.74px",
                color: "#2C041D",
              }}
            >
              Address: Lorem ipsum dolor sit amet consectetur.
            </span>
          </div>
          <div
            style={{ width: "490px", height: "237px" }}
            className="mt-[13px]"
          >
            <img
              src={mapImage}
              alt="map"
              style={{ width: "490px", height: "237px" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
