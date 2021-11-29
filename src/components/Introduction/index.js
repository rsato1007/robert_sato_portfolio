import React from "react";
import "./style.css"

const Introduction = () => {
      
    return (
        <div className="introductionContainer" id="introduction">
            <div className="introductionInformation">
                <div className="introductionText">Hello, I am <span className="introductionName">Robert Sato</span>. <br/> A full-stack developer.</div>
                <a href="#about"><div className="learnMoreButton">Learn More</div></a>
            </div>
        </div>
    )
}

export default Introduction