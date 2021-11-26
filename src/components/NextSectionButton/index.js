import React from "react";
import "./style.css"

const NextSectionButton = ({text, idText}) => {
    return (
        <div className="nextSectionButtonContainer">
            <a href={idText}><div className="nextSectionButton">{text}</div></a>
        </div>
    )
}

export default NextSectionButton