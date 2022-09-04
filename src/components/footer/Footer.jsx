import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            VINCENT HUANG
            <div className="footer-socials">
                <a
                    href="https://www.linkedin.com/in/vinhuang/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsLinkedin />
                </a>
                <a
                    href="https://github.com/vhcent"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </a>
                <a href="mailto:vhuang2020@gmail.com">
                    <AiOutlineMail />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
