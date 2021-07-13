import auth from './axiosConfig';

//appointment
export function getTreatmentAppoint(appointment_date) {
  return auth.get("http://localhost:8080/appointment/treatment",{params:{appointment_date}});
}

export function getAppoint(appointment_date) {
  return auth.get("http://localhost:8080/appointment",{params:{appointment_date}});
}

export function getAppointListByPatientId(patient_id) {
  return auth.get("http://localhost:8080/appointment/"+patient_id);
}
export function createTretmentAppointment(appointment){
  return auth.post("http://localhost:8080/appointment/treatment",appointment);
}
export function cancelTreatmentAppointment(appointment_id) {
  return auth.put("http://localhost:8080/appointment/treatment/"+appointment_id);
}
export function cancelAppointment(appointment_id) {
  return auth.put("http://localhost:8080/appointment/test/"+appointment_id);
}

export function getTestAppointmentList(appointment_date,appointment_time){
  return auth.get("http://localhost:8080/appointment/test",{params:{appointment_date,appointment_time}});
}

//patient
export function getPatientList(){
  return auth.get("http://localhost:8080/appointment/patient");
}
export function getPatientListByName(patient_name){
  return auth.get("http://localhost:8080/appointment/patientbyname",{params:{patient_name}});
}

//testList
export function getTestCodeList(appointment_id){
  return auth.get("http://localhost:8080/appointment/testcodelist/"+appointment_id);
}
export function getTestListByPatientId(patient_id){
  return auth.get("http://localhost:8080/appointment/testlist/"+patient_id);
}

//test
export function getTestByCode(test_code){
  return auth.get("http://localhost:8080/appointment/testcode",{params:{test_code}});
}

//testdetail
export function getTestDetailList(test_code){
  return auth.get("http://localhost:8080/appointment/testdetail",{params:{test_code}})
}