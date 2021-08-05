/** @format */

import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../api.js";

export const loadDetails = (id) => async (dispatch) => {
	dispatch({
		type: "LOADING_DETAIL",
	});

	// let axiosConfig = {
	// 	headers: {
	// 		"Content-Type": "application/json;charset=UTF-8",
	// 		"Access-Control-Allow-Origin": "*",
	// 	},
	// };
	const detailData = await axios.get(gameDetailsURL(id));

	const screenShotData = await axios.get(gameScreenshotURL(id));
	dispatch({
		type: "GET_DETAIL",
		payload: {
			game: detailData.data,
			screens: screenShotData.data,
		},
	});
};
