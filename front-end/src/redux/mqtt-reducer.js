

//상태 초기값 선언
const initialState = {
  client : "",
  topic: ""
};

//액션 타입 선언
const SET_CLIENT = "mqtt/setClient";
const SET_TOPIC = "mqtt/setTopic";

//액션 생성 함수 선언
export const createSetClientAction = (client) => {
  return {type:SET_CLIENT,client};
};
export const createSetTopicAction = (topic) => {
  return {type:SET_TOPIC,topic};
};

//리듀스 선언
const mqttReducer = (state=initialState, action) => {
  if(action.type === SET_CLIENT){
    return {...state, client:action.client};
  }else if(action.type === SET_TOPIC){
    return {...state, topic:action.topic};
  }
  else{
    return state;
  }
};

export default mqttReducer;