import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";
import DataTable from "datatables.net";
import Table from "../../Components/Table";
import {
	getCustomerDetails,
	getCustomerDetailsById,
	getCustomerDetailsByPassport,
	getCustomers,
	getUserPhotos,
} from "./customersAction";
import { Redirect } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

const Customers = () => {
	const [data, setData] = useState({
		page: 1,
		size: 200,
	});
	const [id, setId] = useState("");

	const [formData, setFormData] = useState({ Nationality: "", IdNumber: "" });
	const [passportFormData, setPassportFormData] = useState({ PassportNumber: "", idNumberPassport: "" });

	const { loading, customers, userDetailsById, isFetchedById, isFetchedByPassport, userDetailsByPassport } =
		useSelector((state) => state.customers);
	const dispatch = useDispatch();
	// console.log("DETAILS BY ID:::", isFetchedById);
	const { page, size } = data;

	// const prevPage = useRef(page);
	// const prevSize = useRef(size);

	useEffect(() => {
		const table = $(document).ready(function () {
			$("#customers").DataTable({
				dom: "Brfltip",
				scrollX: true,
			});
		});

		// if (!isDeepEqual(prevPage.current, page) || !isDeepEqual(prevSize.current, size)) {
		// 	dispatch(getCustomers(page, size));
		// 	prevPage.current = page;
		// 	prevSize.current = size;
		// }

		dispatch(getCustomers(page, size));

		return () => {
			// table.destroy();
			$("#datatable").dataTable().fnDestroy();
		};
	}, [page, size]);

	const handleChange = (e) => {
		const { id, value } = e.target;
		setId(value);
		setFormData({ ...formData, [id]: value });
		setPassportFormData({ ...passportFormData, [id]: value });
	};

	// const isDeepEqual = (prevData, data) => prevData === data;

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getCustomerDetailsByPassport({ PassportNumber, IdNumber: idNumberPassport }));
	};

	const handleIDSubmit = (e) => {
		e.preventDefault();

		dispatch(getCustomerDetailsById(formData));
	};
	// console.log("data", customers);
	const { IdNumber, Nationality } = formData;
	const { idNumberPassport, PassportNumber } = passportFormData;
	const { path } = useRouteMatch();

	if (isFetchedById) {
		return <Redirect to={`${path}/${userDetailsById.id}`} />;
	}

	if (isFetchedByPassport) {
		console.log("ID", userDetailsById.id);
		return <Redirect to={`${path}/${userDetailsByPassport.id}`} />;
	}
	return (
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">Get User Details</h5>

				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item" role="presentation">
						<button
							className="nav-link active"
							id="home-tab"
							data-bs-toggle="tab"
							data-bs-target="#home"
							type="button"
							role="tab"
							aria-controls="home"
							aria-selected="true"
						>
							Find by national ID
						</button>
					</li>
					<li className="nav-item" role="presentation">
						<button
							className="nav-link"
							id="profile-tab"
							data-bs-toggle="tab"
							data-bs-target="#profile"
							type="button"
							role="tab"
							aria-controls="profile"
							aria-selected="false"
						>
							Find By Passport
						</button>
					</li>
				</ul>
				<div className="tab-content pt-2 mb-5" id="myTabContent">
					<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
						<form className="row g-3 needs-validation" onSubmit={handleIDSubmit} novalidation="true">
							<div className="col-md-4">
								<label htmlFor="Nationality" className="form-label">
									Nationality
								</label>
								<select className="form-control" id="Nationality" required value={Nationality} onChange={handleChange}>
									<option value="">Select nationality...</option>
									<option value="KENYA">Kenya</option>
									<option value="ALIEN">Alien</option>
								</select>
								<div className="invalid-feedback">Page no. is required</div>
							</div>
							<div className="col-md-4">
								<label htmlFor="IdNumber" className="form-label">
									ID Number
								</label>
								<input
									type="number"
									className="form-control"
									id="IdNumber"
									required
									value={IdNumber}
									onChange={handleChange}
								/>
								<div className="invalid-feedback">Page no. is required</div>
							</div>
							<div className="col-md-2">
								<label htmlFor="page" className="form-label" style={{ color: "transparent" }}>
									Search ID
								</label>
								<input className="form-control btn btn-primary" type="submit" value="Search ID" />
							</div>
						</form>
					</div>
					<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
						<form className="row g-3 needs-validation" onSubmit={handleSubmit} novalidation="true">
							<div className="col-md-4">
								<label htmlFor="idNumber" className="form-label">
									ID Number
								</label>
								<input
									type="number"
									className="form-control"
									id="idNumberPassport"
									required
									value={idNumberPassport}
									onChange={handleChange}
								/>
								<div className="invalid-feedback">Page no. is required</div>
							</div>
							<div className="col-md-4">
								<label htmlFor="PassportNumber" className="form-label">
									Passport Number
								</label>
								<input
									type="text"
									className="form-control"
									id="PassportNumber"
									required
									value={PassportNumber}
									onChange={handleChange}
								/>
								<div className="invalid-feedback">Page no. is required</div>
							</div>
							<div className="col-md-2">
								<label htmlFor="page" className="form-label" style={{ color: "transparent" }}>
									Search Passport
								</label>
								<input className="form-control btn btn-primary" type="submit" value="Search Passport" />
							</div>
						</form>
					</div>
				</div>
				<hr />
				<Table data={customers} />
			</div>
		</div>
	);
};

export default Customers;
