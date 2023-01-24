import React from "react";
import "./Experience.css";
import { BsFillBriefcaseFill } from "react-icons/bs";

const Experience = () => {
    return (
        <section className="container experience-container" id="experience">
            <h2>Experience</h2>
            {/* <h4 className="gray-text">My Journey</h4> */}
            <div className="timeline-container">
                <div className="timeline-block">
                    <div className="timeline-icon">
                        <BsFillBriefcaseFill />
                    </div>
                    <div className="timeline-header">
                        <h3>Software Engineering Intern</h3>
                        <p className="dates">January 2023 - Present</p>
                    </div>
                    <div className="timeline-content">
                        <h4 className="location-text">
                            <a
                                href="https://www.avenuapp.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Avenu
                            </a>
                        </h4>
                        <p className="timeline-paragraph">
                            Engineered features and UI/UX for mobile and
                            mobile-web applications with React, React Native,
                            and Firebase. Collaborated with cross-functional
                            teams to design and implement responsive web and
                            mobile designs. Built reusable components, views,
                            and controllers and managed states using redux.
                            Worked with RESTful API's and AJAX to integrate
                            functionality.
                        </p>
                    </div>
                </div>
                <div className="timeline-block">
                    <div className="timeline-icon">
                        <BsFillBriefcaseFill />
                    </div>
                    <div className="timeline-header">
                        <h3>Front-End Developer Intern</h3>
                        <p className="dates">June 2022 - September 2022</p>
                    </div>
                    <div className="timeline-content">
                        <h4 className="location-text">
                            San Jose State University
                        </h4>
                        <p className="timeline-paragraph">
                            Designed and developed 20+ webpages for multiple
                            projects using technologies such as Figma, HTML,
                            CSS, JavaScript, and React. Enhanced user experience
                            and fulfilled web application objectives by creating
                            site structure, navigation, and functionality with
                            the backend. Worked with professors, development
                            leads, and other software developers to build 40% of
                            business requirements.
                        </p>
                    </div>
                </div>
                <div className="timeline-block">
                    <div className="timeline-icon">
                        <BsFillBriefcaseFill />
                    </div>
                    <div className="timeline-header">
                        <h3>Computer Science Tutor</h3>
                        <p className="dates">September 2021 - June 2022</p>
                    </div>
                    <div className="timeline-content">
                        <h4 className="location-text">
                            University of California, Davis
                        </h4>
                        <p className="timeline-paragraph">
                            Tutored for UC Davis students by providing support
                            and guidance to students in lower division courses
                            such as Object-Oriented Programming and Data
                            Structures. Reviewed and delivered course material,
                            explained exercise and homework solutions, and held
                            one-on-one and group sessions to provide feedback
                            and give guidance. Improved students' overall grades
                            by an average of 20% and helped several struggling
                            students obtain passing grades.
                        </p>
                    </div>
                </div>
                <div className="timeline-block">
                    <div className="timeline-icon">
                        <BsFillBriefcaseFill />
                    </div>
                    <div className="timeline-header">
                        <h3>Shift Lead</h3>
                        <p className="dates">May 2021 - September 2021</p>
                    </div>
                    <div className="timeline-content">
                        <h4 className="location-text">Panda Express</h4>
                        <p className="timeline-paragraph">
                            Delegated tasks to employees and monitored
                            activities and task completion. Trained new
                            employees and managed daily work assignments to
                            enhance operations. Ensured service efficiency and
                            demonstrated good leadership in chaotic
                            environments. Fulfilled front-of-house,
                            back-of-house, and cook positions as needed. Worked
                            with managers to maintain efficient productivity and
                            customer service.
                        </p>
                    </div>
                </div>
                <div className="timeline-block">
                    <div className="timeline-icon">
                        <BsFillBriefcaseFill />
                    </div>
                    <div className="timeline-header">
                        <h3>Veterinary Assistant</h3>
                        <p className="dates">August 2020 - April 2021</p>
                    </div>
                    <div className="timeline-content">
                        <h4 className="location-text">Animal Medical Clinic</h4>
                        <p className="timeline-paragraph">
                            Cared for animals in post-operative recovery by
                            closely monitoring vital signs and progress.
                            Restrained and stabilized animals during examination
                            and treatment to prevent injuries. Worked with
                            doctors and veterinary technicians to provide
                            efficient clinical service. Administered
                            immunizations, blood plasma and other medications to
                            animals as prescribed by veterinarians.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
