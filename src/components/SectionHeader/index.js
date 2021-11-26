import React from "react";
import "./style.css"

const SectionHeader = ({text, idText}) => {
    return (
        <div className="sectionHeader" id={idText}>
            {text}
            <hr className="sectionHeaderLine"></hr>
        </div>
    )
}

export default SectionHeader