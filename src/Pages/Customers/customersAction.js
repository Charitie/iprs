import { toastAlert } from "../../Components/Toast/toastAction";
import { axiosInstance } from "../../util/axiosInstance";
import {
	CUSTOMER_ERROR,
	CUSTOMER_REQUEST,
	GET_CUSTOMERS_SUCCESS,
	GET_SINGLE_CUSTOMER_DETAILS_BY_ID,
	GET_SINGLE_CUSTOMER_DETAILS_BY_PASSPORT,
	GET_USER_DETAILS,
} from "./customersTypes";

export const customerRequest = () => {
	return { type: CUSTOMER_REQUEST };
};

export const customerError = (error) => {
	return {
		type: CUSTOMER_ERROR,
		payload: error,
	};
};

//Customers
export const getCustomersSuccess = (user) => {
	return { type: GET_CUSTOMERS_SUCCESS, payload: user };
};

export const getCustomers = (page, size) => async (dispatch) => {
	// console.log(page, size);
	dispatch(customerRequest());
	try {
		const response = await axiosInstance.get(`/request/getcustomers/${page}/${size}`);
		// console.log("RES:::", response.data);

		dispatch(getCustomersSuccess(response.data));
	} catch (error) {
		console.log("ERR:::>", error.response);
		dispatch(customerError(error.response));
		// dispatch(toastAlert("Failed to fetch customers", "danger"));
	}
};

//get User photos
export const getUserDetailsSuccess = (userDetails) => {
	return { type: GET_USER_DETAILS, payload: userDetails };
};

export const getUserDetails = (id) => async (dispatch) => {
	// console.log(id);
	dispatch(customerRequest());
	try {
		const response = await axiosInstance.get(`/request/getuserdetails/${id}`);
		// console.log("RES Photos:::", response.data);
		dispatch(getUserDetailsSuccess(response.data));
	} catch (error) {
		console.log("ERR:::>", error.response);
		dispatch(customerError(error.response));
		// dispatch(toastAlert("Failed to fetch User Details", "danger"));
	}
};

//search by id/
export const getCustomerDetailsByIdSuccess = (userPhotos) => {
	return { type: GET_SINGLE_CUSTOMER_DETAILS_BY_ID, payload: userPhotos };
};

export const getCustomerDetailsById = (userDetails) => async (dispatch) => {
	console.log(userDetails);
	dispatch(customerRequest());
	try {
		const response = await axiosInstance.post(`/request/getuserindentitybyid`, userDetails);
		// console.log("RES ID data:::", response.data);
		dispatch(getCustomerDetailsByIdSuccess(response.data));
		dispatch(toastAlert("User fetched successfully", "success"));
	} catch (error) {
		console.log("ERR:::>", error.response);
		const errMessage = error.response.data.message;
		dispatch(customerError(error.response));
		dispatch(toastAlert("Failed to fetch User by ID", "danger"));
	}
};

//search by passport
export const getCustomerDetailsByPassportSuccess = (userPhotos) => {
	return { type: GET_SINGLE_CUSTOMER_DETAILS_BY_PASSPORT, payload: userPhotos };
};

export const getCustomerDetailsByPassport = (passportDetails) => async (dispatch) => {
	// console.log(passportDetails);
	dispatch(customerRequest());
	try {
		const response = await axiosInstance.post(`/request/getuserindentitybypassport`, passportDetails);
		// console.log("RES ID passport:::", response.data.id);
		dispatch(getCustomerDetailsByPassportSuccess(response.data));
		dispatch(toastAlert("User fetched successfully", "success"));
		// dispatch(getUserDetails(response.data.id));
	} catch (error) {
		console.log("ERR:::>", error.response);
		const errMessage = error.response.data.message;
		dispatch(customerError(error.response));
		dispatch(toastAlert("Failed to fetch User by passport", "danger"));
	}
};
