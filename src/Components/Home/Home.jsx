import React, { useEffect } from "react";
import "./Home.css";
import { data } from "../../data";

const Home = ({ setBackgroundImage }) => {
  useEffect(() => {
    setBackgroundImage(data.home["background-desktop"]);
  }, []);
  return (
    <div className="flex space-between home padding-main">
      <div className="body-right">
        <p className="capitalize text-a">SO, YOU WANT TO TRAVEL TO </p>
        <h1 className="space">SPACE</h1>
        <p className="text-b">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="body-left">
        <div className="circle">
          <p className="explore bellefair">EXPLORE</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
