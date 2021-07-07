import axios from 'axios';

export function getAppointmentList(){
  //오늘 날짜에 해당하는 예약 리스트, 환자 정보까지
  const promise = axios.get("http://localhost:8080/administration/appointment");
  return promise;
}

export function changeAppointmentState(appointment_id, appointment_state){
  //오늘 날짜에 해당하는 예약 리스트, 환자 정보까지
  const promise = axios.put("http://localhost:8080/administration/appointment/" + appointment_id,  appointment_state);
  return promise;
}
export function addReceptionAfterAppointment(appointment_id) {
  const promise = axios.post("http://localhost:8080/administration/appointment/reception/" + appointment_id);
  return promise;
}

export function getPatient(patient_id) {
  const promise = axios.get("http://localhost:8080/administration/" + patient_id);
  return promise;
}

export function getAppointmentListByState(appointment_state) {
  const promise = axios.get("http://localhost:8080/administration/appointment/state", {params:{appointment_state}});
  return promise;
}

export function getReceptionList() {
  const promise = axios.get("http://localhost:8080/administration/reception");
  return promise;
}

export function getReceptionListByState(reception_state) {
  const promise = axios.get("http://localhost:8080/administration/reception/state", {params:{reception_state}});
  return promise;
}

export function changeReceptionState(reception_id, reception_state) {
  const promise = axios.put("http://localhost:8080/administration/reception/" + reception_id, reception_state);
  return promise;
}

export function getPatientList() {
  const promise = axios.get("http://localhost:8080/administration/patient");
  return promise;
}

export function searchPatient(patient_name) {
  const promise = axios.get("http://localhost:8080/administration/patient/searching", {params:{patient_name}});
  return promise;
}

export function addNewPatient(newPatient) {
  const promise = axios.post("http://localhost:8080/administration/patient/new", newPatient);
  return promise;
}

export function checkAppointmentList(patient_id) {
  const promise = axios.get("http://localhost:8080/administration/patient/appointment", {params:{patient_id}});
  return promise;
}

export function checkTreatmentList(patient_id) {
  const promise = axios.get("http://localhost:8080/administration/patient/treatment", {params:{patient_id}});
  return promise;
}

export function checkPrescriptionList(patient_id) {
  const promise = axios.get("http://localhost:8080/administration/patient/prescription", {params:{patient_id}});
  return promise;
}

export function checkTestList(patient_id) {
  const promise = axios.get("http://localhost:8080/administration/patient/test", {params:{patient_id}});
  return promise;
}

export function getDoctorNameList() {
  const promise = axios.get("http://localhost:8080/administration/staff");
  return promise;
}

export function addReceptionAfterVisit(reception) {
  const promise = axios.post("http://localhost:8080/administration/reception/visit", reception);
  return promise;
}

export function isReserved(staff_id, appointment_date) {
  const promise = axios.get("http://localhost:8080/administration/appointment/time", {params:{staff_id, appointment_date}});
  return promise;
}

export function addNewTreatmentAppointment(appointment) {
  const promise = axios.post("http://localhost:8080/administration/appointment/treatment", appointment);
  return promise;
}
