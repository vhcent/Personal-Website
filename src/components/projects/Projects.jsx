import React from "react";
import "./Projects.css";
import { ProjectsData } from "./ProjectsData";
import { MdOutlineOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
    return (
        <section className="container projects-container" id="projects">
            <h2>Personal Projects</h2>
            <ul className="projects-list">
                {ProjectsData.map((val, key) => {
                    return (
                        <li key={key} className="project-block">
                            <h3>{val.title}</h3>
                            <a
                                href={val.link}
                                target="_blank"
                                rel="noreferrer"
                                className="project-link"
                            >
                                <img
                                    src={val.icon}
                                    className="projects-picture"
                                    alt="projects-portrait"
                                />
                                <div className="overlay">
                                    <p>{val.description}</p>
                                    <div>
                                        <MdOutlineOpenInNew />
                                        <FaGithub />
                                    </div>
                                </div>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Projects;
