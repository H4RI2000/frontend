import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="footer-sec text-light pt-5">
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-md-4">
              <h3 className="fw-bold">CARE+</h3>
              <p className="pt-2">Careplus, India</p>
            </div>

            <div className="col-12 col-md-4 mx-auto">
              <h4>Menu</h4>
              <ul className="list-unstyled">
                <li className="menu-item">
                  <Link className="menu-link" to="/">Home</Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" to="/about">About</Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" to="/departments">Departments</Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" to="/login">Doctor Login</Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" to="/appointment">Appointments</Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-4 text-center">
              <h3 className='pt-3'>Social Media Links</h3>
              <div className="pt-1">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook" style={{ color: "#1877f2", fontSize: '30px', paddingRight: '28px' }}></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram" style={{ color: "#d62976", fontSize: '30px', paddingRight: '28px' }}></i>
                </a>
                <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-whatsapp" style={{ color: "#25D366", fontSize: '30px', paddingRight: '28px' }}></i>
                </a>
                <a href="mailto:info@careplus.com">
                  <i className="bi bi-envelope-fill" style={{ color: "white", fontSize: '30px', paddingRight: '28px' }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="container d-sm-flex justify-content-center py-1 text-center">
          <p>2025 © CarePlus. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
