import React from 'react'
import Navbar from './Navbar'


const Header = () => {
    return (
        <>
            <div>
                <div className="container-fluid  p-2">
                    <div className="row">
                        <div className="col-md-4 col-6 pt-1">
                            <h2 style={{ color: 'rgb(16, 7, 99)' }}>Careplus</h2>
                        </div>
                        <div className="col-md-8 col-6">
                            <Navbar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
