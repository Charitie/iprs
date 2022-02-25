import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import ToastAlert from "../../Components/Toast/Toast";
import routes from "../../Routes";
import { login } from "./loginActions";

const Login = () => {
	const [formData, setFormData] = useState({ email: "", password: "" });
	const { loading, isAuthenticated } = useSelector((state) => state.loginRequest);
	const dispatch = useDispatch();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login(formData));
	};

	const { email, password } = formData;
	const { DASHBOARD, CUSTOMERS } = routes;
	if (isAuthenticated) {
		return <Redirect to={`${DASHBOARD}/${CUSTOMERS}`} />;
	}

	return (
		<main>
			<div className="container">
				<ToastAlert />

				<section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
								<div className="d-flex justify-content-center py-4">
									<a href="index.html" className="logo d-flex align-items-center w-auto">
										<img src="assets/img/logo.png" alt="" />
										<span className="d-none d-lg-block">Upesi IPRS</span>
									</a>
								</div>

								<div className="card mb-3">
									<div className="card-body">
										<div className="pt-4 pb-2">
											<h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
											<p className="text-center small">Enter your username & password to login</p>
										</div>

										<form className="row g-3 needs-validation" onSubmit={handleSubmit}>
											<div className="col-12">
												<label htmlFor="yourUsername" className="form-label">
													Username
												</label>
												<div className="input-group has-validation">
													<span className="input-group-text" id="inputGroupPrepend">
														@
													</span>
													<input
														type="text"
														name="email"
														className="form-control"
														id="yourUsername"
														required
														value={email}
														onChange={handleChange}
													/>
													<div className="invalid-feedback">Please enter your username.</div>
												</div>
											</div>

											<div className="col-12">
												<label htmlFor="yourPassword" className="form-label">
													Password
												</label>
												<input
													type="password"
													name="password"
													className="form-control"
													id="yourPassword"
													required
													value={password}
													onChange={handleChange}
												/>
												<div className="invalid-feedback">Please enter your password!</div>
											</div>

											<div className="col-12">
												<div className="form-check">
													<input
														className="form-check-input"
														type="checkbox"
														name="remember"
														value="true"
														id="rememberMe"
													/>
													<label className="form-check-label" htmlFor="rememberMe">
														Remember me
													</label>
												</div>
											</div>
											<div className="col-12">
												<button className="btn btn-primary w-100" type="submit">
													Login
												</button>
											</div>
											<div className="col-12">
												<p className="small mb-0">
													Don't have account? <a href="pages-register.html">Create an account</a>
												</p>
											</div>
										</form>
									</div>
								</div>

								<div className="credits"></div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Login;
