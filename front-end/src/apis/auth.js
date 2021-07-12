import axios from "axios";

export function login(staff) {
  const promise = axios.post("http://localhost:8080/auth/login", staff);
  return promise;
}
