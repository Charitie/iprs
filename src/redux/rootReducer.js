import { combineReducers } from "redux";
import loginReducer from "../Pages/Login/loginReducer";
import registrationReducer from "../Pages/Registration/registrationReducer";
import toastReducer from "../Components/Toast/toastReducer";
import customersReducer from "../Pages/Customers/customersReducer";

export default combineReducers({
	loginRequest: loginReducer,
	registration: registrationReducer,
	toast: toastReducer,
	customers: customersReducer
});
