import React from "react";
import "./style.css"

const NextSectionButton = ({ text, position, top, scrollTo }) => {
    return (
        <div onClick={(e) => {scrollTo(position, top, e)}} className="nextSectionButtonContainer">
            <div className="nextSectionButton">{text}</div>
        </div>
    )
}

export default NextSectionButton