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

//patient
export function getPatientList(){
  return axios.get("http://localhost:8080/appointment/patient");
}
export function getPatientListByName(patient_name){
  return axios.get("http://localhost:8080/appointment/patientbyname",{params:{patient_name}});
}