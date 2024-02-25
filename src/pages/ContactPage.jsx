import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages and getting the current param variable's value from URL
import { useParams, Link } from 'react-router-dom';


export default function ContactPage() {

  return (
    <>
      <div className="contact-window">
        <div className="contact-card">
          <h2>Contact Me</h2>
          <Link to='https://www.linkedin.com/in/zachary-maxwell-roy/'><img id='linkedin' src="../images/linkedin.png" alt="linkedIn" /></Link>
          <p>LinkedIn</p>
          <Link to="mailto:zacharymaxwellroy@gmail.com"><img id='email' src="../images/email.png" alt="Email" /></Link>
          <p>zacharymaxwellroy@gmail.com</p>
          <Link to="tel:+3237173790"><img id='phone' src="../images/phone.png" alt="Phone" /></Link>
          <p>323.717.3790</p>
        </div>
      </div>
    </>
  );
}