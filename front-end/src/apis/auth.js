import auth from './axiosConfig';

export function login(staff) {
  const promise = auth.post("/auth/login", staff);
  return promise;
}
