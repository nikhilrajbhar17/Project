import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousal";
import AboutUs from "./Components/AboutUs";
import LandingImage from "./Components/LandingImage";
import BeautyThats from "./Components/BeautyThats";
import SeeAllServices from "./Components/SeeAllServices";
import ConnectWithUs from "./Components/ConnectWithUs";
import VlogDiv from "./Components/VlogDiv";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Navigation visible on all pages */}
        <Navbar />

        {/* Dynamic content area */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>

        {/* Footer visible on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
