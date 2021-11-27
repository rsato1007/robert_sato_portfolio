import React from "react";
import SectionHeader from "../SectionHeader";
import Logo from "./Logo";
import "./style.css"

const logoList = [
    {img: require("../../images/contact_logos/email.png"), text: "Robertmsato@gmail.com", href: "mailto: robertmsato@gmail.com", className: "emailLogo"},
    {img: require("../../images/contact_logos/github.png"), text: "Github Page", href: "https://github.com/rsato1007", className: "githubLogo"},
    {img: require("../../images/contact_logos/linkedin-logo.png"), text: "Linkedin Page", href: "https://www.linkedin.com/in/robertmsato3/", className: "linkedinLogo"}
]

const Contact = () => {
    return (
        <div className="contactContainer">
            <SectionHeader text="Contact" idText="contact"/>
            <div className="contactText">Interested in my work? Contact Me!</div>
            <div className="logoContainerContact">
            {
                logoList.map((logo) =>
                <Logo text={logo.text} img={logo.img}  href={logo.href} name={logo.className} />)
            }
            </div>
        </div>
    )
}

export default Contact