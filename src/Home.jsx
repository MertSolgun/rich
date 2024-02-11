import React from "react";
import Header from "./components/Header";
import Vaves from "./components/Vaves";
import Platforms from "./components/Platform";
import WhyUs from "./components/WhyUs";
import Secret from "./components/Secret";

const Home = () => {
  return (
    <div>
      <Header />
      <Vaves />
      <Platforms />
      <WhyUs />
      <Secret />
    </div>
  );
};

export default Home;
