import React from "react";
import "./Skills.css";
import { SkillsData } from "./SkillsData.js";

const Technologies = () => {
    return (
        <section className="skills-container" id="skills">
            <h2>Skills and Technologies</h2>
            <ul className="skills-list">
                {SkillsData.map((val, key) => {
                    return (
                        <li key={key} className="skill-block">
                            <img
                                src={val.icon}
                                className="skill-icon"
                                alt="skill-icon"
                            />
                            <h5>{val.title}</h5>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Technologies;
