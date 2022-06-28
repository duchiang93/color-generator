import { useState } from "react";

const useGenerateRandomColor = () => {
  function colorRandom() {
    const chars = "0123456789ABCDEF";
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += chars[Math.floor(Math.random() * 16)];
    }
    return hex;
  }
  const num = [1, 2, 3, 4, 5, 6];
  const [colors, setColor] = useState(
    num.map((n) => ({ name: colorRandom(), id: n }))
  );
  const generateColor = () => {
    const randomColor = [];

    for (let i = 1; i < 7; i++) {
      randomColor.push({ name: colorRandom(), id: i });
    }
    setColor(randomColor);
  };
  return { colors, generateColor };
};

export default useGenerateRandomColor;
