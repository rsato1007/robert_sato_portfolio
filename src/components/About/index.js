import React, { useEffect } from "react";
import "./style.css"
import SectionHeader from "../SectionHeader";
import TechLogos from "./TechLogos";
import NextSectionButton from "../NextSectionButton";

const About = ({ projectPosition, setAboutPosition, calcHeight, scrollTo }) => {
    useEffect(() => {
        setAboutPosition(calcHeight(document.querySelector(".aboutContainer")));
      });
      
    return (
        <div className="aboutContainer shown">
            <div className="aboutFirstHalf hidden">
                <SectionHeader text="About" idText="about"/>
                <TechLogos />
            </div>
            <div className="aboutSecondHalf hidden">
                <div className="aboutMeInfoContainer">
                    <img className="robPic" src={require("../../images/rob-pic.jpg")} alt="Robert" />
                    <p className="aboutMeText">
                        Born and raised in Colorado, I started my journey in finance, but after a few years, I was left unsatisfied. I enjoyed it, but I wanted something that would push me and allow to create things I can tangibly see. This is where coding comes in. I joined General Assembly’s software engineer program in May 2021 to start a new path and graudated in November 2021. A path where I can make things that empower others to achieve their purpose. Now I want bring my skills to company that empowers it’s users.
                    </p>
                </div>
                <NextSectionButton
                    text="Projects"
                    position={projectPosition}
                    top={0.974}
                    scrollTo = {scrollTo}
                />
            </div>
        </div>
    )
}

export default About