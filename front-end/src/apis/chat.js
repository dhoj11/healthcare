import auth from './axiosConfig';

export function getRoomId(staffArr){
  const promise = auth.post('/chat/room',staffArr);
  return promise;
}