import types from "./types";
import axios from "axios";

const BASE_URL = "http://api.reactprototypes.com";

export function signUp(cred) {
	return dispatch => {
		axios
			.post(`${BASE_URL}/signup`, cred)
			.then(resp => {
				console.log("Sign up response: ", resp);
				localStorage.setItem("token", resp.data.token);
				dispatch({ type: types.SIGN_UP });
			})
			.catch(err => {
				console.log("Sign up error: ", err.response.data.error);
				if (err.response) {
					return dispatch({
						type: types.ERROR,
						error: err.response.data.error
					});
				}
				dispatch({
					type: types.ERROR,
					error: "Could not create account. Try again."
				});
			});
	};
}

export function signIn(cred) {
	return async dispatch => {
		try {
			const resp = await axios.post(`${BASE_URL}/signin`, cred);
			console.log("Sign in response: ", resp);
			localStorage.setItem("token", resp.data.token);
			dispatch({ type: types.SIGN_IN });
		} catch (err) {
			console.log("Sign in error: ", err);
			dispatch({ type: types.ERROR, error: "Invalid email/or password" });
		}
	};
}

export function signOut() {
	localStorage.removeItem("token");

	return {
		type: types.SIGN_OUT
	};
}

export function getQuote() {
	const config = {
		headers: {
			authorization: localStorage.getItem("token")
		}
	};

	return async dispatch => {
		const resp = await axios.get(BASE_URL, config);
		console.log("Get quote response, ", resp);
		dispatch({
			type: types.GET_QUOTE,
			payload: resp.data.message
		});
	};
}
