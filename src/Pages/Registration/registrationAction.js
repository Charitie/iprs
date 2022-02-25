import { removeToastAlert, toastAlert } from "../../Components/Toast/toastAction";
import { axiosInstance } from "../../util/axiosInstance";
import { REGISTRATION_REQUEST, REGISTRATION_FAIL, REGISTRATION_SUCCESS } from "./registrationTypes";

//Registration user
export const userRegistrationRequest = () => {
	return { type: REGISTRATION_REQUEST };
};

export const userRegistrationSuccess = (user) => {
	return { type: REGISTRATION_SUCCESS, payload: user };
};

export const userRegistrationError= (error) => {
	return {
		type: REGISTRATION_FAIL,
		payload: error,
	};
};

export const register = (user) => async (dispatch) => {
	dispatch(userRegistrationRequest());
	try {
		const response = await axiosInstance.post("/user/register", user);
		if (response.data.code !== "200") {
			const errMessage = response.data.message;
			dispatch(userRegistrationError(errMessage));
			dispatch(toastAlert(errMessage, "danger"));
		} else {
			const { message } = response.data;
			dispatch(userRegistrationSuccess(response.data));
			dispatch(toastAlert(message, "success"));
		}
	} catch (error) {
		const errMessage = error.response.data.message;
		dispatch(userRegistrationError(errMessage));
		dispatch(toastAlert(errMessage, "danger"));

	}
};
