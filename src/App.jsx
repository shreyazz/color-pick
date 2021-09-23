import React, { useState } from "react";
import "./index.css";
import {  getColor } from "./colors";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { HiClipboardCopy } from "react-icons/hi";
export const App = () => {
  const [color, setColor] = useState("#fff");
  const [colorHex] = getColor();
  const bgChange = () => {
    setColor(colorHex);
  };
  return (
    <>
      <div
        style={{
          backgroundColor: color,
        }}
      >
        <button onClick={bgChange}>{color}</button>
        <CopyToClipboard text={color}>
          <HiClipboardCopy
            style={{
              borderRadius: "5px",
              marginLeft: "10px",
              marginTop: "25px",
              width: "55px",
              height: "55px",
              cursor: "pointer",
              border: "2px solid rgb(35, 35, 44)",
            }}
          />
        </CopyToClipboard>
      </div>
    </>
  );
};
