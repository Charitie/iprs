import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import routes from "../Routes";

const Sidebar = () => {
	const { path } = useRouteMatch();
	const { DASHBOARD, ANALYTICS, REGISTRATION, CUSTOMERS } = routes;

	return (
		<aside id="sidebar" className="sidebar">
			<ul className="sidebar-nav" id="sidebar-nav">
				<li className="nav-item">
					<Link className="nav-link" to={`${path}/${CUSTOMERS}`}>
						<i className="bi bi-card-list"></i>
						<span>Customers</span>
					</Link>
				</li>

				<li className="nav-item">
					<Link className="nav-link" to={`${path}/${REGISTRATION}`}>
						<i className="bi bi-journal-text"></i>
						<span>Register</span>
					</Link>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;
