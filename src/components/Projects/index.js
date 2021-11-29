import React, {useEffect} from "react";
import SectionHeader from "../SectionHeader";
import IndividualProject from "./IndividualProject";
import NextSectionButton from "../NextSectionButton";
import "./style.css";

const projectList = [
    {title: "Community Bytes", tech: "HTML, CSS, EJS, Node.js, Express.js, MongoDB, Heroku, Google OAuth", description: "A recipe website that allows you to find, create, and review recipes.", Github: "https://github.com/rsato1007/Community-bytes", demo: "https://community-bytes.herokuapp.com/", image: require("../../images/project_image/Communitybytes.png")},
    {title: "Mario Party", tech: "HTML, CSS, JavaScript", description: "My very first project for GA! This was inspired by the iconic video game franchise.", Github: "https://github.com/rsato1007/rsato1007.github.io", demo: "https://rsato1007.github.io/", image: require("../../images/project_image/marioParty.png")},
    {title: "The Commons", tech: "JWT Auth, HTML, CSS, MongoDB, React, Express.js, Node.js, Heroku", description: "A group colloboration between me and three other people to build a social media app for people who don't like social media.", Github: "https://github.com/rsato1007/project-three", demo: "http://project3-app-flex525.herokuapp.com/", image: require("../../images/project_image/theCommons.png")},
    {title: "Historic Stops", tech: "Django, HTML, CSS, Postgresql, Heroku, AWS, JavaScript", description: "A collaboration between me and four other people to build a social media app for a client. An app with emphasis on local areas that historic.", Github: "https://github.com/rsato1007/wayfarer-project", demo: "https://historic-stops.herokuapp.com/", image: require("../../images/project_image/historicStops.png")},
    {title: "Next Route", tech: "Django, HTML, CSS, Postgresql, Heroku, AWS, JavaScript", description: "A web app for rock climbers to find their next route, to share new routes, and to review current routes.", Github: "https://github.com/rsato1007/next_route", demo: "https://climbernextroute.herokuapp.com/", image: require("../../images/project_image/nextRoute.png")}
]

const Projects = ({ contactPosition, setProjectPosition, calcHeight, scrollTo }) => {
    useEffect(() => {
        setProjectPosition(calcHeight(document.querySelector(".projectContainer")));
      });

    return (
        <div className="projectContainer">
            <SectionHeader text="Projects" idText="projects" />
            <div className="projectListContainer">
                {
                    projectList.map((project, i) =>
                    <IndividualProject project={project} key={i}/>)
                }
            </div>
            <NextSectionButton text="Contact" position={contactPosition} top={1} scrollTo={scrollTo} />
        </div>
    )
}

export default Projects