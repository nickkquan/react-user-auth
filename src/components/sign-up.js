import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { renderInput } from "../helpers";

class SignUp extends Component {
	handleSignUp(values) {
		console.log("Sign up form submitted values: ", values);
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<div className="center-align">
				<h1>Sign Up</h1>
				<div className="row">
					<div className="col s6 offset-s3">
						<div className="card grey lighten-5">
							<div className="card-content">
								<form onSubmit={handleSubmit(this.handleSignUp)}>
									<Field name="email" placeholder="Enter your email" component={renderInput} />
									<Field
										name="password"
										placeholder="Choose a Password"
										component={renderInput}
										type="password"
									/>
									<Field
										name="confirmPassword"
										placeholder="Re-enter password"
										component={renderInput}
										type="password"
									/>
									<div className="right-align">
										<button className="btn blue-grey lighten-2">Sign Up</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function validate(values) {
	const error = {};

	if (!values.email) {
		error.email = "Please input an email";
	}

	if (!values.password) {
		error.password = "Please choose a password";
	}

	if (values.password !== values.confirmPassword) {
		error.confirmPassword = "Passwords do not match";
	}

	return error;
}

SignUp = reduxForm({
	form: "sign-up-form",
	validate: validate
})(SignUp);

export default SignUp;
