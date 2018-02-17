import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { renderInput } from "../helpers";

class SignIn extends Component {
	handleSignIn(values) {
		console.log("Sign in form submitted values: ", values);
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<div className="center-align">
				<h1>Sign In</h1>
				<div className="row">
					<div className="col s6 offset-s3">
						<div className="card grey lighten-5">
							<div className="card-content">
								<form onSubmit={handleSubmit(this.handleSignIn)}>
									<Field name="email" placeholder="Enter your email" component={renderInput} />
									<Field
										name="password"
										placeholder="Enter your Password"
										component={renderInput}
										type="password"
									/>
									<div className="right-align">
										<button className="btn blue-grey lighten-2">Sign In</button>
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

SignIn = reduxForm({
	form: "sign-in-form"
})(SignIn);

export default SignIn;
