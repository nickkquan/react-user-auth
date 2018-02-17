import types from "./types";
import axios from "axios";

const BASE_URL = "http://api.reactprototypes.com";

export function signUp(cred) {
	return dispatch => {
		axios
			.post(`${BASE_URL}/signup`, cred)
			.then(resp => {
				console.log("Sign up response: ", resp);
			})
			.catch(err => {
				console.log("Sign up error: ", err.message);
			});
	};
}

export function signIn(cred) {
	return async dispatch => {
		try {
			const resp = await axios.post(`${BASE_URL}/signin`, cred);
			console.log("Sign in response: ", resp);
		} catch (err) {
			console.log("Sign in error: ", err);
		}
	};
}
