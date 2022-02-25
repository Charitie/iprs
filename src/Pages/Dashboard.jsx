import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Header from "../Components/Header";
import MainContent from "../Components/MainContent";
import Sidebar from "../Components/Sidebar";
import Analytics from "./Analytics";
import Registration from "./Registration/Registration";
import routes from "../Routes";
import ToastALert from "../Components/Toast/Toast";
import Customers from "./Customers/Customers";
import SingleCustomerDetails from "./Customers/SingleCustomerDetails";

const Dashboard = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { path } = useRouteMatch();

	let classes = "";
	if (isOpen) {
		classes = "toggle-sidebar";
	}
	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	const { ANALYTICS, REGISTRATION, CUSTOMERS } = routes;

	return (
		<div className={classes}>
			<Header toggleSidebar={toggleSidebar} classes={classes} />
			<Sidebar />
			<ToastALert />
			<MainContent>
				<Switch>
					<Route path={`${path}/${ANALYTICS}`} exact component={Analytics} />
					<Route path={`${path}/${REGISTRATION}`} exact component={Registration} />
					<Route path={`${path}/${CUSTOMERS}`} exact component={Customers} />
					<Route path={`${path}/${CUSTOMERS}/:id`} exact component={SingleCustomerDetails} />
				</Switch>
			</MainContent>
		</div>
	);
};

export default Dashboard;
