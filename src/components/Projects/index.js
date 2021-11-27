import React from "react";
import SectionHeader from "../SectionHeader";
import IndividualProject from "./IndividualProject";
import NextSectionButton from "../NextSectionButton";
import "./style.css";

const projectList = [
    {title: "Community Bytes", tech: "HTML, CSS, EJS, Node.js, Express.js, MongoDB", description: "A recipe website that allows you to find, create, and review recipes.", Github: "https://github.com/rsato1007/Community-bytes", demo: "https://community-bytes.herokuapp.com/", image: require("../../images/project_image/Communitybytes.png")},
    {title: "Mario Party", tech: "HTML, CSS, JavaScript", description: "My very first project for GA! This was inspired by the iconic video game franchise.", Github: "https://github.com/rsato1007/rsato1007.github.io", demo: "https://rsato1007.github.io/", image: require("../../images/project_image/marioParty.png")},
    {title: "The Commons", tech: "JWT Auth, HTML, CSS, MongoDB, React, Express.js, Node.js", description: "A group colloboration between me and three other people to build a social media app for people who don't like social media.", Github: "https://github.com/rsato1007/project-three", demo: "http://project3-app-flex525.herokuapp.com/", image: require("../../images/project_image/theCommons.png")}
]

const Projects = () => {
    return (
        <div className="projectContainer">
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