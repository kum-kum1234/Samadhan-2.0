import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",          // or your custom user
    password: "Kumkum626_4",      // 🔹 put your MySQL password here
    database: "todo_app"
});

db.connect(err => {
    if (err) {
        console.error("❌ Database connection failed:", err);
        return;
    }
    console.log("✅ Connected to MySQL database");

    // Auto create tasks table if not exists
    db.query(
        `CREATE TABLE IF NOT EXISTS tasks (
            id INT AUTO_INCREMENT PRIMARY KEY,
            task VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`,
        (err) => {
            if (err) console.error("❌ Error creating table:", err);
            else console.log("📦 Table 'tasks' ready!");
        }
    );
});

// ✅ Route to get all tasks
app.get("/tasks", (req, res) => {
    db.query("SELECT * FROM tasks ORDER BY id DESC", (err, results) => {
        if (err) {
            console.error("❌ Error fetching tasks:", err);
            res.status(500).json({ error: "Database error" });
        } else {
            res.json(results);
        }
    });
});

// ✅ Route to add a task
app.post("/tasks", (req, res) => {
    const { task } = req.body;
    if (!task) {
        return res.status(400).json({ error: "Task cannot be empty" });
    }

    db.query("INSERT INTO tasks (task) VALUES (?)", [task], (err, result) => {
        if (err) {
            console.error("❌ Error adding task:", err);
            res.status(500).json({ error: "Database error" });
        } else {
            res.json({ id: result.insertId, task });
        }
    });
});

// ✅ Route to delete a task
app.delete("/tasks/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM tasks WHERE id = ?", [id], (err) => {
        if (err) {
            console.error("❌ Error deleting task:", err);
            res.status(500).json({ error: "Database error" });
        } else {
            res.json({ message: "Task deleted successfully" });
        }
    });
});

// ✅ Start server
app.listen(5000, "0.0.0.0", () => {
    console.log("🚀 Server running on port 5000");
});
