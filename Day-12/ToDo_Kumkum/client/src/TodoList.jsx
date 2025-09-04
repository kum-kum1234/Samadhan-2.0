import { useState, useEffect } from "react";
import axios from "axios";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // ✅ Fetch tasks
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/tasks");
    setTasks(res.data);
  };

  // ✅ Add task
  const addTask = async () => {
    if (!newTask.trim()) return;
    await axios.post("http://localhost:5000/tasks", { task: newTask });
    setNewTask("");
    fetchTasks();
  };

  // ✅ Delete task
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="w-[500px] bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-yellow-300 mb-6 text-center">🚀 My Todo App</h1>

      <div className="flex mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
          className="flex-1 px-4 py-3 rounded-l-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg"
        />
        <button
          onClick={addTask}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-r-xl font-semibold text-white hover:opacity-90"
        >
          Add
        </button>
      </div>

      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-gray-700 px-4 py-3 rounded-xl shadow-md"
          >
            <span className="text-lg">{task.task}</span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-sm px-3 py-1 bg-red-500 hover:bg-red-600 rounded-lg"
            >
              ❌ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
