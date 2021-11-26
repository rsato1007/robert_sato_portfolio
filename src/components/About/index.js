import React from "react";
import "./style.css"
import SectionHeader from "../SectionHeader";
import TechLogos from "./TechLogos";
import NextSectionButton from "../NextSectionButton";

const About = () => {
    return (
        <div className="aboutContainer">
            <SectionHeader text="About" idText="about"/>
            <TechLogos />
            <div className="aboutMeInfoContainer">
                <img className="robPic" src={require("../../images/robert.jpg")} alt="Robert" />
                <p className="aboutMeText">
                    Born and raised in Colorado, I started my journey in finance, but after a few years, I was left unsatisfied. I enjoyed it, but I wanted something that would push me and allow to create things I can tangibly see. This is where coding comes in. I joined General Assembly’s software engineer program in May 2021 to start a new path and graudated in November 2021. A path where I can make things that empower others to achieve their purpose. Now I want bring my skills to company that empowers it’s users.
                </p>
            </div>
            <NextSectionButton text="Projects" idText="#projects" />
        </div>
    )
}

export default About