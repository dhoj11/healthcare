import axios from "axios";

export function login(staff) {
  //const promise = axios.post("http://kosa3.iptime.org:50004/auth/login", staff);
  const promise = axios.post("http://localhost:8080/auth/login", staff);
  return promise;
}
