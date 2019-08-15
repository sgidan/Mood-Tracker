import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Profile from "./pages/Profile";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Profile />
      </div>
    );
  }
}

export default App;
