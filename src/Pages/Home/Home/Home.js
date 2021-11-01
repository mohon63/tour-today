import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import News from "../News/News";
import TourPackage from "../TourPackage/TourPackage";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TourPackage></TourPackage>
      <About></About>
      <News></News>
    </div>
  );
};

export default Home;
