/* eslint-disable import/no-anonymous-default-export */
import { REMOVE_TOAST, SET_TOAST } from "./toastTypes.js";

const initialState = {
	show: false,
	option: {},
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SET_TOAST:
			return { ...state, show: true, option: payload };
		case REMOVE_TOAST:
			return { ...state, show: false };
		default:
			return state;
	}
}
