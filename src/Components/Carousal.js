// // src/components/Carousel.js
// import React from "react";
// import Slider from "react-slick";
// import brideImagePath from "../Assets/brideimage.jpg";
// import one from "../Assets/2.jpg";
// import two from "../Assets/3.jpg";

// const Carousel = () => {
//   // Settings for the carousel
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };

//   return (
//     <div className="relative my-0">
//       {/* Static Text Overlay */}
//       <div className="absolute inset-0 flex items-center justify-center text-white text-1xl bg-black bg-opacity-50 z-10">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//       </div>

//       {/* Carousel Slider */}
//       <Slider {...settings}>
//         <div className="flex justify-center">
//           <img
//             src={brideImagePath}
//             alt="Slide 1"
//             className="w-full h-[50vh] object-cover" // Set height to 50% of the viewport height
//           />
//         </div>
//         <div className="flex justify-center">
//           <img
//             src={one}
//             alt="Slide 2"
//             className="w-full h-[50vh] object-cover" // Set height to 50% of the viewport height
//           />
//         </div>
//         <div className="flex justify-center">
//           <img
//             src={two}
//             alt="Slide 3"
//             className="w-full h-[50vh] object-cover" // Set height to 50% of the viewport height
//           />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default Carousel;
