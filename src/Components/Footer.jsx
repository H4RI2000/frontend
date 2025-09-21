import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="footer-sec text-light pt-5">
        <div className="container text-centerr">
          <div className="row">
            <div className="col-2 col-md-4">
              <h3 className="fw-bold">CARE+</h3>
              <p className="pt-2">Careplus,
                India
              </p>

            </div>
            <div className="col-md-4 col-4 mx-auto">
              <h4>Menu</h4>
              <li className="menu-item">
                <a className="menu-link " aria-current="page" href="#">Home</a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="">About </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="">Departments</a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="">DoctorLogin</a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="">Appointments</a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="">Contact us</a>
              </li>
            </div>
            <div className=" col-md-4 text-center">
              <h3 className='pt-3'>Sociel Media Links</h3>
              <div className=" pt-1 text-center" >
                <a href=""><i class="bi bi-facebook" style={{ color: "#1877f2", fontSize: '30px', paddingRight: '28px', }} ></i></a>

                <a href=""><i class="bi bi-instagram" style={{ color: "#d62976", fontSize: '30px', paddingRight: '28px' }}></i> </a>

                <a href=""><i class="bi bi-whatsapp" style={{ color: "#25D366", fontSize: '30px', paddingRight: '28px', textDecoration: 'none' }}></i></a>

                <a href=""><i class="bi bi-envelope-fill" style={{ color: "white", fontSize: '30px', paddingRight: '28px' }}></i></a>
              </div>

            </div>

          </div>
        </div>
        <hr />
        <div className="container d-sm-flex justify-content-center py-1 text-center">
          <p>2025 ©CarePlus. All Rights Reserved. </p>
        </div>

      </footer>
    </div>
  )
}

export default Footer
