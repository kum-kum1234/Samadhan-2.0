import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", age: "", grade: "" });
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", age: "", grade: "" });

  // Fetch students
  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:5000/students");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Handle add form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle edit form change
  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  // Add student
  const addStudent = async () => {
    if (!form.name || !form.age || !form.grade) return;
    await axios.post("http://localhost:5000/students", form);
    setForm({ name: "", age: "", grade: "" });
    fetchStudents();
  };

  // Delete student
  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:5000/students/${id}`);
    fetchStudents();
  };

  // Start editing
  const startEdit = (student) => {
    setEditingId(student._id);
    setEditForm({ name: student.name, age: student.age, grade: student.grade });
  };

  // Save edit
  const saveEdit = async () => {
    await axios.put(`http://localhost:5000/students/${editingId}`, editForm);
    setEditingId(null);
    setEditForm({ name: "", age: "", grade: "" });
    fetchStudents();
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({ name: "", age: "", grade: "" });
  };

  return (
    <div className="app-container">
      <h1>🎓 Student CRUD</h1>

      {/* Add Form */}
      <div style={{ marginBottom: "20px" }}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
        />
        <input
          name="grade"
          placeholder="Grade"
          value={form.grade}
          onChange={handleChange}
        />
        <button onClick={addStudent}>➕ Add</button>
      </div>

      {/* Student List */}
      <ul>
        {students.map((s) => (
          <li key={s._id}>
            {editingId === s._id ? (
              <>
                {/* Edit form inline */}
                <input
                  name="name"
                  value={editForm.name}
                  onChange={handleEditChange}
                />
                <input
                  name="age"
                  value={editForm.age}
                  onChange={handleEditChange}
                />
                <input
                  name="grade"
                  value={editForm.grade}
                  onChange={handleEditChange}
                />
                <button onClick={saveEdit}>💾 Save</button>
                <button onClick={cancelEdit}>❌ Cancel</button>
              </>
            ) : (
              <>
                {s.name} ({s.age}) - {s.grade}
                <button className="edit" onClick={() => startEdit(s)}>
                  ✏️ Edit
                </button>
                <button className="delete" onClick={() => deleteStudent(s._id)}>
                  ❌ Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
