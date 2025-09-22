import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    // Use environment variables for API URL
    const API_BASE_URL =
      import.meta.env.MODE === "development"
        ? import.meta.env.VITE_API_BASE_URL_LOCAL
        : import.meta.env.VITE_API_BASE_URL_DEPLOY;

    try {
      const res = await axios.post('https://backend-cs8c.onrender.com/api/login-doctor/', {
        username: formData.email, // Django expects "username"
        password: formData.password,
      });

      localStorage.setItem("token", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      alert("Login successful!");
      navigate("/dashboard"); // redirect after login
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh", backgroundColor: "#f4f4f4" }}>
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Doctor Login</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>

        <div className="text-center mt-3">
          <span>Don’t have an account? </span>
          <Link to="/register-doctor" className="btn btn-outline-secondary btn-sm">Register as Doctor</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
