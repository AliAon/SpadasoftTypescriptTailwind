import React, { Fragment } from "react";
import Header from "../common/Header";
import AboutUs from "../components/home/AboutUs";
import Hero from "../components/home/Hero";
import OurPortfolio from "../components/home/OurPortfolio";
import OurServices from "../components/home/OurServices";
import Process from "../components/home/Process";
const Home: React.FC = () => {
  return (
    <Fragment>
      <Header/>
      <Hero />
      <Process/>
      <AboutUs/>
      <OurServices/>
      <OurPortfolio/>
    </Fragment>
  );
};
export default Home;
