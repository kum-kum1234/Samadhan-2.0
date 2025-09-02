import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="🔍 Search by name…"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full max-w-lg mx-auto block px-4 py-2 rounded-2xl border border-red-300 shadow focus:outline-none focus:ring-2 focus:ring-red-400"
    />
  );
}
