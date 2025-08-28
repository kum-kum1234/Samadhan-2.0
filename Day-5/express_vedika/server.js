// Step 1: Import express
const express = require("express");
const app = express();
const PORT = 3000;

// Step 2: Dummy student data
const students = [
  { id: 1, name: "vedika", age: 20, course: "Computer Science" },
  { id: 2, name: "kumkum", age: 22, course: "Mechanical Engineering" },
  { id: 3, name: "siddhii", age: 21, course: "Electrical Engineering" },
  { id: 4, name: "meenakshi", age: 23, course: "Civil Engineering" }
];

// Step 3: Route for student list
app.get("/students", (req, res) => {
  res.json(students); // send JSON response
});

// Optional: Root route
app.get("/", (req, res) => {
  res.send("Welcome! Visit /students to see the student list.");
});

// Step 4: Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
