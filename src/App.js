import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login/Login";
import routes from "./Routes";
import { PrivateRoute } from "./Routes/privateRoutes";

function App() {
	const {LOGIN, DASHBOARD}=routes
	return (
		<Router>
			<Switch>
				<Route path={LOGIN} exact component={Login} />
				<PrivateRoute path={DASHBOARD} component={Dashboard} />
				{/* <Route path="/dashboard" component={Dashboard} /> */}
			</Switch>
		</Router>
	);
}

export default App;
