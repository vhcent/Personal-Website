import React from "react";
import "./Projects.css";
import { ProjectsData } from "./ProjectsData";
import { MdOutlineOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
    return (
        <section className="projects-container" id="projects">
            <h2>Personal Projects</h2>
            <ul className="projects-list">
                {ProjectsData.map((val, key) => {
                    return (
                        <li key={key} className="project-block">
                            <h3>{val.title}</h3>
                            <div className="project-link">
                                <img
                                    src={val.icon}
                                    className="project-picture"
                                    alt="project-portrait"
                                />
                                <div className="overlay">
                                    <p className="project-description">
                                        {val.description}
                                    </p>
                                    <div className="overlay-icons">
                                        {val.link !== "" ? (
                                            <a
                                                href={val.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="overlay-icon"
                                            >
                                                <MdOutlineOpenInNew size={25} />
                                            </a>
                                        ) : null}
                                        <a
                                            href={val.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="overlay-icons"
                                        >
                                            <FaGithub size={25} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Projects;
