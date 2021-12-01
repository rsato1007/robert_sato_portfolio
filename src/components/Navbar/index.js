import React from "react"
import "./style.css"

const Navbar = ({ aboutPosition, projectPosition, contactPosition, scrollTo }) => {
    return (
        <div className="navbarContainerDesktop dropNavBarAnimation">
            <div className="navbarLinkContainer">
                <span onClick={(e) => scrollTo(0, 0, e)}className="navbarLink">Home</span>
                <span onClick={(e) => scrollTo(aboutPosition, 0.935, e)} className="navbarLink">About</span>
                <span onClick={(e) => scrollTo(projectPosition, 0.974, e)} className="navbarLink">Projects</span>
                <span onClick={(e) => scrollTo(contactPosition, 1, e)} className="navbarLink">Contact</span>
            </div>
        </div>
    )
}

export default Navbar