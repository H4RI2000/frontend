import React from 'react'
import Choose from '../assets/images/choose-us.jpg';
import Care from '../assets/images/care.png';
import Ambulance from '../assets/images/ambulace.png';
import Team from '../assets/images/team.png';

function WhyUs() {
  return (
    <div>
      <div className="container my-5 pt-5">
        <div className="row align-items-center">

          <div className="col-md-6">
            <h2 className="fw-bold">Why Choose Us</h2>
            <p className="fw-light">
              With a steadfast commitment to your well-being, our team of highly trained healthcare professionals ensures that you receive nothing short of exceptional patient experiences.
            </p>

            <div className="d-flex align-items-start mb-3">
              <div className="icon-box me-3">
                <img src={Care} alt="Icon" height={'40px'} className='m-2' />
              </div>
              <div>
                <h5 className="fw-bold">Intensive Care</h5>
                <p className="fw-light">Our Intensive Care Unit is equipped with advanced technology and staffed by a team of professionals.</p>
              </div>
            </div>

            <div className="d-flex align-items-start mb-3">
              <div className="icon-box me-3">
                <img src={Ambulance} alt="Ambulance" height={'40px'} className='m-2' />
              </div>
              <div>
                <h5 className="fw-bold">Free Ambulance Car</h5>
                <p className="fw-light">A compassionate initiative to prioritize your health and well-being without any financial burden.</p>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <div className="icon-box me-3">
                <img src={Team} alt="Team" height={'40px'} className='m-2' />
              </div>
              <div>
                <h5 className="fw-bold">Medical and Surgical</h5>
                <p className="fw-light">Our Medical and Surgical services offer advanced healthcare solutions to address medical needs.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <img src={Choose} className="img-fluid rounded" alt="Doctor" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
