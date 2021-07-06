/** @format */

import axios from "axios";
import {
	popularGamesURL,
	upcomingGamesURL,
	newGamesURL,
	searchGameURL,
} from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {
	//FETCH AXIOS

	// let axiosConfig = {
	// 	headers: {
	// 		"Content-Type": "application/json;charset=UTF-8",
	// 		"Access-Control-Allow-Origin": "*",
	// 	},
	// };
	const popularData = await axios.get(popularGamesURL());
	console.log("popilargame url", popularGamesURL());
	const newGamesData = await axios.get(newGamesURL());
	console.log("newGameDAta url", newGamesURL());
	const upcomingData = await axios.get(upcomingGamesURL());
	console.log("upcoming url", upcomingGamesURL());
	dispatch({
		type: "FETCH_GAMES",
		payload: {
			popular: popularData.data.results,
			upcoming: upcomingData.data.results,
			newGames: newGamesData.data.results,
		},
	});
};

export const fetchSearch = (game_name) => async (dispatch) => {
	const searchGames = await axios.get(searchGameURL(game_name));

	dispatch({
		type: "FETCH_SEARCHED",
		payload: {
			searched: searchGames.data.results,
		},
	});
};
