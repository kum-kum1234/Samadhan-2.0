import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
        }

        body {
          background: linear-gradient(135deg, #89f7fe, #66a6ff);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card {
          background: #ffffff;
          border-radius: 16px;
          padding: 30px;
          width: 420px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
          text-align: center;
          color: #1f2937;
        }

        .card h1 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #111827;
        }

        .card h2 {
          font-size: 18px;
          margin-bottom: 6px;
          color: #374151;
        }

        .card h3 {
          font-size: 16px;
          margin: 10px 0;
          color: #2563eb;
        }

        .card p {
          color: #4b5563;
          font-size: 14px;
        }

        .input-row {
          display: flex;
          margin: 20px 0;
          gap: 10px;
        }

        .input-row input {
          flex: 1;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
        }

        .input-row button {
          background: #2563eb;
          color: white;
          border: none;
          padding: 10px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
        }

        .task-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 8px 0;
          padding: 6px 10px;
          border-radius: 6px;
          background: #f9fafb;
        }

        .task-text {
          cursor: pointer;
        }

        .task-text.completed {
          text-decoration: line-through;
          color: #9ca3af;
        }

        .delete-btn {
          background: #ef4444;
          color: white;
          border: none;
          padding: 4px 8px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 12px;
        }

        .footer {
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          color: #6b7280;
          font-size: 14px;
        }

        .empty {
          margin-top: 20px;
          color: #9ca3af;
        }
      `}</style>

      <div className="card">
        <h1>📅 Day 8</h1>
        <h2>Lists & Events</h2>
        <h3>🎯 Mini Task</h3>
        <p>To-Do List (local state only)</p>

        <div className="input-row">
          <input
            type="text"
            value={input}
            placeholder="Add a new todo item..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTask}>+ Add Task</button>
        </div>

        {tasks.length === 0 ? (
          <p className="empty">📄 No tasks yet <br /> Add your first todo item to get started!</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {tasks.map((task, index) => (
              <li key={index} className="task-item">
                <span
                  onClick={() => toggleTask(index)}
                  className={`task-text ${task.completed ? "completed" : ""}`}
                >
                  {task.text}
                </span>
                {task.completed && (
                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}

        <div className="footer">
          <span>{tasks.length} tasks total</span>
          <span>{tasks.filter((t) => t.completed).length} completed</span>
        </div>
      </div>
    </>
  );
}

export default TodoApp;
