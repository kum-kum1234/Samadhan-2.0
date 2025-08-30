import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="container">
      
      {/* Counter */}
      <h2>🔢 Counter</h2>
      <p style={{ fontSize: "32px", fontWeight: "bold" }}>{count}</p>
      <div>
        <button className="button-decrement" onClick={() => setCount(count - 1)}>
          -
        </button>
        <button className="button-increment" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>

      {/* Live Text Preview */}
      <h2 style={{ marginTop: "30px" }}>⌨️ Live Text Preview</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Preview: <strong>{text}</strong></p>
      <p>Letters Count: {text.length}</p>
    </div>
  );
}
