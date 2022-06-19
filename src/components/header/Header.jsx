import React from 'react';
import "./header.css";
import HeaderSocials from './HeaderSocials'
import Resume from "../../assets/Resume.pdf";
import Portrait from "../../assets/Portrait.jpg";

const Header = () => {
    return (
        <header>
            <div className="container header-container">
                <h1>Vincent Huang</h1>
                <h5 className="gray-text">3rd Year Computer Science and Data Science Student at UC Davis</h5>
                <div className="cta">
                    <a href={Resume} download className="button">Resume</a>
                    <a href="#contact" className="button">Contact</a>
                </div>
                <HeaderSocials />
                <div className="portrait">
                    <img src={Portrait} alt="portrait" />
                </div>
            </div>
        </header>
    )
}

export default Header