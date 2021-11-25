import React from "react";
import "./style.css"

const Introduction = () => {
    return (
        <div className="introductionContainer">
            <div className="introductionInformation">
                <div className="introductionText">Hello, I am <span className="introductionName">Robert Sato</span>. <br/> A full-stack developer.</div>
                <div className="learnMoreButton">Learn More</div>
            </div>
        </div>
    )
}

export default Introduction