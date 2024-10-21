import React from "react";
import logo from "../Assets/logo.png";
const footer = () => {
  return (
    <div
      className="mt-[10vh] flex flex-col justify-between content-center"
      style={{ width: "100vw", height: "308px", backgroundColor: "#2C041D" }}
    >
      <div
        className="flex flex-row ml-[10vw] mr-[5vw] mt-[5vh]"
        style={{ width: "1104px", height: "226px", backgroundColor: "#2C041D" }}
      >
        <div
          className="flex flex-col  "
          style={{ width: "289px", height: "226px" }}
        >
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="something"
              className="h-12 w-auto rounded-full "
            />
          </div>
          <div
            style={{
              width: "289px",
              height: "112px",
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "16.41px",
              color: "#FFFFFF",
              marginTop: "5vh",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Risus aliquam egestas sit
            leo nunc. Sed cursus pulvinar amet et non in tellus. Odio luctus
            elit id egestas. Elementum quis vulputate id tortor neque erat
            egestas accumsan sollicitudin. Duis et ac arcu netus. Nibh donec
            magna convallis tristique.
          </div>
        </div>
        <div
          className="flex flex-row justify-between ml-[140px] mr-[15px]"
          style={{
            width: "703px",
            height: "190px",
            rowGap: "43px",
            fontFamily: "Roboto",
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "20px",
          }}
        >
          <div
            className="flex flex-col text-white mr-[43px]"
            style={{ width: "60px" }}
          >
            <p style={{ marginBottom: "10px" }}>Home</p>
            <p style={{ marginBottom: "10px" }}>Service</p>
            <p style={{ marginBottom: "10px" }}>About Us</p>
            <p style={{ marginBottom: "10px" }}>FAQ</p>
            <p style={{ marginBottom: "10px" }}>Contact us</p>
            <p>Gallery</p> {/* No margin needed on the last item */}
          </div>

          <div
            className="flex flex-col text-white mr-[43px] "
            style={{ width: "80px" }}
          >
            <p style={{ marginBottom: "10px" }}>Home</p>
            <p style={{ marginBottom: "10px" }}>Service</p>
            <p style={{ marginBottom: "10px" }}>About Us</p>
            <p>FAQ</p>
          </div>
          <div
            className="flex flex-col text-white"
            style={{
              width: "283px",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "droid-serif",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "18px",
                  marginBottom: "10px",
                }}
              >
                Visit Us
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Suspendisse pellentesque
                lectus.
              </p>
            </div>
            <div className="mt-12">
              <p
                style={{
                  fontFamily: "droid-serif",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "18px",
                  marginBottom: "10px",
                }}
              >
                Contact Us
              </p>
              <p>+91 1234567890</p>
              <p>contact@makeupstudio.com</p>
            </div>
          </div>
        </div>
      </div>
      <p
        className="mx-auto text-white"
        style={{
          fontFamily: "Roboto",
          fontWeight: "400",
          fontSize: "12px",
          lineHeight: "20px",
          //   marginBottom: "-5px",
        }}
      >
        © 2024 Our Makeup Studio. All rights reserved.
      </p>
    </div>
  );
};

export default footer;
