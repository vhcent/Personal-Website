import React from 'react';
import "./Header.css";
import HeaderSocials from './HeaderSocials'
import Resume from "../../assets/resume.pdf";
import Portrait from "../../assets/portrait.jpg";

const Header = () => {
    return (
        <header>
            <div class="container header-container" id="header">
                <h1>Vincent Huang</h1>
                <h4 class="gray-text">3rd Year Computer Science and Data Science Student at UC Davis</h4>
                <div class="cta">
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