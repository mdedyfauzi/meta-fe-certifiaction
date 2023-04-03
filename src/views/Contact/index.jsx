import { useEffect, useRef } from 'react';

import emailjs from '@emailjs/browser';

import './styles.css';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.error(error.text);
      }
    );
  };

  useEffect(() => {
    console.log(form.current.name);
  });

  return (
    <section id="contact" className="contact">
      <div>
        <h1>Contact Me</h1>
        <form ref={form} onSubmit={handleSubmit}>
          <input placeholder="Name" type="text" name="from_email" />
          <input placeholder="Email" type="email" name="from_name" />
          <select name="subject">
            <option value="0">Type of enquiry</option>
            <option value="Freelance Project Proposal">Freelance Project Proposal</option>
          </select>
          {/* <input placeholder="Type of enquiry" type="" name="from_name" /> */}
          <textarea placeholder="Message" name="message" />
          <button type="submit" value="Send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
