import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/students";

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ id: "", name: "", age: "", course: "" });
  const [isEditing, setIsEditing] = useState(false);

  // Fetch all students
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await axios.get(API);
    setStudents(res.data);
  };

  // Add new student
  const addStudent = async () => {
    await axios.post(API, { name: form.name, age: form.age, course: form.course });
    setForm({ id: "", name: "", age: "", course: "" });
    fetchStudents();
  };

  // Delete student
  const deleteStudent = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchStudents();
  };

  // Edit student
  const editStudent = (student) => {
    setForm(student);
    setIsEditing(true);
  };

  // Update student
  const updateStudent = async () => {
    await axios.put(`${API}/${form.id}`, form);
    setForm({ id: "", name: "", age: "", course: "" });
    setIsEditing(false);
    fetchStudents();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🎓 Student Directory</h1>

      {/* Form */}
      <div className="mb-6 space-y-2">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Age"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Course"
          value={form.course}
          onChange={(e) => setForm({ ...form, course: e.target.value })}
          className="border p-2 rounded w-full"
        />

        {isEditing ? (
          <button
            onClick={updateStudent}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Update Student
          </button>
        ) : (
          <button
            onClick={addStudent}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Student
          </button>
        )}
      </div>

      {/* Table */}
      <table className="border w-full text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-3 py-2">ID</th>
            <th className="border px-3 py-2">Name</th>
            <th className="border px-3 py-2">Age</th>
            <th className="border px-3 py-2">Course</th>
            <th className="border px-3 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td className="border px-3 py-2">{s.id}</td>
              <td className="border px-3 py-2">{s.name}</td>
              <td className="border px-3 py-2">{s.age}</td>
              <td className="border px-3 py-2">{s.course}</td>
              <td className="border px-3 py-2 space-x-2">
                <button
                  onClick={() => editStudent(s)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteStudent(s.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
