import React, {useState} from "react";
import "./style.css";

const IndividualProject = ({ project }) => {
    const [showMore, setShowMore] = useState(false);
    const [showInfoCard, setShowInfoCard] = useState(false);

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

    return (
        <div onMouseEnter={(e) => setShowMore(true)} className="projectCardContainer" onMouseLeave={(e) => setShowMore(false)}>
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
                            <h5>{project.title}</h5>
                            <p>{project.tech}</p>
                            <hr />
                            <p>{project.description}</p>
                            <a href={project.Github} target="_blank" rel="noopener noreferrer"><div>Github</div></a>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer"><div>Live Demo</div></a>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default IndividualProject