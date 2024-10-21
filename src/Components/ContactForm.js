import React from "react";

const ContactForm = () => {
  return (
    <div className=" p-2" style={{ width: "450px", height: "auto" }}>
      <form className="flex flex-col space-y-3">
        {/* Name */}
        <div>
          <input
            type="text"
            id="name"
            style={{ height: "36px", borderRadius: "4px" }}
            className="w-full p-2 border border-gray-300 "
            placeholder="Enter your name"
          />
        </div>

        {/* Email ID */}
        <div>
          <input
            type="email"
            id="email"
            style={{ height: "36px", borderRadius: "4px" }}
            className="w-full p-2 border border-gray-300"
            placeholder="Enter your email"
          />
        </div>

        {/* Phone Number */}
        <div>
          <input
            type="tel"
            id="phone"
            style={{ height: "36px", borderRadius: "4px" }}
            className="w-full p-2 border border-gray-300 "
            placeholder="Enter your phone number"
          />
        </div>

        {/* Service */}
        <div>
          <input
            type="text"
            id="service"
            style={{ height: "36px", borderRadius: "4px" }}
            className="w-full p-2 border border-gray-300 "
            placeholder="Service you are interested in"
          />
        </div>

        {/* Message */}
        <div>
          <textarea
            id="message"
            rows="3"
            style={{ height: "130px", borderRadius: "4px" }}
            className="w-full p-2 border border-gray-300"
            placeholder="Your message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-start">
          <button
            type="submit"
            style={{
              width: "75px",
              height: "37px",
              backgroundColor: "#2C041D",
            }}
            className=" text-white rounded-lg py-[8px] px-[16px] "
          >
            <p
              style={{
                width: "43px",
                height: "21px",
                fontFamily: "droid-serif",
                fontWeight: "400",
              }}
            >
              Send
            </p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
