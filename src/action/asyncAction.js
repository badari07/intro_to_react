// @flow

import axios from "axios";
import { addApiData } from "./actionCreaters";

export default (imdbID: string) => (dispatch: Function) => {
  axios
    .get(`http://localhost:3000/${imdbID}`)
    .then(response => {
      dispatch(addApiData(response.data));
    })
    .catch(error => {
      console.error("axios error", error); // eslint-disable-line no-console
    });
};
