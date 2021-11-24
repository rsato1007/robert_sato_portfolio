import React, { Component } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Introduction from "./components/Introduction"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Introduction />
      </div>
    )
  }
}

export default App