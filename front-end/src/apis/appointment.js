import auth from './axiosConfig';

//appointment
export function getTreatmentAppoint(appointment_date) {
  return auth.get("/appointment/treatment",{params:{appointment_date}});
}

export function getAppoint(appointment_date) {
  return auth.get("/appointment",{params:{appointment_date}});
}

export function getAppointListByPatientId(patient_id) {
  return auth.get("/appointment/"+patient_id);
}
export function createTretmentAppointment(appointment){
  return auth.post("/appointment/treatment",appointment);
}
export function cancelTreatmentAppointment(appointment_id) {
  return auth.put("/appointment/treatment/"+appointment_id);
}
export function cancelAppointment(appointment_id) {
  return auth.put("/appointment/test/"+appointment_id);
}

export function getTestAppointmentList(appointment_date,appointment_time){
  return auth.get("/appointment/test",{params:{appointment_date,appointment_time}});
}
export function createTestappointment(appointment){
  return auth.post("/appointment/test",appointment);
}
export function maxAppointmentId(){
  return auth.get("/appointment/maxappointmentid");
}

//patient
export function getPatientList(){
  return auth.get("/appointment/patient");
}
export function getPatientListByName(patient_name){
  return auth.get("/appointment/patientbyname",{params:{patient_name}});
}

//testList
export function getTestCodeList(appointment_id){
  return auth.get("/appointment/testcodelist/"+appointment_id);
}
export function getTestListByPatientId(patient_id){
  return auth.get("/appointment/testlist/"+patient_id);
}
export function testListAppointment(testList){
  return auth.put("/appointment/testlist",testList);
}
export function testListWait(appointment_id){
  return auth.put("/appointment/testlistwait/"+appointment_id);
}

//test
export function getTestByCode(test_code){
  return auth.get("/appointment/testcode",{params:{test_code}});
}

//testdetail
export function getTestDetailList(test_code){
  return auth.get("/appointment/testdetail",{params:{test_code}})
}

//reception
export function getReceptionStaffId(test_list_id,test_code){
  return auth.get("/appointment/reception",{params:{test_list_id,test_code}})
}