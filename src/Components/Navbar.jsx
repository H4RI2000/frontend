import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'




function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light  ">
        <div className="container-fluid" >
          <button className="navbar-toggler  ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0 mx-auto " >
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to={'/'}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'about'}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'departments'}>Departments</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'login'}>Doctor Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'appointment'}>Appointment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'contact'}>Contact</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
