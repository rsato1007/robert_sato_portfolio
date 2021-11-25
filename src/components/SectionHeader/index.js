import React from "react";
import "./style.css"

const SectionHeader = ({text}) => {
    return (
        <div className="sectionHeader">
            {text}
            <hr className="sectionHeaderLine"></hr>
        </div>
    )
}

export default SectionHeader