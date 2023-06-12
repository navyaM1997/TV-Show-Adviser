import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";
export const TVShowAPI = async () => {
  const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
  // console.log(response.data.results);
  return response.data.results;
};

export const TVShowRecommendation = async (tvShowId) => {
  const response = await axios.get(
    `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
  );
  // console.log(response.data.results);
  return response.data.results;
};

export const TVFetchByTitle = async (title) => {
  const response = await axios.get(
    `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
  );
  // console.log(response.data.results);
  return response.data.results;
};
