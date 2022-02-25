import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";

const Table = ({ data }) => {
	const { path } = useRouteMatch();
	return (
		<table id="customers" className="display stripe hover row-border order-column" style={{ width: "100%" }}>
			<thead>
				<tr>
					<th>No.</th>
					<th>First Name</th>
					<th>Surname</th>
					<th>Gender</th>
					<th>ID No.</th>
					<th>Passport No.</th>
					<th>Passport Expiry</th>
					<th>DOB</th>
				</tr>
			</thead>
			<tbody>
				{data &&
					data.map((el, idx) => {
						return (
							<tr key={el.id}>
								<td>
									<Link to={`${path}/${el.id}`}>{idx + 1}</Link>
								</td>
								<td>{el.firstName}</td>
								<td>{el.surname}</td>
								<td>{el.gender}</td>
								<td>{el.idNumber}</td>
								<td>{el.passportNumber}</td>
								<td>{el.dateOfExpiry}</td>
								<td>{el.dateOfBirth}</td>
							</tr>
						);
					})}
			</tbody>
		</table>
	);
};

export default Table;
