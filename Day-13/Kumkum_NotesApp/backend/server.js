import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",      
  password: "Kumkum626_4",  
  database: "notes_app"
});

// ✅ Get all notes
app.get("/notes", (req, res) => {
  const sql = "SELECT * FROM notes ORDER BY created_at DESC";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// ✅ Add new note
app.post("/notes", (req, res) => {
  const { title, content } = req.body;
  const sql = "INSERT INTO notes (title, content) VALUES (?, ?)";
  db.query(sql, [title, content], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId, title, content });
  });
});

// ✅ Update note
app.put("/notes/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const sql = "UPDATE notes SET title=?, content=? WHERE id=?";
  db.query(sql, [title, content, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id, title, content });
  });
});

// ✅ Delete note
app.delete("/notes/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM notes WHERE id=?";
  db.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Note deleted", id });
  });
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
