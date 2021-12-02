import React, { useState } from "react"
import "./style.css"

const Navbar = ({ browserWidth, aboutPosition, projectPosition, contactPosition, scrollTo }) => {
    const [showLinkMenu, setShowLinkMenu] = useState(false);

    const menuStatus = (e) => {
        e.preventDefault();
        if (showLinkMenu) {
            document.querySelector(".dropDownMenuLinks").classList.add("hideLinkMenu");
            setTimeout(() => {
                setShowLinkMenu(!showLinkMenu);
            }, 750);
        }
        else {
            setShowLinkMenu(!showLinkMenu);
        }
    }
    return (
        <div>
        {browserWidth >= 450 &&
            <div className="navbarContainerDesktop">
                    <div className="navbarLinkContainer">
                        <span onClick={(e) => scrollTo(0, 0, e)}className="navbarLink">Home</span>
                        <span onClick={(e) => scrollTo(aboutPosition, 0.935, e)} className="navbarLink">About</span>
                        <span onClick={(e) => scrollTo(projectPosition, 0.974, e)} className="navbarLink">Projects</span>
                        <span onClick={(e) => scrollTo(contactPosition, 1, e)} className="navbarLink">Contact</span>
                    </div>
            </div>
        }
        {browserWidth < 450 &&
            <div>
                <div className="navbarContainerDesktop">
                    <img src={require("../../images/menu-yellow-white.png")} alt="dropDownMenu" className="hamburgerMenu" onClick={(e) => menuStatus(e)}/>
                </div>
                {showLinkMenu && 
                    <div className="dropDownMenuLinks">
                        <div onClick={(e) => scrollTo(0, 0, e)}className="navbarLinkMobile">Home</div>
                        <div onClick={(e) => scrollTo(aboutPosition, 0.935, e)} className="navbarLinkMobile">About</div>
                        <div onClick={(e) => scrollTo(projectPosition, 0.974, e)} className="navbarLinkMobile">Projects</div>
                        <div onClick={(e) => scrollTo(contactPosition, 1, e)} className="navbarLinkMobile">Contact</div>
                    </div>
                }
            </div>
        }
        </div>
    )
}

export default Navbar