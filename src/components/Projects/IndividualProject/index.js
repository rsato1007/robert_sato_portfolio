import React from "react";
import "./style.css";

const IndividualProject = ({ project }) => {
    return (
        <div className="projectCardContainer">
            <h3 className="projectCardTitle">{project.title}</h3>
            <img src={project.image} alt="Project" className="projectCardImage"/>
        </div>
    )
}

export default IndividualProject