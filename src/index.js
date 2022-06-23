import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Text, Circle } from "react-konva";

const App = () => {
  const [text, setText] = useState("");
  const handelDragStart = () => {
    setText("Drag Start");
  };
  const handelDragEnd = () => {
    setText("Drag End");
  };
  return (
    <>
      <div id="buttons">
        <button id="remove1">Remove First Listener</button>
        <button id="remove2">Remove Second Listener</button>
        <button id="removeAll">Remove All Listeners</button>
      </div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text
            text={text}
            x={10}
            y={10}
            fontSize={24}
            fontFamily={"Calibri"}
            fill={"black"}
          />
          <Circle
            x={150}
            y={100}
            radius={70}
            fill={"red"}
            stroke={"black"}
            strokeWidth={4}
          />
        </Layer>
      </Stage>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
