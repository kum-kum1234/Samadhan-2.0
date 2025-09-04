import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState(null);

  // Fetch notes
  const fetchNotes = () => {
    axios.get("http://localhost:5000/notes")
      .then(res => setNotes(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Add or Update note
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`http://localhost:5000/notes/${editId}`, { title, content });
      setEditId(null);
    } else {
      await axios.post("http://localhost:5000/notes", { title, content });
    }
    setTitle("");
    setContent("");
    fetchNotes();
  };

  // Edit note
  const handleEdit = (note) => {
    setEditId(note.id);
    setTitle(note.title);
    setContent(note.content);
  };

  // Delete note
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/notes/${id}`);
    fetchNotes();
  };

  return (
    <div>
      <h2>📒 My Notes</h2>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />
        <button type="submit">{editId ? "Update Note" : "Add Note"}</button>
      </form>

      {/* Notes List */}
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <div>
              <strong>{note.title}</strong>
              <p>{note.content}</p>
            </div>
            <div>
              <button onClick={() => handleEdit(note)}>Edit</button>
              <button onClick={() => handleDelete(note.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
