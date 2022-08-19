import React from 'react';
import './Experience.css';
import { BsFillBriefcaseFill } from 'react-icons/bs';

const Experience = () => {
    return (
        <section class="container experience-container" id="experience">
            <h2>Experience</h2>
            {/* <h4 class="gray-text">My Journey</h4> */}
            <div class="timeline-container">
                <div class="timeline-block">
                    <div class="timeline-icon">
                        <BsFillBriefcaseFill />
                    </div>
                    <div class="timeline-header">
                        <h3>Full-Stack Software Engineering Intern</h3>
                        <p class="dates">June 2022 - Present</p>
                    </div>
                    <div class="timeline-content">
                        <h4 class="location-text">San Jose State University</h4>
                        <p class="timeline-paragraph">Worked under the guidance of Dr. Jerry Gao for his research in cloud computing services.
                            Produced UI/UX and database designs for a smart green agriculture app using Figma and flow diagrams.
                            Used React to build the front-end interface for web applications which enable efficient and elegant analysis and control of solar, battery storage, and various sensors and their data.</p>
                    </div>
                </div>
                <div class="timeline-block">
                    <div class="timeline-icon">
                        <BsFillBriefcaseFill />
                    </div>
                    <div class="timeline-header">
                        <h3>Computer Science Tutor</h3>
                        <p class="dates">September 2021 - June 2022</p>
                    </div>
                    <div class="timeline-content">
                        <h4 class="location-text">University of California, Davis</h4>
                        <p class="timeline-paragraph">Tutored for undergraduate courses such as Object-Oriented Programming and Data Structures.
                            Held in-person and online office hour sessions to help students prepare for assignments and exams.
                            Delivered course material to enhance students’ programming and problem-solving skills.</p>
                    </div>
                </div>
                <div class="timeline-block">
                    <div class="timeline-icon">
                        <BsFillBriefcaseFill />
                    </div>
                    <div class="timeline-header">
                        <h3>Shift Lead</h3>
                        <p class="dates">May 2021 - September 2021</p>
                    </div>
                    <div class="timeline-content">
                        <h4 class="location-text">Panda Express</h4>
                        <p class="timeline-paragraph">Delegated tasks to employees and monitored activities and task completion.
                            Trained new employees and managed daily work assignments to enhance operations. Ensured service efficiency and demonstrated good leadership in chaotic environments. Fulfilled front-of-house, back-of-house, and cook positions as needed.
                            Worked with managers to maintain efficient productivity and customer service.</p>
                    </div>
                </div>
                <div class="timeline-block">
                    <div class="timeline-icon">
                        <BsFillBriefcaseFill />
                    </div>
                    <div class="timeline-header">
                        <h3>Veterinary Assistant</h3>
                        <p class="dates">August 2020 - April 2021</p>
                    </div>
                    <div class="timeline-content">
                        <h4 class="location-text">Animal Medical Clinic</h4>
                        <p class="timeline-paragraph">Cared for animals in post-operative recovery by closely monitoring vital signs and progress.
                            Restrained and stabilized animals during examination and treatment to prevent injuries. Worked with doctors and veterinary technicians to provide efficient clinical service.
                            Administered immunizations, blood plasma and other medications to animals as prescribed by veterinarians.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience