import moment from "moment";
import React, { useEffect, useState } from "react";
// import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import "./Registration.css";
import { register } from "./registrationAction";

function Registration() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		dob: "",
		phoneNumber: "",
		email: "",
		userName: "",
		password: "",
		createdBy: "",
		returnURL: "",
	});
	const {
		user: { userId },
	} = useSelector((state) => state.loginRequest);
	const { loading, user } = useSelector((state) => state.registration);
	const dispatch = useDispatch();

	useEffect(() => {
		if (user.code === "200") {
			setFormData({
				firstName: "",
				lastName: "",
				dob: "",
				phoneNumber: "",
				email: "",
				userName: "",
				password: "",
				createdBy: "",
				returnURL: "",
			});
		}
		return () => {};
	}, [user]);

	const { firstName, lastName, dob, phoneNumber, email, password, returnURL } = formData;

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData({ ...formData, [id]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(register({ ...formData, userName: email, dob: moment(dob).format(), createdBy: userId }));
	};

	return (
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">Register New User</h5>
				<form className="row g-3 needs-validation" onSubmit={handleSubmit} novalidation="true">
					<div className="col-md-4">
						<label htmlFor="firstName" className="form-label">
							First name
						</label>
						<input
							type="text"
							className="form-control"
							id="firstName"
							required
							value={firstName}
							onChange={handleChange}
						/>
						<div className="invalid-feedback">First name is required</div>
					</div>
					<div className="col-md-4">
						<label htmlFor="lastName" className="form-label">
							Last name
						</label>
						<input
							type="text"
							className="form-control"
							id="lastName"
							required
							value={lastName}
							onChange={handleChange}
						/>
						<div className="invalid-feedback">Last name is required</div>
					</div>
					<div className="col-md-4">
						<label htmlFor="email" className="form-label">
							Email
						</label>
						<div className="input-group has-validation">
							<span className="input-group-text" id="inputGroupPrepend">
								@
							</span>
							<input
								type="email"
								className="form-control"
								id="email"
								aria-describedby="inputGroupPrepend"
								required
								value={email}
								onChange={handleChange}
							/>
							<div className="invalid-feedback">Email is required</div>
						</div>
					</div>
					<div className="col-md-4">
						<label htmlFor="phoneNumber" className="form-label">
							Phone Number
						</label>
						<input
							type="text"
							className="form-control"
							id="phoneNumber"
							required
							value={phoneNumber}
							onChange={handleChange}
						/>
						<div className="invalid-feedback">Last name is required</div>
					</div>

					<div className="col-md-4">
						<label htmlFor="dob" className="form-label">
							DOB
						</label>
						<input type="date" className="form-control" id="dob" required value={dob} onChange={handleChange} />
						<div className="invalid-feedback">DOB is required</div>
					</div>
					<div className="col-md-4">
						<label htmlFor="returnURL" className="form-label">
							Return URL
						</label>
						<input
							type="text"
							className="form-control"
							id="returnURL"
							required
							value={returnURL}
							onChange={handleChange}
						/>
						<div className="invalid-feedback">Last name is required</div>
					</div>
					<div className="col-md-12">
						<label htmlFor="password" className="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="password"
							required
							value={password}
							onChange={handleChange}
						/>
						<div className="invalid-feedback">Please provide a valid zip.</div>
					</div>
					<div className="col-12">
						<button className="btn btn-primary" type="submit">
							Register User
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Registration;
