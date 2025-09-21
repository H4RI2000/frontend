import React from "react";
import Surgery from '../assets/images/surgery.png';
import Cardiology from '../assets/images/cardiology.png';
import Pediatrics from '../assets/images/pediatrics.png';
import Neurology from '../assets/images/neurology.png';
import Pulmonology from '../assets/images/pulmonology.png';
import Orthopedics from '../assets/images/orthopedics.png';




function Departments() {
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="co-md-12 text-center p-5 ">
            <h1 style={{ color: 'rgb(16, 7, 99)', fontSize: '50px' }}>Departments</h1>
            <p> The hospital is divided into different departments. Each department has its own staff and facilities. The main departments of the hospital are:</p>
          </div>
        </div>
      </div>
      <div class="card-group p-4">
        <div class="card ">
          <img src={Surgery} class="card-img-top " alt="..." />
          <div class="card-body">
            <h5 class="card-title">General Surgery</h5>
            <h5 className="fw-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nihil quos impedit voluptatem expedita non laborum animi aliquam ut,</h5>
          </div>
        </div>
        <div class="card">
          <img src={Cardiology} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Cardiology</h5>
            <h5 className="fw-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nihil quos impedit voluptatem expedita non laborum animi aliquam ut, </h5>
          </div>
        </div>
        <div class="card">
          <img src={Pediatrics} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Pediatrics</h5>
            <h5 className="fw-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nihil quos impedit voluptatem expedita non laborum animi aliquam ut, </h5>
          </div>
        </div>

      </div>
      <div class="card-group">
        <div class="card">
          <img src={Neurology} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Neurology</h5>
            <h5 className="fw-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nihil quos impedit voluptatem expedita non laborum animi aliquam ut,.</h5>
          </div>
        </div>
        <div class="card">
          <img src={Pulmonology} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Pulmonology</h5>
            <h5 className="fw-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nihil quos impedit voluptatem expedita non laborum animi aliquam ut,</h5>
          </div>
        </div>
        <div class="card">
          <img src={Orthopedics} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Orthopedics</h5>
            <h5 className="fw-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nihil quos impedit voluptatem expedita non laborum animi aliquam ut,</h5>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Departments
