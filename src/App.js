import useGenerateRandomColor from "./components/useGenerateRandomColor";
import "./styles/style.css";
import React from "react";

function App() {
  const { colors, generateColor } = useGenerateRandomColor();
  function Colours() {
    return colors.map((color) => (
      <div
        key={color.id}
        className="colour"
        style={{ backgroundColor: color.name }}
      >
        <button className="lock-toggle">
          <img src="./Icon/unlock-solid.svg" />
        </button>
        <input type="text" className="colour-input" value="#000000" readOnly />

        <button className="copy-hex">Copy</button>
      </div>
    ));
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Coloors</h1>
        <p>
          Press[
          <button className="generator-button" onClick={generateColor}>
            Space
          </button>
          ] to generate a new colour palette.
        </p>

        <h4>Generator</h4>
        <div className="colours">
          <Colours />
        </div>
      </div>
    </div>
  );
}

export default App;
