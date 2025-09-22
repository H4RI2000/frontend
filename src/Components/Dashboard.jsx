import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Base API URL (local or deployed)
  const API_BASE_URL =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_API_BASE_URL_LOCAL
      : import.meta.env.VITE_API_BASE_URL_DEPLOY;

  // Fetch appointments from Django API
  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API_BASE_URL}/api/appointments/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAppointments(res.data);
    } catch (err) {
      console.error(
        "Error fetching appointments:",
        err.response?.data || err.message
      );
      setAppointments([]);
    } finally {
      setLoading(false);
    }
  };

  // Delete appointment
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this appointment?"))
      return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`https://backend-cs8c.onrender.com//api/appointments/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAppointments(appointments.filter((appt) => appt.id !== id));
      alert("Appointment deleted successfully!");
    } catch (err) {
      console.error(
        "Error deleting appointment:",
        err.response?.data || err.message
      );
      alert("Failed to delete appointment.");
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  if (loading) return <p className="text-center mt-5">Loading appointments...</p>;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <h2 className="text-center my-4">Appointments</h2>

          {appointments.length === 0 ? (
            <p className="text-center">No appointments found.</p>
          ) : (
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
                {appointments.map((appt) => (
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
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
