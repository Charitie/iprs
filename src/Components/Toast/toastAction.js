import { REMOVE_TOAST, SET_TOAST } from "./toastTypes";

export const toastAlert =
	(message, alertType, timeout = 5000) =>
	(dispatch) => {
		dispatch({
			type: SET_TOAST,
			payload: {
				message,
				alertType,
				timeout,
			},
		});
	};

export const removeToastAlert = () => (dispatch) => {
	dispatch({
		type: REMOVE_TOAST,
	});
};
