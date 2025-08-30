import { useState } from "react";

export default function MiniTask() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
      {/* Counter */}
      <h2 className="text-xl font-semibold text-center mb-4">Counter</h2>
      <div className="flex items-center justify-center space-x-4 mb-6">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          -
        </button>
        <span className="text-2xl font-bold">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          +
        </button>
      </div>

      {/* Live Text Preview */}
      <h2 className="text-xl font-semibold text-center mb-4">
        Live Text Preview
      </h2>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <p className="text-gray-700 text-center">
        {text ? text : "👀 Start typing to see preview here!"}
      </p>
    </div>
  );
}
