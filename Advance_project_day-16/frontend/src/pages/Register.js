import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        alert('Registration successful! Please log in.');
        navigate('/login');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
