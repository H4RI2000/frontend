import React from 'react';
import Doctorimg from '../assets/images/doctor.png';
import Emergencyimg from '../assets/images/hospital.png';
import Healthimg from '../assets/images/health.png';



function Feature() {
  return (
    <div className="feature-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="feature-icon">
              <img src={Doctorimg} alt="Expert Doctors" height={'80px'} />
            </div>
            <h5>Expert Doctors</h5>
            <p>Trust in the hands of skilled professionals dedicated to your well-being.</p>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="feature-icon">
              <img src={Emergencyimg} alt="Emergency Care" height={'80px'} />
            </div>
            <h5>Emergency Care</h5>
            <p>Rapid online emergency care, your safety is our priority.</p>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="feature-icon">
              <img src={Healthimg} alt="24/7 Full Support" height={'80px'} />
            </div>
            <h5>24/7 Full Support</h5>
            <p>Round-the-clock support, your health never takes a break.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
