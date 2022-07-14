import React from 'react';
import './about.css';
import { MdOutlineWorkOutline } from 'react-icons/md'
import { VscFolderLibrary } from 'react-icons/vsc'
import { BiTask } from 'react-icons/bi'

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <div class="container about-container">
                <div class="about-cards">
                    <article class="about-card">
                        <MdOutlineWorkOutline />
                        <h5>Experience</h5>
                        {/* <small>3+ years of work, internship, and club experience</small> */}
                    </article>
                    <article class="about-card">
                        <VscFolderLibrary />
                        <h5>Projects</h5>
                        {/* <small>My creations during my undergrad</small> */}
                    </article>
                    <article class="about-card">
                        <BiTask />
                        <h5>Technologies</h5>
                        {/* <small>Highlights of my technical skills</small> */}
                    </article>
                </div>
                <p>
                    Hello! My name is Vincent Huang and I am University of California, Davis class of 2024 B.S. in Computer Science and Data Science
                    who is currently seeking a software engineering or data science internship for the Summer of 2023. My primary interests include data science,
                    video game development, and artificial intelligence systems. I am an adaptable independent teamworker who is strong in programming, UI/UX design, and data analysis.
                    I am comfortable with both front-end and back-end development, primarily with node.js and Amazon Web Services, as well as UI/UX designing using figma.
                </p>
            </div>
        </section>
    )
}

export default About