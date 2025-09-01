import React, { useState } from "react";

export default function AddStudentForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", age: "", course: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.age || !form.course) return;
    onAdd({ ...form, age: Number(form.age) });
    setForm({ name: "", age: "", course: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/90 backdrop-blur shadow rounded-2xl p-4 grid grid-cols-1 md:grid-cols-4 gap-3"
    >
      <input
        className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-400"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
        required
      />
      <input
        type="number"
        min="1"
        className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-400"
        placeholder="Age"
        value={form.age}
        onChange={(e) => setForm((f) => ({ ...f, age: e.target.value }))}
        required
      />
      <input
        className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-400"
        placeholder="Course"
        value={form.course}
        onChange={(e) => setForm((f) => ({ ...f, course: e.target.value }))}
        required
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-red-400 to-orange-400 text-white font-semibold rounded-xl px-4 py-2 hover:opacity-90 transition"
      >
        ➕ Add
      </button>
    </form>
  );
}
