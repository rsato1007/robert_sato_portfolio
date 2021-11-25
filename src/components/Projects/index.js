import React from "react";
import SectionHeader from "../SectionHeader";
import IndividualProject from "./IndividualProject";
import NextSectionButton from "../NextSectionButton";

const Projects = () => {
    return (
        <div>
            <SectionHeader text="Projects" />
            <IndividualProject />
            <NextSectionButton text="Contact" />
        </div>
    )
}

export default Projects