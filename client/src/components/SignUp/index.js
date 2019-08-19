import "./style.css";
import API from "../../utils/API";
import React, { Component } from "react";

export default class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    error: null
  };

  handleOnChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    const { name, email, password } = this.state;
    event.preventDefault();
    this.setstate({ name, email, password });
    API.signupUser({ name, email, password })
    console.log("after API.signupUser", this.state);
    
  };

  render() {
    return (
      <div class="signup-box">
        <div className="card">
          <img
            src="https://cdn11.bigcommerce.com/s-x2qveuc8fg/images/stencil/1280x1280/products/197/470/USER-LONGIN-HISTORY__78836.1528243966.png?c=2"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title">Sign Up:</h4>
          </div>
          <ul className="list-group list-group-flush">
            <form action="" onSubmit={this.handleSubmit}>
              <li className="list-group-item">
                <div className="form-group">
                  <label for="name">Name: </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your name."
                    value={this.state.name}
                    onChange={this.handleOnChange}
                  />
                </div>
              </li>
              <li className="list-group-item">
                <div className="form-group">
                  <label for="email">Email: </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleOnChange}
                    placeholder="Enter your email."
                  />
                </div>
              </li>
              <li className="list-group-item">
                <div className="form-group">
                  <label for="exampleInputPassword1">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={this.state.password}
                    onChange={this.handleOnChange}
                    placeholder="Password"
                  />
                </div>
              </li>
            </form>
          </ul>
          <div className="card-body">
            <button
              type="submit"
              href="/profile"
              class="card-link"
              id="createID"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}
