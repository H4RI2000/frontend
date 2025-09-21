import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Team1 from '../assets/images/team-1.jpg'

function Team() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
  };

  return (

    <div className="container mt-4">
      <div className="row">
        <div className='doctor p-5'>Our Doctors</div>
        <div className="col-md-12 text-center">
          <Slider {...settings}>

            <div className='Team1'><img src={Team1} className="Team1-img-top" alt="..." />
              <div className="Team1-body">
                <h5 className="Team1-title" style={{ color: 'rgb(20, 41, 160)', textAlign: 'center', fontWeight: 'bold' }}>Doctor Name</h5>
                <p style={{ color: 'rgb(35, 36, 41)', textAlign: 'center' }}>Cardiology specialist</p>
              </div>
            </div>
            <div className='Team1'><img src={Team1} className="Team1-img-top" alt="..." />
              <div className="Team1-body">
                <h5 className="Team1-title" style={{ color: 'rgb(20, 41, 160)', textAlign: 'center', fontWeight: 'bold' }}>Doctor Name</h5>
                <p style={{ color: 'rgb(35, 36, 41)', textAlign: 'center' }}>Cardiology specialist</p>
              </div>
            </div>
            <div className='Team1'><img src={Team1} className="Team1-img-top" alt="..." />
              <div className="Team1-body">
                <h5 className="Team1-title" style={{ color: 'rgb(20, 41, 160)', textAlign: 'center', fontWeight: 'bold' }}>Doctor Name</h5>
                <p style={{ color: 'rgb(35, 36, 41)', textAlign: 'center' }}>Cardiology specialist</p>
              </div>
            </div>
            <div className='Team1'><img src={Team1} className="Team1-img-top" alt="..." />
              <div className="Team1-body">
                <h5 className="Team1-title" style={{ color: 'rgb(20, 41, 160)', textAlign: 'center', fontWeight: 'bold' }}>Doctor Name</h5>
                <p style={{ color: 'rgb(35, 36, 41)', textAlign: 'center' }}>Cardiology specialist</p>
              </div>
            </div>
            <div className='Team1'><img src={Team1} className="Team1-img-top" alt="..." />
              <div className="Team1-body">
                <h5 className="Team1-title" style={{ color: 'rgb(20, 41, 160)', textAlign: 'center', fontWeight: 'bold' }}>Doctor Name</h5>
                <p style={{ color: 'rgb(35, 36, 41)', textAlign: 'center' }}>Cardiology specialist</p>
              </div>
            </div>
            <div className='Team1'><img src={Team1} className="Team1-img-top" alt="..." />
              <div className="Team1-body">
                <h5 className="Team1-title" style={{ color: 'rgb(20, 41, 160)', textAlign: 'center', fontWeight: 'bold' }}>Doctor Name</h5>
                <p style={{ color: 'rgb(35, 36, 41)', textAlign: 'center' }}>Cardiology specialist</p>
              </div>
            </div>


          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Team;
