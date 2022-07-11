import React, { useEffect, useState } from "react";
import "./Technology.css";
import { data } from "../../data";

const Technology = ({ setBackgroundImage }) => {
  const [technology, setTechnology] = useState(data.technology[1]);

  useEffect(() => {
    setBackgroundImage(data.technology[0]["background-desktop"]);
  }, []);
  return (
    <div className="technology-container">
      <p className="tab-title capitalize">
        <span>03</span> space launch 101
      </p>
      <div className="technology-body flex">
        <div className="numbers flex-v">
          <div
            className={`background-circle cursor launch ${technology.name}`}
            onClick={() => {
              setTechnology(data.technology[1]);
            }}
          >
            <h4>1</h4>
          </div>
          <div
            className={`background-circle cursor port  ${technology.name}`}
            onClick={() => {
              setTechnology(data.technology[2]);
            }}
          >
            <h4>2</h4>
          </div>
          <div
            className={`background-circle cursor capsule space-capsule  ${technology.name}`}
            onClick={() => {
              setTechnology(data.technology[3]);
            }}
          >
            <h4>3</h4>
          </div>
        </div>
        <div className="technology-about flex-v">
          <div>
            <p className="terminology bluish capitalize">The terminology...</p>
            <h3 className="technology-name capitalize">{technology.name}</h3>
          </div>
          <p className="technology-description bluish">
            {technology.description}
          </p>
        </div>
        <img
          src={technology.images.portrait}
          alt="Technology"
          className="technology-image"
        />
      </div>
    </div>
  );
};

export default Technology;
