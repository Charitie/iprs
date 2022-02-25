import axios from "axios";

// const baseURL = "https://localhost:5010/api"; // local dev

const baseURL = "http://192.168.50.10:22916/api" // uat

export const axiosInstance = axios.create({
	baseURL,
	headers: { "Content-Type": "application/json", Accept: "application/json", crossDomain: true },
});

axiosInstance.interceptors.request.use((config) => {
	const accessToken = localStorage.getItem("upesiiprstoken");
	if (accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}
	return config;
});
