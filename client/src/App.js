import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Profile from "./pages/Profile";
import Welcome from "./pages/Welcome";
import TopBar from "./components/TopBar/index";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopBar />
          <Switch> 
            <Route exact path="/" component={Welcome} />
            <Route exact path="/profile" component={Profile}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
