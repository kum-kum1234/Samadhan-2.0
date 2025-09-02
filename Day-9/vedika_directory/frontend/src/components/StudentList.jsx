import React from "react";
import StudentCard from "./StudentCard.jsx";

export default function StudentList({ students, onDelete, onEdit }) {
  if (!students.length) {
    return (
      <p className="text-center text-gray-700 mt-8">
        No students match your search.
      </p>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 gap-4 mt-6">
      {students.map((s) => (
        <StudentCard
          key={s.id}
          student={s}
          onDelete={() => onDelete(s.id)}
          onEdit={() => onEdit(s)}
        />
      ))}
    </div>
  );
}
