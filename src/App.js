import "./App.css";
import { useState } from "react";
import { data } from "./data";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";

function App() {
  const [backgroundImage, setBackgroundImage] = useState(
    data.home["background-desktop"]
  );

  return (
    <div className="App">
      <img
        src={backgroundImage}
        alt="Background image"
        className="background-image"
      />
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
