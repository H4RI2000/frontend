import React, { useRef } from 'react';
import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer'
const Counter = () => {
  const [ref, inview] = useInView({
    threshold: 0.5,
    triggerOnce: false

  })


  return (
    <>
      <section className='countersect   pb-5' ref={ref}>
        <div className="container">
          <div className="row pt-4 text-end">
          </div>
          <div className="row pt-5 pb-5">
            <div className="col-md-3 ">
              <div className="counter-card text-center">
                <span className='count' style={{ fontSize: '40px', fontWeight: 'bold' }}>

                  <CountUp start={0} end={inview ? 853 : 0} duration={2.75} /> +
                </span>
                <br />
                <span>Patient care</span>
              </div>
            </div>

            <div className="col-md-3 ">
              <div className="counter-card text-center">
                <span className='count' style={{ fontSize: '40px', fontWeight: 'bold' }} >
                  <CountUp start={0} end={inview ? 20 : 0} duration={2.75} /> +

                </span>
                <br />
                <span>Expert Doctors</span>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="counter-card text-center">
                <span className='count' style={{ fontSize: '40px', fontWeight: 'bold' }}>
                  <CountUp start={0} end={inview ? 43 : 0} duration={2.75} /> +
                </span>
                <br />
                <span>Health Departments</span>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="counter-card text-center">
                <span className='count' style={{ fontSize: '40px', fontWeight: 'bold' }}>
                  <CountUp start={0} end={inview ? 50 : 0} duration={2.75} /> +
                </span>
                <br />
                <span>Total Staff</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

};
export default Counter;