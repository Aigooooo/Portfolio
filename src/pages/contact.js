import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import "../css/contact.css";
import githubLogo from "../assets/github.png";
import linkedinLogo from "../assets/linkedin.png";
import instaLogo from "../assets/insta.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState(''); 


  const EMAILJS_SERVICE_ID = 'service_uaz9hqm';
  const EMAILJS_TEMPLATE_ID = 'template_ek2z7se';
  const EMAILJS_PUBLIC_KEY = 'SQPq2y87_rs4AKcgy';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Edgar Alcover Jr.',
          time: new Date().toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Asia/Manila'
          })
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setMessageType('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
        setMessageType('');
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact me directly at alcoveredgarjr@gmail.com');
      setMessageType('error');
      
      // Clear error message after 7 seconds
      setTimeout(() => {
        setSubmitMessage('');
        setMessageType('');
      }, 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>I'm always open to discussing new opportunities and interesting projects</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <div className="contact-details">
            <div className="contact-item">
              <h3>📧 Email</h3>
              <p>alcoveredgarjr@gmail.com</p>
            </div>
            
            <div className="contact-item">
              <h3>📍 Location</h3>
              <p>Cebu, Philippines</p>
            </div>
            
            <div className="contact-item">
              <h3>💼 Current Role</h3>
              <p>Mid - Level Software Developer<br/>Talleco JobTarget Philippines</p>
            </div>
          </div>

          <div className="social-links">
            <h3>Follow Me</h3>
            <div className="social-icons">
              <a
                href="https://github.com/Aigooooo"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img src={githubLogo} alt="GitHub" />
                <span>GitHub</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/jiaralc/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img src={linkedinLogo} alt="LinkedIn" />
                <span>LinkedIn</span>
              </a>
              
              <a
                href="https://www.instagram.com/ed.jiar/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img src={instaLogo} alt="Instagram" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send Me a Message</h2>
          {submitMessage && (
            <div className={`message ${messageType}`}>
              {submitMessage}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about your project or opportunity..."
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact; 