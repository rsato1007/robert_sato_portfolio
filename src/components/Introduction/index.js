import React from "react";
import "./style.css"

const Introduction = ({aboutPosition, scrollTo}) => {
      
    return (
        <div className="introductionContainer" id="introduction">
            <div className="introductionInformation">
                <div className="introductionText">Hello, I am <span className="introductionName">Robert Sato</span>. <br/> A full-stack developer.</div>
                <div onClick={(e) => scrollTo(aboutPosition, .935, e)} className="learnMoreButton">Learn More</div>
            </div>
        </div>
    )
}

export default Introduction