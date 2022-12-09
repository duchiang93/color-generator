import { useState } from "react";

const useGenerateRandomColor = (isLocked) => {
  //製作16進位隨機顏色色號
  function colorRandom() {
    //宣告chars裝16位數字串
    const chars = "0123456789ABCDEF";
    let hex = "#";
    //產生6個16進位字元組成色號
    for (let i = 0; i < 6; i++) {
      //= "#+隨機產生的6位數" 為色號表示方式
      hex += chars[Math.floor(Math.random() * 16)];
    }
    return hex;
  }

  //宣告array內每個字串的ID
  const num = [0, 1, 2, 3, 4, 5];
  //讓每個字串都有自己的ID才不會有錯
  const [colors, setColor] = useState(
    num.map((n) => ({ name: colorRandom(), id: n }))
  );

  const generateColor = () => {
    const randomColor = [];
    colors.map((n) => randomColor.push(n));
    //產生六個不同顏色
    for (let i = 0; i < 6; i++) {
      if (isLocked[i] === false) randomColor[i].name = colorRandom();
    }

    setColor(randomColor);
  };
  return { colors, generateColor };
};

export default useGenerateRandomColor;
