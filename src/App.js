import React, { Component } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Introduction from "./components/Introduction"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Introduction />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App