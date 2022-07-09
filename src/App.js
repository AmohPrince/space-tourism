import "./App.css";
import { useState } from "react";
import { data } from "./data";

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
    </div>
  );
}

export default App;
