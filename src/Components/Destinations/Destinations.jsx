import React, { useEffect, useState } from "react";
import "./Destinations.css";
import { data } from "../../data";

const Destinations = ({ setBackgroundImage }) => {
  useEffect(() => {
    setBackgroundImage(data.destinations[0]["background-desktop"]);
  }, []);

  const [destination, setDestination] = useState(data.destinations[1]);
  const [activeDestination, setActiveDestination] = useState("moon-active");

  return (
    <div className="padding-main destinations-container">
      <p className="tab-title capitalize">
        <span>01</span> Pick your destination
      </p>
      <div className="destinations-body flex space-between">
        <img
          src={destination.images.webp}
          alt="Destination"
          className="destination-image"
        />
        <div className="destinations-content flex-v">
          <div className="flex places space-between">
            <p
              className={`place bluish capitalize moon ${activeDestination}`}
              onClick={() => {
                setDestination(data.destinations[1]);
                setActiveDestination("moon-active");
              }}
            >
              Moon
            </p>
            <p
              className={`place bluish capitalize mars ${activeDestination}`}
              onClick={() => {
                setDestination(data.destinations[2]);
                setActiveDestination("mars-active");
              }}
            >
              Mars
            </p>
            <p
              className={`place bluish capitalize europa ${activeDestination}`}
              onClick={() => {
                setDestination(data.destinations[3]);
                setActiveDestination("europa-active");
              }}
            >
              Europa
            </p>
            <p
              className={`place bluish capitalize titan ${activeDestination}`}
              onClick={() => {
                setDestination(data.destinations[4]);
                setActiveDestination("titan-active");
              }}
            >
              Titan
            </p>
          </div>
          <h1 className="destination-name capitalize">{destination.name}</h1>
          <p className="destination-description bluish">
            {destination.description}
          </p>
          <div className="divider" />
          <div className="flex space-between destination-information">
            <div>
              <p className="capitalize bluish destination-distance">
                Avg. Distance
              </p>
              <p className="capitalize bellefair">{destination.distance}</p>
            </div>
            <div>
              <p className="capitalize bluish destination-travel-time">
                Est. Travel time
              </p>
              <p className="capitalize bellefair">{destination.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
