import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='hero'>
      <div className="container">
        <div className="row">
          <div className="wlcm col-md-8 col-12 pt-5">
            <h1>Welcome to Careplus</h1>
            <h3>Your Health, Our Priority</h3>
            <p>Experience world-class healthcare with our team of expert doctors and state-of-the-art facilities.</p>
            <p>
              <Link to="/appointment">
                <button type="button" className="btn btn-outline-primary">
                  Schedule an Appointment
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
