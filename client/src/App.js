import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
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
    user: null,
    redirect: false
  };

  setUser = user => {
    this.setState({ user: user });
  };
  

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  logout = e => {
    e.preventDefault();
    Axios.get("api/users/logout").then(response => {
      // alert(JSON.stringify(response.data.message));
      this.setState({ redirect: true})
      
    });
  };

  render() {
    return (
      <Router>
        <div>
          {/* {this.state.isLoggedIn? (<TopBar/>) : <TopBarTwo/>} */}
          <div>{this.renderRedirect()}
            <TopBar logout={this.logout} user={this.state.user} />
          </div>
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
        </div>
      </Router>
    );
  }
}

export default App;
