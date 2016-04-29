import axios from "axios";
const API_URL = "http://localhost:3090";

export function signinUser({ email, password }) {
  return (dispatch) => {
    //Submit email/password to the server
    axios.post(`${API_URL}/signin`, { email, password });

    //If Request is good...
    // - Update state to indicate user is authenticated
    // - Save the JWT token
    // - Redirect to the route "/feature"

    //If Request is bad...
    // - Show an error to the user
  }
}
