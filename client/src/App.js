import React, { Component } from "react";
import "./App.css";
import Profile from "./pages/Profile";
import TopBar from "./components/TopBar/index";

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Profile />
      </div>
    );
  }
}

export default App;
