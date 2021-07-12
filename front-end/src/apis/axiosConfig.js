
import axios from "axios";


const auth = axios.create({
  baseURL : "http://localhost:8080"
})


export function addAuthHeader(authToken) {
  auth.defaults.headers.common["authToken"] = authToken;
}

export function removeAuthHeader() {
  delete auth.defaults.headers.common["authToken"];
}