import axios from "axios";
import { browserHistory } from "react-router";
import { AUTH_USER } from "./types";
const API_URL = "http://localhost:3090";

export function signinUser({ email, password }) {
  return (dispatch) => {
    //Submit email/password to the server
    axios.post(`${API_URL}/signin`, { email, password })
      .then((response) => {
        //If Request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        localStorage.setItem("token", response.data.token);
        // - Redirect to the route "/feature"
        browserHistory.push("/feature");
      })
      .catch(() => {
        //If Request is bad...
        // - Show an error to the user
      });
  }
}
