import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  // Base API URL
  const API_BASE_URL =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_API_BASE_URL_LOCAL
      : import.meta.env.VITE_API_BASE_URL_DEPLOY;

  // Optional: include JWT token if backend requires authentication
  const token = localStorage.getItem("token"); // Make sure you set token after login
  const axiosConfig = token
    ? { headers: { Authorization: `Bearer ${token}` } }
    : {};

  const fetchAppointments = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/appointments/`, axiosConfig);
      setAppointments(res.data);
    } catch (err) {
      console.error("Error fetching appointments:", err.response?.data || err.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      try {
        await axios.delete(`${API_BASE_URL}/api/appointments/${id}/`, axiosConfig);
        setAppointments(appointments.filter((appt) => appt.id !== id));
        alert("Appointment deleted successfully!");
      } catch (err) {
        console.error("Error deleting appointment:", err.response?.data || err.message);
        alert("Failed to delete appointment.");
      }
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-10 text-center">
          <h2 className="p-5">APPOINTMENTS</h2>
          <table className="table table-bordered table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Patient Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Department</th>
                <th>Date</th>
                <th>Time</th>
                <th>Additional Requirement</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length > 0 ? (
                appointments.map((appt) => (
                  <tr key={appt.id}>
                    <td>{appt.full_name}</td>
                    <td>{appt.email}</td>
                    <td>{appt.phone_number}</td>
                    <td>{appt.department}</td>
                    <td>{new Date(appt.preferred_date).toLocaleDateString()}</td>
                    <td>{appt.preferred_time}</td>
                    <td>{appt.additional_requirements}</td>
                    <td>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleDelete(appt.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">No appointments found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
