import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../api.js";

export const loadDetails = (id, screenshots) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
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
