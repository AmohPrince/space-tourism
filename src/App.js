import "./App.css";
import { useState } from "react";
import { data } from "./data";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Destinations from "./Components/Destinations/Destinations";
import Crew from "./Components/Crew/Crew";
import Technology from "./Components/Technology/Technology";

function App() {
  const [backgroundImage, setBackgroundImage] = useState(
    data.home["background-desktop"]
  );
  const [pageIndex, setPageIndex] = useState(0);
  const array = [
    <Home setBackgroundImage={setBackgroundImage} />,
    <Destinations setBackgroundImage={setBackgroundImage} />,
    <Crew setBackgroundImage={setBackgroundImage} />,
    <Technology setBackgroundImage={setBackgroundImage} />,
  ];

  return (
    <div className="App">
      <img
        src={backgroundImage}
        alt="Background image"
        className="background-image"
      />
      <Navbar setPageIndex={setPageIndex} />
      <main>{array[pageIndex]}</main>
    </div>
  );
}

export default App;
