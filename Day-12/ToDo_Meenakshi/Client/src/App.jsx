import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    setTasks(data);
  };

  // Add new task
  const addTask = async () => {
    if (!title) return alert("Enter task title");
    await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setTitle("");
    fetchTasks();
  };

  // Delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">📋 MySQL Todo App</h1>

      {/* Add Task */}
      <div className="flex gap-2 mb-4">
        <input
          className="p-2 rounded text-black"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter new task"
        />
        <button
          className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <ul className="w-full max-w-md">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between bg-gray-800 p-2 rounded mb-2"
          >
            {task.title}
            <button
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              onClick={() => deleteTask(task.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
