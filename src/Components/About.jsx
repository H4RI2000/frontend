


import React from 'react'
import about from '../assets/images/about.jpg';

function About() {
  return (
    <div>
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6 d-flex justify-content-center">
            <img src={about} className="img-fluid rounded" alt="Healthcare Team" />
          </div>

          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h2 className="fw-bold">About Us</h2>
            <p>Welcome to our healthcare website, your one-stop destination for reliable and comprehensive healthcare information. We are committed to promoting wellness and providing valuable resources to empower you on your health journey.</p>
            <p>Explore our extensive collection of expertly written articles and guides covering a wide range of health topics. From understanding common medical conditions to tips for maintaining a healthy lifestyle, our content is designed to educate, inspire, and support you in making informed choices for your health.</p>
            <p>Discover practical health tips and lifestyle advice to optimize your physical and mental well-being. We believe that small changes can lead to significant improvements in your quality of life, and we're here to guide you on your path to a healthier and happier you.</p>
          </div>



        </div>
      </div>
    </div>
  )
}

export default About
