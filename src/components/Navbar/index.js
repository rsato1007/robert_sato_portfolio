import React from "react"
import "./style.css"

const Navbar = () => {
    return (
        <div className="navbarContainerDesktop">
            <div className="navbarLinkContainer">
                <span className="navbarLink">Home</span>
                <span className="navbarLink">About</span>
                <span className="navbarLink">Projects</span>
                <span className="navbarLink">Contact</span>
            </div>
        </div>
    )
}

export default Navbar