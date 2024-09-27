import React, { useState } from 'react';
import '../styles/Footer.css';
import resume from '../assets/resume.pdf';  // Import the resume from assets

// Import the icons from the assets folder
import emailIcon from '../assets/email-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';
import githubIcon from '../assets/github-icon.png';
import locationIcon from '../assets/location-icon.png';

const Footer = () => {

  // Contact form state
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:dhruv.pualsa@gmail.com?subject=Contact%20Form%20Query&body=${formData.message}%0A%0AFrom: ${formData.email}`;
    
    window.location.href = mailtoLink;  // Opens the default email client with a pre-filled email
  };

  return (
    <div className="footer-section">
      <div className="contact-info">
        <table>
          <tbody>
            <tr>
              <td><img src={emailIcon} alt="Email" className="icon" /></td>
              <td><strong>Email:</strong></td>
              <td>dhruv.pualsa@gmail.com</td>
            </tr>
            <tr>
              <td><img src={linkedinIcon} alt="LinkedIn" className="icon" /></td>
              <td><strong>LinkedIn:</strong></td>
              <td><a href="https://www.linkedin.com/in/dpualsa/" target="_blank" rel="noopener noreferrer">linkedin.com/in/dpualsa</a></td>
            </tr>
            <tr>
              <td><img src={githubIcon} alt="GitHub" className="icon" /></td>
              <td><strong>GitHub:</strong></td>
              <td><a href="https://github.com/Dhruv983" target="_blank" rel="noopener noreferrer">github.com/Dhruv983</a></td>
            </tr>
            <tr>
              <td><img src={locationIcon} alt="Location" className="icon" /></td>
              <td><strong>Location:</strong></td>
              <td>St. John’s, NL, Canada</td>
            </tr>
          </tbody>
        </table>

        {/* Centered View Resume Button */}
        <div className="view-resume-button">
          <button className="btn" onClick={() => window.open(resume, '_blank')}>
            View Resume
          </button>
        </div>
      </div>

      {/* Contact Me Form */}
      <div className="contact-form">
        <h3>Contact Me</h3>
        <form onSubmit={handleFormSubmit}>
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleInputChange}
            required
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="btn-submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
