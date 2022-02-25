/* eslint-disable import/no-anonymous-default-export */
import {
	CUSTOMER_ERROR,
	CUSTOMER_REQUEST,
	GET_CUSTOMERS_SUCCESS,
	GET_SINGLE_CUSTOMER_DETAILS_BY_ID,
	GET_SINGLE_CUSTOMER_DETAILS_BY_PASSPORT,
	GET_USER_DETAILS,
} from "./customersTypes";

const initialState = {
	customers: [],
	userDetails: {},
	userDetailsById: {},
	isFetchedById: false,
	userDetailsByPassport: {},
	isFetchedByPassport: false,
	loading: false,
	error: null,
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case CUSTOMER_REQUEST:
			return { ...state, loading: true };
		case GET_CUSTOMERS_SUCCESS:
			return {
				...state,
				customers: payload,
				loading: false,
			};
		case GET_USER_DETAILS:
			return {
				...state,
				userDetails: payload,
				loading: false,
			};
		case GET_SINGLE_CUSTOMER_DETAILS_BY_ID:
			return {
				...state,
				userDetailsById: payload,
				isFetchedById: true,
				loading: false,
			};
		case GET_SINGLE_CUSTOMER_DETAILS_BY_PASSPORT:
			return {
				...state,
				userDetailsByPassport: payload,
				isFetchedByPassport: true,
				loading: false,
			};
		case CUSTOMER_ERROR:
			return {
				...state,
				loading: false,
				error: payload,
			};
		default:
			return state;
	}
}
