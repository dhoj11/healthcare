import auth from './axiosConfig';

export function getAppointmentList(){
  //오늘 날짜에 해당하는 예약 리스트, 환자 정보까지
  const promise = auth.get("/administration/appointment");
  return promise;
}

export function changeAppointmentState(appointment_id, appointment_state){
  //오늘 날짜에 해당하는 예약 리스트, 환자 정보까지
  const promise = auth.put("/administration/appointment/" + appointment_id,  appointment_state);
  return promise;
}
export function addReceptionAfterAppointment(appointment_id) {
  const promise = auth.post("/administration/appointment/reception/" + appointment_id);
  return promise;
}

export function getPatient(patient_id) {
  const promise = auth.get("/administration/" + patient_id);
  return promise;
}

export function getAppointmentListByState(appointment_state) {
  const promise = auth.get("/administration/appointment/state", {params:{appointment_state}});
  return promise;
}

export function getReceptionList(reception_kind) {
  const promise = auth.get("/administration/reception", {params:{reception_kind}});
  return promise;
}

export function getReceptionListByState(reception_state) {
  const promise = auth.get("/administration/reception/state", {params:{reception_state}});
  return promise;
}

export function changeReceptionState(reception_id, reception_state) {
  const promise = auth.put("/administration/reception/" + reception_id, reception_state);
  return promise;
}

export function getPatientList() {
  const promise = auth.get("/administration/patient");
  return promise;
}

export function searchPatient(patient_name) {
  const promise = auth.get("/administration/patient/searching", {params:{patient_name}});
  return promise;
}

export function addNewPatient(newPatient) {
  const promise = auth.post("/administration/patient/new", newPatient);
  return promise;
}

export function checkAppointmentList(patient_id) {
  const promise = auth.get("/administration/patient/appointment", {params:{patient_id}});
  return promise;
}

export function checkTreatmentList(patient_id) {
  const promise = auth.get("/administration/patient/treatment", {params:{patient_id}});
  return promise;
}

export function checkPrescriptionList(patient_id) {
  const promise = auth.get("/administration/patient/prescription", {params:{patient_id}});
  return promise;
}

export function checkTestList(patient_id) {
  const promise = auth.get("/administration/patient/test", {params:{patient_id}});
  return promise;
}

export function getDoctorNameList() {
  const promise = auth.get("/administration/staff");
  return promise;
}

export function addReceptionAfterVisit(reception) {
  const promise = auth.post("/administration/reception/visit", reception);
  return promise;
}

export function isReserved(staff_id, appointment_date) {
  const promise = auth.get("/administration/appointment/treatment/time", {params:{staff_id, appointment_date}});
  return promise;
}

export function addNewAppointment(appointment) {
  const promise = auth.post("/administration/appointment", appointment);
  return promise;
}

export function getTestCodesByReception(reception_id) {
  const promise = auth.get("/administration/test/testcode", {params:{reception_id}});
  return promise;
}

export function CountbyAppointment(appointment_date) {
  const promise = auth.get("/administration/appointment/test/time", {params:{appointment_date}});
  return promise;
}

export function appointmentTestList(testList) {
  const promise = auth.put("/administration/appointment/test/update", testList);
  return promise;
}

export function changeTestStateToAppointment(test_list_id) {
  const promise = auth.put("/administration/appointment/test/state", test_list_id);
  return promise;
}

export function requestTest(testCodes) {
  const promise = auth.put("/administration/test/request", testCodes);
  return promise;
}
