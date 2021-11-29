import React, { useEffect, useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Introduction from "./components/Introduction"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

// Figuring out how we can do dyanmic animations on scroll:
/* We could create a state for each major component (Introduction, About, Projects, Contact) and each
   one can house an array that contains each sub component's height value.
*/
// Here's the pieces we have so far:
// window.pageYOffset determines current scroll position.
// calcHeight gets the distance an element is from the top of the page.
// document.querySelector("#introduction").offsetHeight (This I believe returns the height of the element).

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

    console.log("Broswer Width: ", browserWidth);

    window.onscroll = () => {
      setVerticalPosition(window.pageYOffset);
    }
    // You'll need to add dyanmic for width as well.
    if (aboutPosition * 0.35 < verticalPosition) {
      showElement(document.querySelector(".aboutFirstHalf"));
    }
    if (aboutPosition * 0.90 < verticalPosition) {
      showElement(document.querySelector(".aboutSecondHalf"));
    }
    if (contactPosition * 0.85 < verticalPosition) {
      showElement(document.querySelector(".contactContainer"));
    }
  }, [verticalPosition, aboutPosition, contactPosition]);

  return (
    <div className="app-container">
      <Introduction
        aboutPosition = {aboutPosition}
        scrollTo = {scrollTo}
      />
      <Navbar 
        aboutPosition = {aboutPosition}
        projectPosition = {projectPosition}
        contactPosition = {contactPosition}
        scrollTo = {scrollTo}
      />
      <About
        projectPosition = {projectPosition}
        setAboutPosition = {setAboutPosition} 
        calcHeight = {calcHeight}
        scrollTo = {scrollTo}
      />
      <Projects
        contactPosition = {contactPosition}
        setProjectPosition = {setProjectPosition}
        calcHeight = {calcHeight}
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