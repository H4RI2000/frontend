import React, { useState } from "react";
import axios from "axios";

const DoctorRegister = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    department: "",
    secret_key: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check secret key
    if (formData.secret_key !== "7408") {
      alert("Invalid secret key!");
      return;
    }

    // Use environment variables for API URL
    const API_BASE_URL =
      import.meta.env.MODE === "development"
        ? import.meta.env.VITE_API_BASE_URL_LOCAL
        : import.meta.env.VITE_API_BASE_URL_DEPLOY;

    try {
      const response = await axios.post(
        `https://backend-cs8c.onrender.com/api/register-doctor/`,
        formData
      );
      alert("Doctor registered successfully!");
      console.log(response.data);

      // Reset form
      setFormData({
        full_name: "",
        email: "",
        password: "",
        department: "",
        secret_key: ""
      });
    } catch (error) {
      console.error("Error registering doctor:", error.response?.data || error.message);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "#f4f4f4" }}>
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Doctor Registration</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="full_name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="department" className="form-label">Department</label>
            <select
              className="form-control"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              <option value="General Medicine">General Medicine</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Orthopedics">Orthopedics</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="secret_key" className="form-label">Secret Key</label>
            <input
              type="password"
              className="form-control"
              id="secret_key"
              name="secret_key"
              value={formData.secret_key}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  );
};

export default DoctorRegister;
