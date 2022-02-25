import { removeToastAlert, toastAlert } from "../../Components/Toast/toastAction";
import { axiosInstance } from "../../util/axiosInstance";
import { LOGIN_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from "./loginTypes";

//Login user
export const userLoginRequest = () => {
	return { type: LOGIN_REQUEST };
};

export const userLoginSuccess = (user) => {
	return { type: LOGIN_SUCCESS, payload: user };
};

export const userLoginError = (error) => {
	return {
		type: LOGIN_ERROR,
		payload: error,
	};
};

export const login = (user) => async (dispatch) => {
	dispatch(userLoginRequest());
	try {
		const response = await axiosInstance.post("/user/login", user);
		const message = response.data.message;
		if (response.data.code !== "200") {
			dispatch(userLoginError(message));
			dispatch(toastAlert(message, "danger"));
		} else {
			dispatch(userLoginSuccess(response.data));
			dispatch(toastAlert(message, "success"));
			dispatch(removeToastAlert());
		}
	} catch (error) {
		const errMessage = error.response.data.message;
		dispatch(userLoginError(errMessage));
		dispatch(toastAlert(errMessage, "danger"));
	}
};

//Logout
export const userLoggedOut = () => ({
	type: LOGOUT,
});

export const logout = () => (dispatch) => {
	dispatch(userLoggedOut());
};
