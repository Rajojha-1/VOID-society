import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from "./../components/footer";
import './../index.css';

// Simple Checkmark SVG for success animation
const CheckmarkIcon = () => (
  <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
    <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
    <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
  </svg>
);

// Accordion Item Component
const FaqItem = ({ question, answer, isOpen, onClick }) => (
  <div className="faq-item">
    <button className="faq-question" onClick={onClick}>
      <span>{question}</span>
      <span className={`faq-icon ${isOpen ? 'open' : ''}`}>+</span>
    </button>
    <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
      <p>{answer}</p>
    </div>
  </div>
);
export default function ContactUs() {
  // State for form fields
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  // State for form validation errors
  const [errors, setErrors] = useState({});
  // State to track if form is submitted
  const [isSubmitted, setIsSubmitted] = useState(false);
  // State to track which FAQ is open
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: 'How soon do we respond?',
      answer: 'We typically respond to all inquiries within 24-48 hours. If your matter is urgent, please mention it in the message.',
    },
    {
      question: 'Can I apply for a role here?',
      answer: 'Absolutely! We are always looking for talented individuals. Please head over to our careers page or send us your resume at careers@void.sec.',
    },
    {
      question: 'Do you offer collaboration or partnership opportunities?',
      answer: 'Yes, we are open to collaborations that align with our mission. Please detail your proposal in the contact form, and our partnership team will get in touch.',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formState.name) newErrors.name = 'Name is required.';
    if (!formState.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formState.message) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setIsSubmitted(true);
      // Here you would typically send the form data to a server
      console.log('Form submitted:', formState);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Email copied to clipboard!');
    });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="contact-us-page">
        {/* Animated Blobs */}
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>

        {/* Hero Section */}
        <section className="contact-hero">
          <h1 className="contact-hero-title">We’d Love to Hear From You</h1>
          <p className="contact-hero-subtitle">Whether you have a question, feedback, or just want to say hi, our team is ready to answer all your questions.</p>
        </section>

        <div className="contact-main-content">
          {/* Contact Form */}
          <div className="contact-form-card">
            {isSubmitted ? (
              <div className="form-success-state">
                <CheckmarkIcon />
                <h2>Message Sent!</h2>
                <p>Thank you for reaching out. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" value={formState.name} onChange={handleInputChange} className={errors.name ? 'input-error' : ''} />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" value={formState.email} onChange={handleInputChange} className={errors.email ? 'input-error' : ''} />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" value={formState.message} onChange={handleInputChange} className={errors.message ? 'input-error' : ''}></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            )}
          </div>

          {/* Alternative Contact Methods */}
          <div className="alternative-contacts">
            <h3>Other Ways to Connect</h3>
            <div className="contact-method">
              <strong>Email Us</strong>
              <div className="email-wrapper">
                <a href="mailto:contact@void.sec">contact@void.sec</a>
                <button onClick={() => copyToClipboard('contact@void.sec')} className="copy-button">Copy</button>
              </div>
            </div>
            <div className="contact-method">
              <strong>Call Us</strong>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
            <div className="contact-method">
              <strong>Find Us</strong>
              <p>123 Cyber Street, Tech City, 404</p>
              <div className="map-placeholder">
                {/* Placeholder for an embedded map */}
                <p>Map Placeholder</p>
              </div>
            </div>
            <div className="social-links">
              <a href="#" aria-label="GitHub" className="social-icon github">G</a>
              <a href="#" aria-label="Twitter" className="social-icon twitter">T</a>
              <a href="#" aria-label="LinkedIn" className="social-icon linkedin">L</a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === index}
                onClick={() => toggleFaq(index)}
              />
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <h2>Still have questions?</h2>
          <a href="mailto:contact@void.sec" className="join-us-button">Let's Connect</a>
        </section>
              <Footer />
      </div>
    </>
  );
}
