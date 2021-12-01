import React, { useEffect, useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Introduction from "./components/Introduction"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

// Scroll doesn't work on phones

const App = () => {
  const calcHeight = (elem) => {
    // Calculating an element's distance from the top
    let distance = 0;
    // Loop up the dom
    do {
      // Increase our distance counter
      distance += elem.offsetTop;

      // Set the element to it's parent
      elem = elem.offsetParent;

    } while (elem);
    distance = distance < 0 ? 0 : distance;
    return distance;
  }

  const showElement = (elem) => {
    elem.classList.add("shown");
    elem.classList.remove("hidden");
  }

  const scrollTo = (position, topPercent, e) => {
    e.preventDefault();
    window.scroll({
      top: (position * topPercent),
      left: 0,
      behavior: "smooth"
    });
  }

  const [verticalPosition, setVerticalPosition] = useState(window.pageYOffset);
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
  const [aboutPosition, setAboutPosition] = useState(0);
  const [projectPosition, setProjectPosition] = useState(0);
  const [contactPosition, setContactPosition] = useState(0);

  useEffect(() => {
    window.onresize = () => {
      setBrowserWidth(window.innerWidth);
      setAboutPosition(calcHeight(document.querySelector(".aboutContainer")));
      setContactPosition(calcHeight(document.querySelector(".contactContainer")));
    }

    window.onscroll = () => {
      setVerticalPosition(window.pageYOffset);
    }
    if (aboutPosition * 0.35 < verticalPosition) {
      showElement(document.querySelector(".aboutFirstHalf"));
    }
    if (aboutPosition * 0.90 < verticalPosition) {
      showElement(document.querySelector(".aboutSecondHalf"));
    }
    if (projectPosition * 0.70 < verticalPosition) {
      showElement(document.querySelector(".projectContainer"));
    }
    if (contactPosition * 0.85 < verticalPosition) {
      showElement(document.querySelector(".contactContainer"));
    }
  }, [verticalPosition, aboutPosition, projectPosition, contactPosition]);

  return (
    <div className="app-container">
      <Introduction
        aboutPosition = {aboutPosition}
        scrollTo = {scrollTo}
      />
      {aboutPosition <= verticalPosition &&
        <Navbar
          browserWidth = {browserWidth}
          aboutPosition = {aboutPosition}
          projectPosition = {projectPosition}
          contactPosition = {contactPosition}
          scrollTo = {scrollTo}
        />
      }
      <About
        projectPosition = {projectPosition}
        setAboutPosition = {setAboutPosition} 
        calcHeight = {calcHeight}
        scrollTo = {scrollTo}
      />
      <Projects
        contactPosition = {contactPosition}
        projectPosition = {projectPosition}
        verticalPosition = {verticalPosition}
        setProjectPosition = {setProjectPosition}
        calcHeight = {calcHeight}
        showElement = {showElement}
        scrollTo = {scrollTo}
      />
      <Contact
          setContactPosition = {setContactPosition}
          calcHeight = {calcHeight}
      />
      <Footer />
    </div>
  )
}

export default App