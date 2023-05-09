import { useState } from 'react';

import './ConnactContent.css'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // form submission logic here
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
      setName('');
      setEmail('');
      setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label htmlFor="name" className="contact-form__label">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleNameChange}
        className="contact-form__input"
        required
      />

      <label htmlFor="email" className="contact-form__label">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        className="contact-form__input"
        required
      />

      <label htmlFor="message" className="contact-form__label">Message</label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={handleMessageChange}
        className="contact-form__textarea"
        required
      ></textarea>

      <button type="submit" className="contact-form__button">Send</button>
    </form>
  );
};

export default ContactForm;
