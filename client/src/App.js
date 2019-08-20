import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Profile from "./pages/Profile";
import Welcome from "./pages/Welcome";
import TopBar from "./components/TopBar/index";
import LoginCard from "./components/LoginCard";
import SignUp from "./components/SignUp";
import Axios from "axios";

class App extends Component {
  state = {
    user: "",
    error: ""
  };

  // componentDidMount() {
  //   let user = JSON.parse(localStorage.getItem("user"));
  //   console.log("user is here", user);
  //   this.setState({ user: user.name });
  //   console.log("USERID", this.state.user);
  // }
  render() {
    return (
      <Router>
        <div>
          <TopBar user={this.state.user} />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={LoginCard} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
