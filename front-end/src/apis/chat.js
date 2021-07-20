import auth from './axiosConfig';

//room
export function getRoomId(staffArr){
  return auth.post('/chat/room',staffArr);
}


//chat
export function insertChat(chat){
  return auth.post('/chat',chat);
}
export function getChatListByRoomId(room_id){
  return auth.get('/chat/'+room_id);
}
export function getLastChat(room_id){
  return auth.get('/chat/lastchat/'+room_id);
}

//participant
export function getParticipantList(room_id){
  return auth.get('/chat/participant/'+room_id);
}
export function getParticipant(room_id,staff_id){
  return auth.get('/chat/participantitem',{params:{room_id,staff_id}});
}
export function getParticipantListByStaffId(staff_id){
  return auth.get('/chat/participantlist',{params:{staff_id}});
}