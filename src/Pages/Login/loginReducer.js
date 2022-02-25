/* eslint-disable import/no-anonymous-default-export */
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "./loginTypes";

const initialState = {
	token: localStorage.getItem("upesiiprstoken"),
	user: JSON.parse(localStorage.getItem("upesiiprsuser")),
	isAuisAuthenticated: JSON.parse(localStorage.getItem("upesiiprsauth")),
	loading: false,
	error: null,
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case LOGIN_REQUEST:
			return { ...state, loading: true };
		case LOGIN_SUCCESS:
			localStorage.setItem("upesiiprstoken", payload.token);

			localStorage.setItem(
				"upesiiprsuser",
				JSON.stringify({
					userName: payload.userName,
					roles: payload.roles,
					userId: payload.userId,
					firstName: payload.firstname,
					code: payload.code,
				})
			);
			localStorage.setItem(
				"upesiiprsauth",
				JSON.stringify({
					isAuthenticated: true,
				})
			);

			return {
				...state,
				token: payload.token,
				user: {
					userName: payload.userName,
					roles: payload.roles,
					userId: payload.userId,
					firstName: payload.firstname,
					code: payload.code,
				},
				isAuthenticated: true,
				loading: false,
			};
		case LOGIN_ERROR:
		case LOGOUT:
			localStorage.removeItem("upesiiprstoken");
			localStorage.removeItem("upesiiprsuser");
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				error: payload,
			};
		default:
			return state;
	}
}
