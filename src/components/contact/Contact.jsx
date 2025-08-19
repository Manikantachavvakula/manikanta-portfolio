import React, { useRef, useState } from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { RiMessengerLine } from 'react-icons/ri';
import { TbBrandLinkedin } from 'react-icons/tb';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formState.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    // Email validation
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Message validation
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formState.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle form submission
  const sendEmail = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.sendForm(
        'service_7hkta68',           // Your EmailJS service ID (you'll need to update this)
        'template_wfdzpf1',          // Your EmailJS template ID (you'll need to update this)
        form.current,
        'P1IKNznf6iIZqspzG'          // Your EmailJS public key (you'll need to update this)
      );

      console.log('Email sent successfully:', result.text);
      
      // Reset form and show success message
      setFormState({ name: '', email: '', message: '' });
      setSubmitStatus('success');
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error.text);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* === Contact Options === */}
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>manikantaa.dev@gmail.com</h5>
            <a 
              href="mailto:manikantaa.dev@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Send email to Manikanta"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Phone</h4>
            <h5>+91-9676853187</h5>
            <a 
              href="tel:+919676853187" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Call Manikanta"
            >
              Give me a call
            </a>
          </article>

          <article className="contact__option">
            <TbBrandLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Manikanta Chavvakula</h5>
            <a 
              href="https://www.linkedin.com/in/manikanta-chavvakula/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* === Enhanced Contact Form === */}
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="form__message form__message--success">
              <FaCheckCircle />
              <span>Message sent successfully! I'll get back to you soon.</span>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="form__message form__message--error">
              <FaExclamationTriangle />
              <span>Failed to send message. Please try again or contact me directly.</span>
            </div>
          )}

          {/* Name Field */}
          <div className="form__group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formState.name}
              onChange={handleInputChange}
              className={`form__input ${errors.name ? 'form__input--error' : ''}`}
              required
              aria-label="Your name"
              disabled={isSubmitting}
            />
            {errors.name && (
              <span className="form__error">{errors.name}</span>
            )}
          </div>

          {/* Email Field */}
          <div className="form__group">
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formState.email}
              onChange={handleInputChange}
              className={`form__input ${errors.email ? 'form__input--error' : ''}`}
              required
              aria-label="Your email address"
              disabled={isSubmitting}
            />
            {errors.email && (
              <span className="form__error">{errors.email}</span>
            )}
          </div>

          {/* Message Field */}
          <div className="form__group">
            <textarea
              name="message"
              rows="7"
              placeholder="Hi Manikanta, I'd like to discuss..."
              value={formState.message}
              onChange={handleInputChange}
              className={`form__input form__textarea ${errors.message ? 'form__input--error' : ''}`}
              required
              aria-label="Your message"
              disabled={isSubmitting}
            ></textarea>
            {errors.message && (
              <span className="form__error">{errors.message}</span>
            )}
            <div className="form__char-count">
              {formState.message.length}/500 characters
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className={`btn btn-primary form__submit ${isSubmitting ? 'form__submit--loading' : ''}`}
            disabled={isSubmitting}
            aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;