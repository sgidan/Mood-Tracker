import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Profile from "./pages/Profile";
import Welcome from "./pages/Welcome";
import TopBar from "./components/TopBar/index";
import LoginCard from "./components/LoginCard";
import SignUp from "./components/SignUp";
import Axios from "axios";

// import Axios from "axios";

class App extends Component {
  state = {
    user: null
  };

  setUser = user => {
    this.setState({ user: user });
  };
  // componentDidMount() {
  //   localStorage.clear();
  // }

  logout = e => {
    e.preventDefault();
    Axios.get("api/users/logout").then(response => {
      alert(JSON.stringify(response.data.message));
      // this.props.history.push("/profile");
    });
  };

  render() {
    return (
      <Router>
        <div>
          {/* {this.state.isLoggedIn? (<TopBar/>) : <TopBarTwo/>} */}
          <TopBar logout={this.logout} user={this.state.user} />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/profile" component={Profile} />
            <Route
              exact
              path="/login"
              render={routeProps => (
                <LoginCard {...routeProps} setUser={this.setUser} />
              )}
            />
            <Route
              exact
              path="/signup"
              render={routeProps => (
                <SignUp {...routeProps} setUser={this.setUser} />
              )}
            />
          </Switch>
          <footer class="app-footer">
            <div>
              <a href="https://github.com/sgidan/Mood-Tracker">GitHub  |  </a>
              <a href="https://github.com/sgidan/Mood-Tracker">Heroku</a>
             
              <span>    &copy;    2019     SxS  </span>
              <span>Powered by</span>
              <a href="https://coreui.io"> ...it's fine.</a>
              </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
