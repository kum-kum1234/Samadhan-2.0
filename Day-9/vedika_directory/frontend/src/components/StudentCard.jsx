import React from "react";

export default function StudentCard({ student, onDelete, onEdit }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition">
      <h3 className="text-xl font-bold text-gray-800">{student.name}</h3>
      <p className="text-gray-600 mt-1">🎂 Age: {student.age}</p>
      <p className="text-gray-600">📚 Course: {student.course}</p>

      <div className="flex gap-2 mt-4">
        <button
          onClick={onEdit}
          className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
