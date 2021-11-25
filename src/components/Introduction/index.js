import React from "react";
import NextSectionButton from "../NextSectionButton";
import "./style.css"

const Introduction = () => {
    return (
        <div className="introductionContainer">
            <div>Hello, I am <span>Robert Sato.</span> A full-stack developer.</div>
            <NextSectionButton text="Learn more"/>
        </div>
    )
}

export default Introduction