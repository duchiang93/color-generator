import useGenerateRandomColor from "./components/useGenerateRandomColor";
import "./styles/style.css";
import React, { useState } from "react";
import Icon from "./components/icon";

function App() {
  const { colors, generateColor } = useGenerateRandomColor();
  const [isLocked, setLocked] = useState(false);

  //寫出6個裝顏色的框框
  function Colours() {
    return colors.map((color) => (
      <div
        key={color.id}
        className="colour"
        style={{ backgroundColor: color.name }}
      >
        <button className="lock-toggle" onClick={() => color.isLocked}>
          {console.log(color.isLocked)}
          {color.isLocked && <Icon.Unlock className="svg" />}
          {!color.isLocked && <Icon.Lock className="svg" />}
        </button>
        <input
          type="text"
          className="colour-input"
          //讓value=color.name 色卡改變顏色時才會跟著改變色號
          value={color.name}
          readOnly
        />
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
          {/* 按下button時會執行generateColor */}
          <button className="generator-button" onClick={generateColor}>
            Space
          </button>
          ] to generate a new colour palette.
        </p>

        <h4>Generator</h4>

        {/* 將上方的function引入進來 */}
        <div className="colours">
          <Colours />
        </div>
      </div>
    </div>
  );
}

export default App;
