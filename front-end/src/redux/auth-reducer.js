//상태 초기값 선언
const initialState = {
  staff_id:"",
  authToken:"",
  staff_name:"",
  staff_authority:""
};

//액션 타입 선언
const SET_STAFF_ID = "auth/setStaffId";
const SET_AUTH_TOKEN = "auth/setAuthToken";
const SET_STAFF_NAME = "auth/setStaffName";
const SET_STAFF_AUTHORITY = "auth/setStaffAuthority";
//액션 생성 함수 선언
export const createSetStaffIdAction = (staff_id) => {
  return {type:SET_STAFF_ID,staff_id};
};
export const createSetAuthTokenAction = (authToken) => {
  return {type:SET_AUTH_TOKEN,authToken};
};
export const createSetStaffNameAction = (staff_name) => {
  return {type:SET_STAFF_NAME,staff_name};
};
export const createSetStaffAuthorityAction = (staff_authority) => {
  return {type:SET_STAFF_AUTHORITY,staff_authority};
};

//리듀스 선언
const authReducer = (state=initialState,action) => {
  if(action.type === SET_STAFF_ID){
    return {...state, staff_id:action.staff_id};
  } else if(action.type === SET_AUTH_TOKEN) {
    return {...state, authToken:action.authToken}
  } else if(action.type === SET_STAFF_NAME){
    return {...state, staff_name:action.staff_name};
  } else if(action.type === SET_STAFF_AUTHORITY){
    return {...state, staff_authority:action.staff_authority};
  } else{
    return state;
  }
};

export default authReducer;