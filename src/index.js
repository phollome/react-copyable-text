import React from "react";
import ReactDOM from "react-dom";
import CopyableText from "./CopyableText";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>
        Hello CopyableText{" "}
        <span role="img" aria-label=":wave:">
          👋
        </span>
      </h1>
      <p>
        This is some text and{" "}
        <CopyableText style={{ color: "red" }}>this part</CopyableText> is
        copyable!
      </p>
      <input />
      <p>
        Paste here{" "}
        <span role="img" aria-label=":point up:">
          👆
        </span>
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
