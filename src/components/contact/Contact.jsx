import React, { useState, useRef } from "react";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
    const [loading, setLoading] = useState(false);

    const form = useRef();

    const sendMessage = (e) => {
        setLoading(true);
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                    // setLoading(false);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section className="container contact-container" id="contact">
            <h2>Contact Me</h2>
            <div className="contact-cards">
                <a href="mailto:vhuang2020@gmail.com" className="contact-card">
                    <div className="contact-content">
                        <AiOutlineMail size={20} />
                        vhuang2020@gmail.com
                    </div>
                </a>
                <a href="tel: +1 (510) 456-6165" className="contact-card">
                    <div className="contact-content">
                        <BsPhone size={20} />
                        +1 (510) 456-6165
                    </div>
                </a>
            </div>

            <form className="form-container" ref={form} onSubmit={sendMessage}>
                <div className="info-container">
                    <input
                        className="input-text"
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        // value={name}
                        // onChange={handleChangeInput}
                    />
                    <input
                        className="input-text"
                        type="text"
                        placeholder="Your Email"
                        name="email"
                        // value={email}
                        // onChange={handleChangeInput}
                    />
                </div>
                <textarea
                    className="input-text"
                    placeholder="Your Message"
                    name="message"
                    // value={message}
                    // onChange={handleChangeInput}
                />
                <button type="submit" className="button">
                    {loading ? "Sending" : "Send Message"}
                </button>
            </form>
        </section>
    );
};

export default Contact;
