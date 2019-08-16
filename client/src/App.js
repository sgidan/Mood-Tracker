import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Profile from "./pages/Profile";
import Welcome from "./pages/Welcome";
import TopBar from "./components/TopBar/index";
import LoginCard from './components/LoginCard';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopBar />
          <Switch> 
            <Route exact path="/" component={Welcome} />
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/login" component={LoginCard}/>
            <Route exact path="/signup" component={SignUp}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
