import React, { useState } from 'react';
//import './LoginForm.css'; // Import CSS file for styling

const LoginForm = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();

    // You can perform API call here to authenticate user
    // Example:
    // try {
    //   const response = await fetch('API_ENDPOINT/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ username, password }),
    //   });
    //   const data = await response.json();
    //   console.log(data);
    // } catch (error) {
    //   console.error('Error:', error);
    // }

    // For simplicity, just logging credentials
    console.log('Username:', username);
    console.log('Password:', password);
};

return (
    <div className="login-form-container">
    <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
        />
        </div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        </div>
        <button type="submit">Login</button>
    </form>
    </div>
);
};

export default LoginForm;