import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div>
      <h1>Contactez moi</h1>
      <form action="/submit">
        <div className="form-group">
          <label htmlFor="name">Nom:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <input type="submit" value="Envoyez" />
      </form>
    </div>
  );
}

export default Contact;
