import React from "react";
import VlogImage from "../Assets/vlogImage.png";
const VlogDiv = () => {
  return (
    <div
      style={{
        display: "flex",
        // overflow: "hidden",
        marginTop: "20px",

        height: "120px",
        columnGap: "16px",
        width: "1280px", // Set a specific width for the parent container
        position: "relative", // Positioning for the overflow effect
      }}
    >
      <div
        style={{
          flexShrink: 0,
          marginRight: "10px",
          width: "200px",
          height: "120px",
          marginLeft: "10px",
          border: "0.4px",
        }}
      >
        <img src={VlogImage} alt="guhih" style={{ width: "100%" }} />
      </div>
      <div
        style={{
          flexShrink: 0,
          width: "200px",
          height: "120px",
          marginRight: "10px",
        }}
      >
        <img src={VlogImage} alt="Image 2" style={{ width: "100%" }} />
      </div>
      <div
        style={{
          flexShrink: 0,
          width: "200px",
          height: "120px",
          marginRight: "10px",
        }}
      >
        <img src={VlogImage} alt="Image 3" style={{ width: "100%" }} />
      </div>
      <div
        style={{
          flexShrink: 0,
          width: "200px",
          height: "120px",
          marginRight: "10px",
        }}
      >
        <img src={VlogImage} alt="Image 4" style={{ width: "100%" }} />
      </div>
      <div
        style={{
          flexShrink: 0,
          width: "200px",
          height: "120px",
          marginRight: "10px",
        }}
      >
        <img src={VlogImage} alt="Image 5" style={{ width: "100%" }} />
      </div>
      <div style={{ flexShrink: 0, width: "200px", height: "120px" }}>
        <img src={VlogImage} alt="Image 6" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default VlogDiv;
