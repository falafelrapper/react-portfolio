import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { imageUrls } from "../components/js/pictureConstants";


export default function ContactPage() {
  const [contactText, setMessageText] = useState('');
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("")
  const [errors, setErrors] = useState({
    name: [],
    email: [],
    message: []
  });

  useEffect(() => {
    const pdfFile = "../content/resume.pdf";
    const combinedFiles = [...imageUrls, pdfFile];
    preloadFiles(combinedFiles);
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
    
      setNameValue("");
      setEmailValue("");
      setMessageValue("");
    } catch (err) {
      console.error(err);
    }
  };

  const validateFieldOnBlur = (fieldName, e) => {
    if (!e.target.value.trim()) {
      setErrors({
        ...errors,
        [fieldName]: [`${fieldName} is required.`],
      });
    } else {
      setErrors({
        ...errors,
        [fieldName]: [],
      });
    }
  };

  return (
    <>
      <div className="contact-window">
        <div className="contact-card">
          <h2>Contact Me</h2>
          <Link to='https://www.linkedin.com/in/zachary-maxwell-roy/' target="_blank" rel="noopener noreferrer"><img id='linkedin' src="/images/linkedin.png" alt="linkedIn" /></Link>
          <p>LinkedIn</p>
          <Link to="mailto:zacharymaxwellroy@gmail.com"><img id='email' src="/images/email.png" alt="Email" /></Link>
          <p>zacharymaxwellroy@gmail.com</p>
          <Link to="tel:+3237173790"><img id='phone' src="/images/phone.png" alt="Phone" /></Link>
          <p>323.717.3790</p>
        </div>

        <form className="contact-form" onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name:</label>
          <input className="form-input" type="text" id="name" value={nameValue} onChange={(e) => setNameValue(e.target.value)} onBlur={(e) => validateFieldOnBlur('name', e)} />
          {errors.name.length > 0 && errors.name.map((errorMsg, index) => <span key={index} className="error">{errorMsg}</span>)}
          <label htmlFor="email-entry">Email:</label>
          <input className="form-input" type="text" id="email-entry" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} onBlur={(e) => validateFieldOnBlur('email', e)}/>
          {errors.email.length > 0 && errors.email.map((errorMsg, index) => <span key={index} className="error">{errorMsg}</span>)}
          <label htmlFor="message">Message:</label>
          <textarea className="form-input" type="text" id="message" value={messageValue} onChange={(e) => setMessageValue(e.target.value)} onBlur={(e) => validateFieldOnBlur('message', e)}/>
          {errors.message.length > 0 && errors.message.map((errorMsg, index) => <span key={index} className="error">{errorMsg}</span>)}
          <button type="submit" id="submit-msg" className="btn">Send Message</button>
        </form>
      </div>
    </>
  );
}

function preloadFiles(files) {
  files.forEach((file) => {
    if (file.endsWith(".pdf")) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", file, true);
      xhr.send();
    } else {
      const img = new Image();
      img.src = file;
    }
  });
}