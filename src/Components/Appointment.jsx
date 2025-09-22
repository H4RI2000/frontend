import React, { useState } from "react";
import axios from "axios";

function Appointment() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "+91 ",
    department: "General Medicine",
    preferred_date: "",
    preferred_time: "9:00 am to 10:30 am",
    additional_requirements: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     const response = await axios.post(
        'https://backend-cs8c.onrender.com/api/appointments/',
        formData
      );
      alert("Appointment booked successfully!");
      console.log(response.data);

      // reset form after success
      setFormData({
        full_name: "",
        email: "",
        phone_number: "+91 ",
        department: "",
        preferred_date: "",
        preferred_time: "",
        additional_requirements: ""
      });
    } catch (error) {
      console.error("Error booking appointment:", error.response?.data || error.message);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: '#f4f4f4' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-12 p-4">
            <div className="shadow-lg p-4">
              <h3 className="text-center mb-4">Book an Appointment</h3>
              
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
                  <label htmlFor="phone_number" className="form-label">Phone Number</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="phone_number" 
                    name="phone_number" 
                    maxLength="14"
                    value={formData.phone_number}
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
                    <option value="General Medicine">General Medicine</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Orthopedics">Orthopedics</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="preferred_date" className="form-label">Preferred Date</label>
                  <input 
                    type="date" 
                    className="form-control" 
                    id="preferred_date" 
                    name="preferred_date" 
                    value={formData.preferred_date}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="preferred_time">Preferred Time</label>
                  <select 
                    className="form-control" 
                    id="preferred_time" 
                    name="preferred_time"
                    value={formData.preferred_time}
                    onChange={handleChange}
                    required
                  >
                    <option value="9:00 am to 10:30 am">9:00 am to 10:30 am</option>
                    <option value="11:00 am to 1:00 pm">11:00 am to 1:00 pm</option>
                    <option value="2:30 pm to 3:30 pm">2:30 pm to 3:30 pm</option>
                    <option value="4:00 pm to 5:00 pm">4:00 pm to 5:00 pm</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="additional_requirements" className="form-label">Additional Requirement</label>
                  <textarea 
                    className="form-control" 
                    id="additional_requirements" 
                    name="additional_requirements" 
                    rows="3"
                    value={formData.additional_requirements}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">Book Appointment</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
