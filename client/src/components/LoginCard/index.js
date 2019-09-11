// import styles from "../SignUp/style.js/index.js";
import API from "../../utils/API";
import React, { Component } from "react";
// console.log(styles);
import "./style.css";

export default class LoginCard extends Component {
  state = {
    email: "",
    password: "",
    user: "",
    error: null
  };

  handleOnChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    const { email, password } = this.state;
    event.preventDefault();
    API.loginUser({ email, password })
      .then(response => {
        let {
          _id,
          name,
          journals,
          email,
          moods,
          password
        } = response.data.user;
        // const { _id, name, moods, journals } = response.data;
        let user = { id: _id, name, journals, email, moods, password };
        // // localstorage here but with newly generated mongoID to be used when pulling user profile once redirected to /profile
        localStorage.clear();
        localStorage.setItem("user", JSON.stringify(user));
        // self.props.setUser(user);

        this.props.history.push("/profile");
      })
      .catch(error => {
        if (error) {
          console.log(error);
          this.setState({ error });
        }
      });
    // console.log("this.props", this.props);
    // console.log("this.props.history", this.props.history);
  };

  render() {
    return (
      <div class="login-box">
        <div className="card">
          <img
            src="https://cdn11.bigcommerce.com/s-x2qveuc8fg/images/stencil/1280x1280/products/197/470/USER-LONGIN-HISTORY__78836.1528243966.png?c=2"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title">Login:</h4>
          </div>
          <form action="" onSubmit={this.handleSubmit.bind(this)}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="form-group">
                  <label htmlFor="email">Email: </label>
                  <input
                    type="email"
                    required="true"
                    className="form-control"
                    id="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleOnChange}
                    placeholder="Email"
                  />
                </div>
              </li>

              <li className="list-group-item">
                <div className="form-group">
                  <label for="pass">Password:(min 6 characters)</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    minlength="6"
                    required="true"
                    id="password"
                    value={this.state.password}
                    onChange={this.handleOnChange}
                    placeholder="Password"
                  />
                </div>
              </li>
            </ul>
            <div className="card-body">
              <button
                type="submit"
                href="/profile"
                class="card-link"
                id="login"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
