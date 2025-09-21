import React from 'react'

function ContactForm() {
    return (
        <div>
            <div className="container mt-5" id='contact'>
                <h2 className="text-center mb-4">Contact Us</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label for="name" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email Address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                            </div>
                            <div className="mb-3">
                                <label for="phone" className="form-label">Phone Number</label>
                                <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" pattern="\d{10}" maxlength="10" required />

                            </div>
                            <div className="mb-3">
                                <label for="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="4" placeholder="Enter your message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mb-5">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
