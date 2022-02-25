import React from "react";
import jwt_decode from "jwt-decode";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) => {
			if (
				localStorage.getItem("upesiiprstoken") &&
				jwt_decode(localStorage.getItem("upesiiprstoken")).exp < Date.now() / 1000
			) {
				return (
					localStorage.removeItem("upesiiprstoken"),
					localStorage.removeItem("upesiiprsuser"),
					localStorage.removeItem("upesiiprsauth")
				);
			}
			return localStorage.getItem("upesiiprstoken") ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: "/",
						state: { from: props.location },
					}}
				/>
			);
		}}
	/>
);
