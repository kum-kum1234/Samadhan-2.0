import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import AddStudentForm from "./components/AddStudentForm.jsx";
import StudentList from "./components/StudentList.jsx";
import EditStudentModal from "./components/EditStudentModal.jsx";

const API = "http://localhost:5000/api/students";

export default function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState(null); // the student object being edited

  const fetchStudents = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setStudents(data);
    } catch (e) {
      console.error("Failed to fetch students:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const addStudent = async (payload) => {
    try {
      await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      fetchStudents();
    } catch (e) {
      console.error("Add failed:", e);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await fetch(`${API}/${id}`, { method: "DELETE" });
      fetchStudents();
    } catch (e) {
      console.error("Delete failed:", e);
    }
  };

  const updateStudent = async (payload) => {
    try {
      await fetch(`${API}/${payload.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      setEditing(null);
      fetchStudents();
    } catch (e) {
      console.error("Update failed:", e);
    }
  };

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Loading students…</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-red-700 drop-shadow mb-6">
        🎓 Student Directory
      </h1>

      <SearchBar value={search} onChange={setSearch} />

      <div className="mt-4">
        <AddStudentForm onAdd={addStudent} />
      </div>

      <StudentList
        students={filtered}
        onDelete={deleteStudent}
        onEdit={(student) => setEditing(student)}
      />

      {/* Modal for editing */}
      {editing && (
        <EditStudentModal
          student={editing}
          onClose={() => setEditing(null)}
          onSave={updateStudent}
        />
      )}
    </div>
  );
}
