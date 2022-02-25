/* eslint-disable import/no-anonymous-default-export */
import { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAIL } from "./registrationTypes";

const initialState = {
	user: {},
	loading: false,
	error: null,
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case REGISTRATION_REQUEST:
			return { ...state, loading: true };
		case REGISTRATION_SUCCESS:
			return {
				...state,
				user: payload,
				loading: false,
			};
		case REGISTRATION_FAIL:
			return {
				...state,
				loading: false,
				error: payload,
			};
		default:
			return state;
	}
}
