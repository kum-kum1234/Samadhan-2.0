import React, { useEffect, useState } from "react";

/** Simple modal with a backdrop; closes on X or Cancel */
export default function EditStudentModal({ student, onClose, onSave }) {
  const [form, setForm] = useState(student);

  useEffect(() => {
    setForm(student);
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...form, age: Number(form.age) });
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Modal */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            ✕
          </button>

          <h2 className="text-xl font-semibold mb-4">Edit Student</h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-400"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="Name"
              required
            />
            <input
              type="number"
              min="1"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-400"
              value={form.age}
              onChange={(e) => setForm((f) => ({ ...f, age: e.target.value }))}
              placeholder="Age"
              required
            />
            <input
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-400"
              value={form.course}
              onChange={(e) =>
                setForm((f) => ({ ...f, course: e.target.value }))
              }
              placeholder="Course"
              required
            />

            <div className="flex gap-2 pt-2">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Save
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-300 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
