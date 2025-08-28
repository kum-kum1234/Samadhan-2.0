const express = require("express");
const app = express();

app.use(express.json());

let students = [
  { id: 1, name: "Riya", age: 30 },
  { id: 2, name: "Khushi", age: 22 },
  { id: 3, name: "Bhoomi", age: 10 },
];

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to Students API! 🚀 Use /students to get the list.");
});

// GET all students
app.get("/students", (req, res) => {
  res.json(students);
});

// POST add student
app.post("/students", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    age: req.body.age,
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});

