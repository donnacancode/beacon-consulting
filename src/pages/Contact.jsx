/* eslint-disable no-unused-vars */
import React from "react";

const Contact = () => {
  return (
    <div className="contact-us-wrapper">
      <div className="contact-page">
        <h1>Contact Us</h1>
        <p>
          Let's work together. Send us a message and we will be in touch as soon
          as possible.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
