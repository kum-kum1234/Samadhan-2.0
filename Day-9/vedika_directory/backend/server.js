
import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// In-memory DB
let nextId = 6;
let students = [
  { id: 1, name: "Alice Johnson", age: 20, course: "B.Tech" },
  { id: 2, name: "Bob Smith", age: 22, course: "BCA" },
  { id: 3, name: "Charlie Brown", age: 21, course: "MCA" },
  { id: 4, name: "David Lee", age: 23, course: "B.Sc" },
  { id: 5, name: "Eva Green", age: 19, course: "B.Com" }
];

// GET all
app.get("/api/students", (req, res) => {
  res.json(students);
});

// POST create
app.post("/api/students", (req, res) => {
  const { name, age, course } = req.body || {};
  if (!name || !age || !course) {
    return res.status(400).json({ message: "name, age, course are required" });
  }
  const newStudent = { id: nextId++, name, age: Number(age), course };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT update
app.put("/api/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name, age, course } = req.body || {};
  const idx = students.findIndex(s => s.id === id);
  if (idx === -1) return res.status(404).json({ message: "Student not found" });

  students[idx] = {
    ...students[idx],
    name: name ?? students[idx].name,
    age: age !== undefined ? Number(age) : students[idx].age,
    course: course ?? students[idx].course
  };
  res.json(students[idx]);
});

// DELETE
app.delete("/api/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const before = students.length;
  students = students.filter(s => s.id !== id);
  if (students.length === before) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.json({ message: "Deleted" });
});

app.listen(PORT, () =>
  console.log(`✅ Backend running at http://localhost:${PORT}`)
);
