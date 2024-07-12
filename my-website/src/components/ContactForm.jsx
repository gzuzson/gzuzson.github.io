import React, { useState } from 'react';
import * as emailjs from "emailjs-com";

// Loader
const Loader = () => <div className="loader">Submitting...</div>;

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const name = formData.get('user_name');
        const email = formData.get('user_email');
        const message = formData.get('message');

        try {
            // Send email using EmailJS
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,  // EmailJS service ID
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // EmailJS email template ID
                {
                    from_name: name,
                    from_email: email,
                    message: message,
                },
                process.env.REACT_APP_EMAILJS_USER_ID // EmailJS user ID
            );

            // Reset form and state after sending email
            e.target.reset();
            setStateMessage('Your message has been sent!');
            setTimeout(() => {
                setStateMessage(null);
            }, 5000); // hide message after 5 seconds
        } catch (error) {
            console.error('Error sending email:', error);
            setStateMessage('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={sendEmail}>
            <h1>Contact Me</h1>
            <label>Name</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
            <label>Message</label>
            <textarea name="message" required />
            <input type="submit" value="Send" disabled={isSubmitting} />

            {/* Conditionally render the loader */}
            {isSubmitting && <Loader />}

            {/* Display state message */}
            {stateMessage && <p>{stateMessage}</p>}

            <div className="social-icons">
                <a href="https://instagram.com/miah.saemo" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://github.com/gzuzson" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href="https://linkedin.com/in/jeremiah-saemo-9a57a62a8" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                <a href="https://open.spotify.com/user/msaemo-au?si=18bc8a3823184230" target="_blank" rel="noopener noreferrer"><i className="fab fa-spotify"></i></a>
                {/* Add more social icons as needed */}
            </div>
        </form>
    );
};

export default ContactForm;