
import axios from "axios";


const auth = axios.create({
  baseURL : "http://localhost:8080"
  //baseURL : "http://kosa3.iptime.org:50004"
})

export function addAuthHeader(authToken) {
  auth.defaults.headers.common["authToken"] = authToken;
}

export function removeAuthHeader() {
  delete auth.defaults.headers.common["authToken"];
}

export default auth;

