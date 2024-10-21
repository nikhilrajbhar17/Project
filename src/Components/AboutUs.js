import React from "react";

const AboutUs = () => {
  const colorhex = "#D9D9D9";
  return (
    <div className="flex-col mt-[2%] mb-[5%]" style={{ color: colorhex }}>
      <div>
        <div
          className="flex justify-center italic"
          style={{
            fontFamily: "Playball",
            lineHeight: "30px",
            color: "#2C041D",
          }}
        >
          making you look and feel your best.
        </div>
        <div
          className="flex justify-center font-semibold mt-1.5 mb-1.5"
          style={{
            fontFamily: "droid-serif",
            lineHeight: "28.11px",
            color: "#2C041D",
          }}
        >
          ABOUT US
        </div>
        <div className="flex justify-center mt-1.5 mb-1.5" style={{}}>
          <img src="#" alt="flower" flex justify-center></img>
        </div>
      </div>
      <div
        className="flex justify-center  mx-auto"
        style={{ width: "1038px", height: "76px" }}
      >
        {/* Added mx-auto for centering */}
        <p
          className="text-center"
          style={{ color: "#2C041D", lineHeight: "18.75px" }}
        >
          {/* Center text within the paragraph */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="flex justify-center mt-1.5 mb-1.5">
        <button
          className="text-gray-500 font-thin border border-gray-700  rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out mt-1"
          style={{ width: "90px", height: "28px" }}
        >
          <p
            style={{
              fontSize: "14px",
              fontFamily: "droid-serif",
              fontWeight: "400",
              lineHeight: "16px",
            }}
          >
            Read more
          </p>
        </button>
      </div>
      <div
        className="flex justify-between pt-[10px] mx-auto mt-[3%]"
        style={{ width: "1038px", height: "380px" }}
      >
        {/* Left child div */}
        <div
          className="flex flex-col items-center space-y-4 my-[10px]"
          style={{ width: "453px", height: "351.8px", gap: "17px" }}
        >
          {/* First section */}
          <div
            className="flex flex-col items-center justify-center"
            style={{ width: "246px", height: "128.8px", gap: "10px" }}
          >
            <div className="mx-auto text-center">
              <p
                style={{
                  fontFamily: "Playball",
                  color: "#2C041D",
                  fontWeight: "400",
                  fontSize: "24px",
                }}
              >
                Introducing
              </p>
            </div>
            <div
              className="text-center font-semibold"
              style={{
                fontFamily: "droid-serif",
                fontWeight: "400",
                fontSize: "24px",
                lineHeight: "28.11px",
                width: "246px",
                height: "28px",
                color: "#2C041D",
              }}
            >
              THE BEAUTY EXPERT
            </div>
            <div
              className="text-center"
              style={{
                width: "56px",
                height: "30px",
                fontFamily: "Playball",
                fontWeight: "400",
                color: "#2C041D",
              }}
            >
              simna
            </div>
            <div>
              <img src="" alt="uhhh" className="mx-auto" />
            </div>
          </div>

          {/* Second section */}
          <div
            className="flex flex-col items-center justify-center"
            style={{ width: "453px", height: "206px" }}
          >
            <div
              className="text-center"
              style={{
                width: "453px",
                height: "93px",
                gap: "10px",
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "18.75px",
                color: "#000000",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Risus aliquam egestas sit
              leo nunc. Sed cursus pulvinar amet et non in tellus. Odio luctus
              elit id egestas. Elementum quis vulputate id tortor neque erat
              egestas accumsan sollicitudin. Duis et ac arcu netus. Nibh donec
              magna convallis tristique.{" "}
            </div>
            <div
              className="text-center mt-1"
              style={{
                width: "453px",
                height: "95px",
                fontFamily: "Roboto",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "18.75px",
                gap: "10px",
                color: "#000000",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Risus aliquam egestas sit
              leo nunc. Sed cursus pulvinar amet et non in tellus. Odio luctus
              elit id egestas. Duis et ac arcu netus. Nibh donec magna convallis
              tristique. Duis purus elit et nascetur tortor sem scelerisque.
              Scelerisque pellentesque ac etiam.
            </div>
          </div>
        </div>

        {/* Right child div */}
        <div
          className="my-[10px]"
          style={{
            width: "390px",
            height: "351.8px",
            backgroundColor: "#F0F6FB",
          }}
        >
          {/* <img src="#" alt="someimage" className="w-full h-auto" /> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
