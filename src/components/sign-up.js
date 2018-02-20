import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { renderInput } from "../helpers";
import { connect } from "react-redux";
import { signUp } from "../actions";

class SignUp extends Component {
	handleSignUp(values) {
		console.log("Sign up form submitted values: ", values);

		this.props.signUp(values);
	}

	render() {
		const { handleSubmit, authError } = this.props;

		return (
			<div className="center-align">
				<h1>Sign Up</h1>
				<div className="row">
					<div className="col s6 offset-s3">
						<div className="card grey lighten-5">
							<div className="card-content">
								<form onSubmit={handleSubmit(this.handleSignUp.bind(this))}>
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
									<p className="red-text center-align">{authError}</p>
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

function mapStateToProps(state) {
	return {
		authError: state.user.error
	};
}

export default connect(mapStateToProps, { signUp })(SignUp);
