import axios from "axios";

export const SCRAPE_REQUEST = "SCRAPE_REQUEST";
export const SCRAPE_SUCCESS = "SCRAPE_SUCCESS";
export const SCRAPE_FAILURE = "SCRAPE_FAILURE";

export const scrapeWebsite = (url) => async (dispatch) => {
  dispatch({ type: SCRAPE_REQUEST });

  try {
    const response = await axios.post("http://127.0.0.1:5000/scrape", { url });
    dispatch({ type: SCRAPE_SUCCESS, payload: response.data });
    return response.data;
  } catch (error) {
    dispatch({ type: SCRAPE_FAILURE, payload: error.message });
    return undefined;
  }
};

export const getQuestions = (content, headings) => async (dispatch) => {
  dispatch({ type: "QUESTIONS_REQUEST" });
  try {
    const response = await axios.post(
      "http://127.0.0.1:5000/api/generate-questions",
      { content, headings }
    );
    dispatch({ type: "QUESTIONS_SUCCESS", payload: response.data });
    return response.data;
  } catch (error) {
    dispatch({ type: "QUESTIONS_FAILURE", payload: error.message });
    return undefined;
  }
};
