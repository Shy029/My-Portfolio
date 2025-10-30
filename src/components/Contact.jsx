import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

// Resolve EmailJS config from environment or global window fallbacks
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || (typeof window !== 'undefined' && window.EMAILJS_PUBLIC_KEY) || '';
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || (typeof window !== 'undefined' && window.EMAILJS_SERVICE_ID) || '';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || (typeof window !== 'undefined' && window.EMAILJS_TEMPLATE_ID) || '';
// Optional: if your EmailJS template has a fixed "To" address configured in the service,
// you do NOT need to pass a recipient in params. We'll omit it for maximum compatibility.
const CONTACT_TO_EMAIL = process.env.REACT_APP_CONTACT_TO_EMAIL || '';

const Contact = () => {
  useEffect(() => {
    try {
      if (emailjs && typeof emailjs.init === 'function' && EMAILJS_PUBLIC_KEY) {
        emailjs.init(EMAILJS_PUBLIC_KEY);
      }
    } catch (err) {
      // No-op; we will show a message on submit if config is missing
    }
  }, []);

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.from_name || !formData.from_email || !formData.subject || !formData.message) {
      showNotification('Please fill in all fields', 'error');
      return;
    }
    
    if (!isValidEmail(formData.from_email)) {
      showNotification('Please enter a valid email address', 'error');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Try EmailJS first
      if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
        throw new Error('Missing EmailJS configuration');
      }

      const params = {
        from_name: formData.from_name,
        from_email: formData.from_email,
        subject: formData.subject,
        message: formData.message
      };
      // Only include to_email if explicitly provided and your template expects it
      if (CONTACT_TO_EMAIL) {
        params.to_email = CONTACT_TO_EMAIL;
      }

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params, EMAILJS_PUBLIC_KEY);
      
      showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
      setFormData({ from_name: '', from_email: '', subject: '', message: '' });
    } catch (error) {
      // Fallback to mailto
      console.log('EmailJS failed, using mailto fallback:', error);
      if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
        showNotification('EmailJS keys are missing. Using mail app fallback. Add keys in .env / Vercel.', 'error');
      }
      const mailtoLink = `mailto:${CONTACT_TO_EMAIL || 'shy2329at@gmail.com'}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.from_name} (${formData.from_email})\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      showNotification('Opening your email client to send the message. If it doesn\'t open, please email me directly at shy2329at@gmail.com', 'success');
      setFormData({ from_name: '', from_email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p>I'm always interested in new opportunities and collaborations. Feel free to reach out!</p>
            
          <div className="contact-methods">
              <div className="contact-method">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:shy2329at@gmail.com" className="email-link">
                      shy2329at@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-method">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <p>+91 9123223959</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://www.linkedin.com/in/shyamli-rupam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Shy029" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://leetcode.com/u/shyamli_29/" target="_blank" rel="noopener noreferrer" className="social-link" title="LeetCode">
                <i className="fas fa-code"></i>
              </a>
              <a href="https://www.codechef.com/users/real_enigma029" target="_blank" rel="noopener noreferrer" className="social-link" title="CodeChef">
                <i className="fas fa-trophy"></i>
              </a>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                value={formData.from_email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        
        {notification.show && (
          <div className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
