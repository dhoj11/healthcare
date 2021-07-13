import axios from "axios";

//appointment
export function getTreatmentAppoint(appointment_date) {
  return axios.get("http://localhost:8080/appointment/treatment",{params:{appointment_date}});
}

export function getAppoint(appointment_date) {
  return axios.get("http://localhost:8080/appointment",{params:{appointment_date}});
}

export function getAppointListByPatientId(patient_id) {
  return axios.get("http://localhost:8080/appointment/"+patient_id);
}
export function createTretmentAppointment(appointment){
  return axios.post("http://localhost:8080/appointment/treatment",appointment);
}
export function cancelTreatmentAppointment(appointment_id) {
  return axios.put("http://localhost:8080/appointment/treatment/"+appointment_id);
}
export function cancelAppointment(appointment_id) {
  return axios.put("http://localhost:8080/appointment/test/"+appointment_id);
}

export function getTestAppointmentList(appointment_date,appointment_time){
  return axios.get("http://localhost:8080/appointment/test",{params:{appointment_date,appointment_time}});
}
export function createTestappointment(appointment){
  return axios.post("http://localhost:8080/appointment/test",appointment);
}
export function maxAppointmentId(){
  return axios.get("http://localhost:8080/appointment/maxappointmentid");
}

//patient
export function getPatientList(){
  return axios.get("http://localhost:8080/appointment/patient");
}
export function getPatientListByName(patient_name){
  return axios.get("http://localhost:8080/appointment/patientbyname",{params:{patient_name}});
}

//testList
export function getTestCodeList(appointment_id){
  return axios.get("http://localhost:8080/appointment/testcodelist/"+appointment_id);
}
export function getTestListByPatientId(patient_id){
  return axios.get("http://localhost:8080/appointment/testlist/"+patient_id);
}
export function testListAppointment(testList){
  return axios.put("http://localhost:8080/appointment/testlist",testList);
}
export function testListWait(appointment_id){
  return axios.put("http://localhost:8080/appointment/testlistwait/"+appointment_id);
}

//test
export function getTestByCode(test_code){
  return axios.get("http://localhost:8080/appointment/testcode",{params:{test_code}});
}

//testdetail
export function getTestDetailList(test_code){
  return axios.get("http://localhost:8080/appointment/testdetail",{params:{test_code}})
}

//reception
export function getReceptionStaffId(test_list_id,test_code){
  return axios.get("http://localhost:8080/appointment/reception",{params:{test_list_id,test_code}})
}