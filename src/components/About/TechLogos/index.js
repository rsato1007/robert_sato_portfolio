import React from "react";
import "./style.css"

const TechLogos = () => {
    return (
        <div className="logoContainer">
            <img className="logo-image html-image" src={require("../../../images/tech_logos/HTML.png")} alt="HTML Logo" />
            <img className="logo-image css-image" src={require("../../../images/tech_logos/CSS.png")} alt="CSS Logo" />
            <img className="logo-image js-image" src={require("../../../images/tech_logos/js.png")} alt="JavaScript Logo" />
            <img className="logo-image react-image" src={require("../../../images/tech_logos/react.png")} alt="React Logo" />
        </div>
    )
}

export default TechLogos