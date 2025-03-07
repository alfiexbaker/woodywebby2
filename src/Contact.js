import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
    });

    const [submitStatus, setSubmitStatus] = useState({
        submitted: false,
        success: false,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (process.env.REACT_APP_EMAILJS_SERVICE_ID &&
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID &&
            process.env.REACT_APP_EMAILJS_USER_ID) {

            emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    from_phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message
                }
            )
                .then((response) => {
                    setSubmitStatus({
                        submitted: true,
                        success: true,
                        message: 'Your message has been sent. We will get back to you shortly!'
                    });
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Inquiry',
                        message: ''
                    });
                })
                .catch((error) => {
                    setSubmitStatus({
                        submitted: true,
                        success: false,
                        message: 'There was an error sending your message. Please try again or contact us directly.'
                    });
                });
        } else {
            // Fallback for when EmailJS credentials are not available
            setSubmitStatus({
                submitted: true,
                success: true,
                message: 'Form submission is currently disabled. Please contact us directly.'
            });
        }
    };

    return (
        <div id="contact" className="contact-container">
            <div className="contact-form">
                <h1>Contact Us</h1>
                {submitStatus.submitted ? (
                    <p style={{ color: submitStatus.success ? '#4CAF50' : '#F44336' }}>
                        {submitStatus.message}
                    </p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your Phone Number"
                        />
                        <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Room Booking">Room Booking</option>
                            <option value="Table Reservation">Table Reservation</option>
                            <option value="Event Inquiry">Event Inquiry</option>
                        </select>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows="6"
                            required
                        ></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                )}
            </div>
            <div className="map-and-details">
                <h1>Find Us</h1>
                <div className="contact-details">
                    <p>The Woodroffe Arms</p>
                    <p>Main Street, Hope</p>
                    <p>Peak District National Park</p>
                    <p>Derbyshire, S33 6RH</p>
                    <p>Phone: 01433 623093</p>
                    <p>Email: info@woodroffearms.co.uk</p>
                </div>
                <iframe
                    title="The Woodroffe Arms Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2380.932141614953!2d-1.728111384069437!3d53.35070237997966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bc2a09064b975%3A0x5d5d6098c9439d0a!2sHope%2C%20UK!5e0!3m2!1sen!2sus!4v1610123456789!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;