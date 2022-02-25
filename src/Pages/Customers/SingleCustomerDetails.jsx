import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { getUserDetails } from "./customersAction";

const SingleCustomerDetails = () => {
	const { userDetails } = useSelector((state) => state.customers);
	const dispatch = useDispatch();
	const {
		params: { id },
	} = useRouteMatch();

	console.log("Params:", id);
	useEffect(() => {
		dispatch(getUserDetails(id));
		return () => {};
	}, [id]);

	const { firstName, idNumber, passportNumber, gender, citizenship, dateOfExpiry, dateOfBirth } = userDetails;
	return (
		<div className="card">
			<div className="card-body">
				<div className="row">
					<div class="card col-md-6 mt-3">
						<div class="card-body">
							<h5 className="card-title">Get User Details</h5>
							<ul class="list-group">
								<li class="list-group-item">
									<i class="bi bi-star me-1 text-primary"></i> <strong>First Name: </strong>
									{firstName}
								</li>
								<li class="list-group-item">
									<i class="bi bi-star me-1 text-primary"></i> <strong>ID Number: </strong>
									{idNumber}
								</li>
								<li class="list-group-item">
									<i class="bi bi-star me-1 text-primary"></i> <strong>Passport Number: </strong>
									{passportNumber}
								</li>
								<li class="list-group-item">
									<i class="bi bi-star me-1 text-primary"></i> <strong>Gender: </strong>
									{gender}
								</li>
								<li class="list-group-item">
									<i class="bi bi-star me-1 text-primary"></i> <strong>Citizenship: </strong>
									{citizenship}
								</li>
								<li class="list-group-item">
									<i class="bi bi-star me-1 text-primary"></i> <strong>Date Of Expiry: </strong>
									{dateOfExpiry}
								</li>
								<li class="list-group-item">
									<i class="bi bi-star me-1 text-primary"></i> <strong>Date Of Birth: </strong>
									{dateOfBirth}
								</li>
							</ul>
							<div className="card col-md-12 mt-4">
								<div className="card-body" style={{ height: "100%" }}>
									<h5 className="card-title p-2">Signature Photo</h5>
									<img
										src={`data:image/jpeg;base64,${userDetails.signature}`}
										style={{ width: "200px", height: "20%" }}
										className="img-fluid"
										alt="..."
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6">
						<h5 className="card-title">Photos</h5>
						<div className="card mt-0" style={{ width: "250px", height: "270px", margin: "1rem" }}>
							<div className="card-body" style={{ height: "100%" }}>
								<h5 className="card-title p-2">ID Photo</h5>
								<img
									src={`data:image/jpeg;base64,${userDetails.photo}`}
									style={{ width: "200px", height: "80%" }}
									className="img-fluid"
									alt="..."
								/>
							</div>
						</div>
						<div className="card" style={{ width: "250px", height: "270px", margin: "1rem" }}>
							<div className="card-body p-0" style={{ height: "100%" }}>
								<h5 className="card-title p-2">Passport </h5>
								<img
									src={`data:image/jpeg;base64,${userDetails.photoFromPassport}`}
									className="card-img-bottom"
									style={{ width: "200px", height: "80%" }}
									alt="..."
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleCustomerDetails;
