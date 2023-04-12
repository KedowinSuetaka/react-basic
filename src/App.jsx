import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [fasceShowFlg, setFaceShowFlg] = useState(false);
  const onClickCountup = () => {
    setNum(num + 1);
  };
  const onClickSwichShowFlg = () => {
    setFaceShowFlg(!fasceShowFlg);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        fasceShowFlg || setFaceShowFlg(true);
      } else {
        fasceShowFlg && setFaceShowFlg(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountup}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwichShowFlg}>on/off</button>
      <p>{num}</p>
      {fasceShowFlg && <p>(^^)/</p>}
    </>
  );
};

export default App;
