import React from "react";

const MainContent = ({children}) => {
	return (
		<main id="main" className="main">
			<div className="pagetitle">
				<h1>Dashboard</h1>
				<nav>
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<a href="index.html">Home</a>
						</li>
						<li className="breadcrumb-item active">Dashboard</li>
					</ol>
				</nav>
			</div>
			{children}
		</main>
	);
};

export default MainContent;
