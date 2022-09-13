import useGenerateRandomColor from "./components/useGenerateRandomColor";
import "./styles/style.css";
import React, { useEffect, useState, useCallback } from "react";
import Icon from "./components/icon";
import Alert from "./components/alert";
import { Animated } from "react-animated-css";

function App() {
  const [isLocked, setLocked] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const { colors, generateColor } = useGenerateRandomColor(isLocked);
  const ToggleLocked = (key) => {
    const copyLocked = isLocked;
    copyLocked[key] = !copyLocked[key];

    setLocked({ ...isLocked, copyLocked });
    console.log(isLocked);
  };

  const [copy, setCopy] = useState({ alert: false, isVisible: false });

  function copyColour(params) {
    navigator.clipboard.writeText(params);
    setCopy({ alert: true, isVisible: true });
    setTimeout(() => {
      setCopy({ alert: true, isVisible: false });
    }, 1000);
    setTimeout(() => {
      setCopy({ alert: false, alert: false });
    }, 1800);
  }

  function Colours() {
    return colors.map((color) => (
      <div
        key={color.id}
        className="colour"
        style={{ backgroundColor: color.name }}
      >
        <button
          className="lock-toggle"
          onClick={() => {
            ToggleLocked(color.id);
          }}
        >
          {!isLocked[color.id] ? (
            <Icon.Unlock className="svg" />
          ) : (
            <Icon.Lock className="svg" />
          )}
        </button>
        <input
          type="text"
          className="colour-input"
          //讓value=color.name 色卡改變顏色時才會跟著改變色號
          value={color.name}
          readOnly
        />
        <button className="copy-hex" onClick={() => copyColour(color.name)}>
          Copy
        </button>
      </div>
    ));
  }

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);

  const detectKeyDown = (e) => {
    if (e.code === "Space") generateColor();
  };

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      ></link>
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
        {copy.alert && (
          <Animated isVisible={copy.isVisible}>
            <Alert />
          </Animated>
        )}
      </div>
    </div>
  );
}

export default App;
