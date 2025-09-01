import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let students = [
  { id: 1, name: "Kumkum", age: 19, course: "B.Tech CSE" },
  { id: 2, name: "Meenakshi", age: 20, course: "B.Com" },
  { id: 3, name: "Isha", age: 21, course: "B.Sc" },
  { id: 4, name: "Vedika", age: 22, course: "MBA" },
];

app.get("/api/students", (req, res) => res.json(students));

app.post("/api/students", (req, res) => {
  const newStudent = { id: Date.now(), ...req.body };
  students.push(newStudent);
  res.json(newStudent);
});

app.put("/api/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  students = students.map((s) => (s.id === id ? { ...s, ...req.body, id } : s));
  res.json({ message: "Student updated" });
});

app.delete("/api/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  students = students.filter((s) => s.id !== id);
  res.json({ message: "Student deleted" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
