import React from "react";
import "./style.css"

const NextSectionButton = ({text}) => {
    return (
        <div className="nextSectionButtonContainer">
            <div className="nextSectionButton">{text}</div>
        </div>
    )
}

export default NextSectionButton