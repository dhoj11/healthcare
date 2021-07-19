import auth from './axiosConfig';

export function getDZNotice(){
  const promise = auth.get('/dz/notice');
  return promise
}