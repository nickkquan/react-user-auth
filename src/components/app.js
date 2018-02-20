import "materialize-css/dist/css/materialize.min.css";

import React from "react";
import { Route } from "react-router-dom";

import Nav from "./nav";
import Home from "./home";
import About from "./about";
import Quote from "./quote";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
import auth from "../hoc/auth";
import redirect from "../hoc/redirect";

const App = () => (
	<div className="container">
		<Nav />
		<Route exact path="/" component={Home} />
		<Route path="/about-us" component={About} />
		<Route path="/movie-quote" component={auth(Quote)} />
		<Route path="/sign-in" component={redirect(SignIn, "/movie-quote")} />
		<Route path="/sign-up" component={redirect(SignUp, "/movie-quote")} />
	</div>
);

export default App;
