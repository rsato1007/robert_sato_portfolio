import React, { useState } from "react";
import "./style.css";

const IndividualProject = ({ project, num, projectPosition, verticalPosition, showElement}) => {
    const [showMore, setShowMore] = useState(false);
    const [showInfoCard, setShowInfoCard] = useState(false);
    const [showOnce, setShowOnce] = useState(false);

    const showMoreInfo = (e) => {
        e.preventDefault();
        if (showInfoCard === false) {
            setShowMore(true);
        }
    }

    const displayProjectInfo = (e) => {
        e.preventDefault();
        setShowInfoCard(true);
        setShowMore(false);
    }

    const hideProjectInfo = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.target === document.querySelector(".infoCardContainer")) {
            document.querySelector(".infoCardContainer").classList.add("hideAnimation");
            document.querySelector(".infoCard").classList.add("hideCardAnimation");
            setTimeout(() => {
                document.querySelector(".infoCardContainer").classList.remove("hideAnimation");
                document.querySelector(".infoCard").classList.remove("hideCardAnimation");
                setShowInfoCard(false);
            }, 400);
        }
    }

    const projectShowAnimation = () => {
        setTimeout(() => {
            const projectCardEl = document.getElementById(`project${num}`);
            projectCardEl.style.animation = `showProjectCard 1s ease`;
            showElement(projectCardEl);
        }, num * 330);
    }
    if (projectPosition * 0.85 < verticalPosition && !showOnce) {
        setShowOnce(true);
        projectShowAnimation();
    }

    return (
        <div onMouseEnter={(e) => showMoreInfo(e)} id={`project${num}`} className="projectCardContainer hidden" onMouseLeave={(e) => setShowMore(false)}>
            <h3 className="projectCardTitle">{project.title}</h3>
            {showMore === false &&
                <img src={project.image} alt="Project" className="projectCardImage"/>
            }
            {showMore === true &&
                <div className="projectCardBackground">
                    <div onClick={(e) => displayProjectInfo(e)} className="projectCardLearnMoreButton">Learn More</div>
                </div>
            }
            {showInfoCard === true &&
                <div onClick={(e) => hideProjectInfo(e)} className="infoCardContainer">
                    <div className="infoCard">
                        <img src={project.image} alt={project.title} className="infoCardImage" />
                        <div className="infoCardTextContainer" onClick={(e) => e.stopPropagation()}>
                            <h5 className="infoCardTitleText">{project.title}</h5>
                            <p className="infoCardTechText">{project.tech}</p>
                            <hr className="infoCardTextDivider" />
                            <p className="infoCardDescription">{project.description}</p>
                            <div className="infoCardButtonContainer">
                                <a href={project.Github} target="_blank" rel="noopener noreferrer" className="infoCardLink githubButton"><div className="infoCardButton">Github</div></a>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="infoCardLink demoButton"><div className="infoCardButton">Live Demo</div></a>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default IndividualProject