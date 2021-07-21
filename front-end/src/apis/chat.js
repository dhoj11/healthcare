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
export function updateParticipantDate(room_id){
  return auth.put('/chat/participantdate/'+room_id);
}
export function updateParticipantNotReadNumPlus(participant){
  return auth.put('/chat/participantnotreadnumplus',participant);
}
export function updateParticipantNotReadNumZero(participant){
  return auth.put('/chat/participantnotreadnumzero',participant);
}
export function getCountNotReadNum(staff_id) {
  return auth.get('/chat/countnotreadnum',{params:{staff_id}});
}
export function getOtherStaffId(room_id,staff_id) {
  return auth.get('/chat/participant/otherstaffid',{params:{room_id,staff_id}})
}