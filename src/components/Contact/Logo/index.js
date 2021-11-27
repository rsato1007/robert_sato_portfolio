import React from "react";
import "./style.css"

const Logo = ({img, text, href, name}) => {
    return (
        <div className="individualLogoContainer">
           <img src={img} alt="logo" className={name} />
           <a href={href} target="_blank" className="logoLink" rel="noopener noreferrer">{text}</a>
        </div>
    )
}

export default Logo