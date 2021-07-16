import auth from './axiosConfig';

export function sendMqttMessage({topic, content}) {
  const promise = auth.get('/sendMqttMessage',{params:{topic, content}});
  return promise;
}