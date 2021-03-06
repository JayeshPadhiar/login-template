import React, { Component } from "react";
import "./App.css";

import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from './components/ForgotPass';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
	
export default class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<nav className="navbar navbar-expand-lg navbar-light fixed-top">
						<div className="container">
							<Link className="navbar-brand" to={"/sign-in"}>
								Login Template
							</Link>
							<div
								className="collapse navbar-collapse"
								id="login-menu">
								<ul className="navbar-nav ml-auto">
									<li className="nav-item">
										<Link
											className="nav-link"
											to={"/sign-in"}>
											Login
										</Link>
									</li>
									<li className="nav-item">
										<Link
											className="nav-link"
											to={"/sign-up"}>
											Signup
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</nav>

					<div className="auth-wrapper">
						<div className="auth-inner">
							<Switch>
								<Route exact path="/" component={Login} />
								<Route path="/sign-in" component={Login} />
								<Route path="/sign-up" component={Signup} />
								<Route path='/forgot-password' component={ForgotPassword} />
							</Switch>
						</div>
					</div>
				</div>
			</Router>
		);
	}
}