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
            <SectionHeader text="About" idText="about"/>
            <div className="aboutFirstHalf hidden">
                <div className="aboutMeInfoContainer">
                    <img className="robPic" src={require("../../images/rob-pic.jpg")} alt="Robert" />
                    <p className="aboutMeText">
                        Hi I am Robert Sato, a full-stack developer based out of Englewood, Colorado. For the last two years, I've been working in finance as personal banker/loan officer where I discovered I love creating things and helping others become empowered. In November 2021, I graduated from General Assembly's 420-hour software program so that I can bring these passions plus my knowledge of web design to create websites that are not only include intutive UI, but also provide services that empower clients.
                    </p>
                </div>
            </div>
            <div className="aboutSecondHalf hidden">
                <TechLogos />
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