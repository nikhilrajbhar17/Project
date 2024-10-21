import React from "react";
import LandingImage from "./LandingImage";
import AboutUs from "./AboutUs";
import BeautyThats from "./BeautyThats";
import SeeAllServices from "./SeeAllServices";
import ConnectWithUs from "./ConnectWithUs";
import VlogDiv from "./VlogDiv";
const Home = () => {
  return (
    <div>
      <LandingImage></LandingImage>
      <AboutUs></AboutUs>
      <BeautyThats></BeautyThats>
      <SeeAllServices></SeeAllServices>
      <ConnectWithUs></ConnectWithUs>
      <VlogDiv></VlogDiv>
    </div>
  );
};

export default Home;
