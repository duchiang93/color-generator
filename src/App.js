import useGenerateRandomColor from "./components/useGenerateRandomColor";
import "./styles/style.css";

function App() {
  const { color, generateColor } = useGenerateRandomColor();
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
          <div className="colour">
            <button className="lock-toggle">
              <img src="./Icon/unlock-solid.svg" />
            </button>
            <input
              type="text"
              className="colour-input"
              value="#000000"
              readOnly
            />

            <button className="copy-hex">Copy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
