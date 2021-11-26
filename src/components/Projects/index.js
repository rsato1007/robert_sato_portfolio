import React from "react";
import SectionHeader from "../SectionHeader";
import IndividualProject from "./IndividualProject";
import NextSectionButton from "../NextSectionButton";
import "./style.css";

const projectList = [
    {title: "Community Bytes", tech: "HTML, CSS, EJS, Node.js, Express.js, MongoDB", description: "A recipe website that allows you to find, create, and review recipes.", Github: "https://github.com/rsato1007/Community-bytes", demo: "https://community-bytes.herokuapp.com/", image: require("../../images/project_image/Communitybytes.png")}
]

const Projects = () => {
    return (
        <div>
            <SectionHeader text="Projects" idText="projects" />
            <div className="projectListContainer">
                {
                    projectList.map((project, i) =>
                    <IndividualProject project={project} />)
                }
            </div>
            <NextSectionButton text="Contact" idText="#contact"/>
        </div>
    )
}

export default Projects