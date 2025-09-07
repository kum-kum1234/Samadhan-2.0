import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Feed from './pages/Feed';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<PrivateRoute><Feed /></PrivateRoute>} />
          </Routes>
        </main>
      </Router>
    </AuthProvider>
  );
}

export default App;
