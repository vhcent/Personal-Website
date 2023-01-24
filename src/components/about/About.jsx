import React from "react";
import "./About.css";
import { MdOutlineWorkOutline } from "react-icons/md";
import { VscFolderLibrary } from "react-icons/vsc";
import { BiTask } from "react-icons/bi";

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <div className="container about-container">
                <div className="about-cards">
                    <article className="about-card">
                        <MdOutlineWorkOutline />
                        <h5>Experience</h5>
                        {/* <small>3+ years of work, internship, and club experience</small> */}
                    </article>
                    <article className="about-card">
                        <VscFolderLibrary />
                        <h5>Projects</h5>
                        {/* <small>My creations during my undergrad</small> */}
                    </article>
                    <article className="about-card">
                        <BiTask />
                        <h5>Skills</h5>
                        {/* <small>Highlights of my technical skills</small> */}
                    </article>
                </div>
                <p className="about-paragraph">
                    Hello! My name is Vincent Huang and I am a third year
                    student at the University of California, Davis who is
                    currently seeking a software engineering or data science
                    internship or job for 2023. My primary interests include
                    full-stack development, data science, and video game
                    development. I am an adaptable independent teamworker who is
                    strong in programming, UI/UX design, and data analysis. I am
                    comfortable with both front-end and back-end development,
                    primarily with node.js and Amazon Web Services, as well as
                    UI/UX designing using figma.
                </p>
            </div>
        </section>
    );
};

export default About;
