import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0); // 🔹 Counter state

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white shadow-2xl rounded-2xl p-8 flex flex-col items-center w-[400px]">
        
        {/* Input Box */}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="px-4 py-2 border rounded-lg mb-6 w-72 text-center 
                     text-black bg-white placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Buttons */}
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => setCount((prev) => prev - 1)}
            className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-lg text-lg hover:scale-105 transition"
          >
            -
          </button>
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-lg text-lg hover:scale-105 transition"
          >
            +
          </button>
        </div>

        {/* Counter Value */}
        <p className="text-lg font-bold text-gray-800 mb-4">
          Count: {count}
        </p>

        {/* Output Text */}
        <p className="text-gray-700 mb-2">
          {text || "Type something..."}
        </p>

        {/* Length Info */}
        <p className="text-gray-600 text-sm">
          Length: <span className="font-bold">{text.length}</span> characters
        </p>
      </div>
    </div>
  );
}
