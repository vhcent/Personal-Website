import React, { useState } from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        setLoading(true);

        const contact = {
            _type: "contact",
            name: name,
            email: email,
            message: message,
        };
    };

    return (
        <section className="container contact-container" id="contact">
            <h2>Contact Me</h2>
            <div className="contact-cards">
                <div className="contact-card">
                    <AiOutlineMail />
                    <a
                        href="mailto:vhuang2020@gmail.com"
                        className="contact-text"
                    >
                        vhuang2020@gmail.com
                    </a>
                </div>
                <div className="contact-card">
                    <BsPhone />
                    <a href="tel: +1 (510) 456-6165" className="contact-text">
                        +1 (510) 456-6165
                    </a>
                </div>
            </div>

            <div className="form-container">
                <div className="input">
                    <input
                        className="input-text"
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        value={name}
                        onChange={handleChangeInput}
                    />
                </div>
                <div className="input">
                    <input
                        className="input-text"
                        type="text"
                        placeholder="Your Email"
                        name="email"
                        value={email}
                        onChange={handleChangeInput}
                    />
                </div>
                <div>
                    <textarea
                        className="input-text"
                        placeholder="Your Message"
                        name="message"
                        value={message}
                        onChange={handleChangeInput}
                    />
                </div>
                <button
                    type="button"
                    className="input-text"
                    onClick={handleSubmit}
                >
                    {loading ? "Sending" : "Send Message"}
                </button>
            </div>
        </section>
    );
};

export default Contact;
