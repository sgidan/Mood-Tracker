import React from 'react';
import "./style.css";

export default function SignUp() {
    return(
        <div class="signup-box">
                <div className="card" >
                    <img src="https://cdn11.bigcommerce.com/s-x2qveuc8fg/images/stencil/1280x1280/products/197/470/USER-LONGIN-HISTORY__78836.1528243966.png?c=2"
                        className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h4 className="card-title">Sign Up:</h4>
                    </div>
                    <ul className="list-group list-group-flush">
                        <form>
                        <li className="list-group-item">
                                    <div className="form-group">
                                        <label for="Username">Name: </label>
                                        <input type="text" className="form-control" id="username" name="username"
                                            placeholder="Enter your name."></input>
                                    </div>
                            </li>
                            <li className="list-group-item">
                                    <div className="form-group">
                                        <label for="Username">Email: </label>
                                        <input type="text" className="form-control" id="username" name="username"
                                            placeholder="Enter your email."></input>
                                    </div>
                            </li>
                            <li className="list-group-item">
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password:</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password"></input>
                                </div>
                            </li>
                        </form>
                    </ul>
                    <div className="card-body">
                        <a href="#" class="card-link" id="createID">Create ID</a>
                        <a href="#" class="card-link" id="login">Login</a>
                    </div>
                </div>
        </div>
    );
 }