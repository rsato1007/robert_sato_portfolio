import React from "react";
import NextSectionButton from "../NextSectionButton";
import "./style.css"

const Introduction = () => {
    return (
        <div className="introductionContainer">
            <div className="introductionInformation">
                <div className="introductionText">Hello, I am <span className="introductionName">Robert Sato</span>. <br/> A full-stack developer.</div>
                <NextSectionButton text="Learn more"/>
            </div>
        </div>
    )
}

export default Introduction