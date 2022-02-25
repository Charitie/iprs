import React , {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import{removeToastAlert} from "./toastAction";
import "./Toast.css";

function ToastALert({ classes }) {
	const {
		show,
		option: { message, alertType, timeout },
	} = useSelector((state) => state.toast);
	const dispatch = useDispatch();

	useEffect(()=>{
		const timer = setTimeout(() => {
			dispatch(removeToastAlert())
		}, timeout);

		return () => {
			clearTimeout(timer);
		};
	},[show])

	const alertIcon = () => {
		if (alertType === "danger") {
			return (	<div className={`alert alert-danger alert-dismissible fade show`} role="alert">
			<i className="bi bi-exclamation-octagon me-1"></i>
			{message}
			<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
		</div>)
		} else if (alertType === "success") {
			return 	(<div className={`alert alert-success alert-dismissible fade show`} role="alert">
			<i className="bi bi-check-circle me-1"></i>
			{message}
			<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
		</div>)
		}
	};

	return show && <>{alertIcon()}</> ;
}

export default ToastALert;
