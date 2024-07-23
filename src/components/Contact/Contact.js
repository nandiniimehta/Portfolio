import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
        console.log("Form submission started"); // Debug log

        emailjs.sendForm('service_ekm4wok', 'template_umz7fyq', form.current, 'GLcLymqNECzG2MSG5')
        .then((result) => {
            console.log("Email sent successfully:", result.text);
        }, (error) => {
            console.log("Email sending error:", error.text);
        });
    };

    return (
        <section id='contactPage'>
            <h2 className='contactPageTitle'>Contact Us</h2>
            <span className='contactDesc'>Contact me from here.</span>
            <form className='contForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='from_name' required />
                <input type='email' className='email' placeholder='Your Email' name='from_email' required />
                <textarea name='message' rows='5' className='msg' placeholder='Your Message' required />
                <button type='submit' className='subBtn'>Submit</button>
            </form>
        </section>
    );
};

export default Contact;
