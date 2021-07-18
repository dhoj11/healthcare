import auth from './axiosConfig';

export function getPateintList(staff_id){
  const promise = auth.get('/treatment/patient/' + staff_id);
  return promise;
}

export function getTreatmentList(patient_id){
  const promise = auth.get('/treatment/treatments/' + patient_id);
  return promise;
}

export function getNowTreatment(patient_id, staff_id){
  const promise = auth.get('/treatment/nowtreatment', {params:{patient_id, staff_id}})
  return promise;
}

export function isTreatmentComplete(patient_id, staff_id){
  const promise = auth.get('/treatment/treatmentIsComplete', {params:{patient_id, staff_id}});
  return promise;
}

export function getTreatmentRecord(treatment_id){
  const promise = auth.get('/treatment/record/' + treatment_id);
  return promise;
}

export function getTreatmentComment(treatment_id){
  const promise = auth.get('/treatment/comment/' + treatment_id);
  return promise;
}

export function getTreatmentDiagnoses(treatment_id){
  const promise = auth.get('/treatment/diagnoses/' + treatment_id);
  return promise;
}

export function getSearchDiseases(disease_name){
  const promise = auth.get('/treatment/diseases/' + disease_name);
  return promise;
}

export function getTreatmentPrescriptions(treatment_id){
  const promise = auth.get('/treatment/prescriptions/' + treatment_id);
  return promise;
}

export function getSearchMedicine(medicine_name){
  const promise = auth.get('/treatment/medicines/' + medicine_name);
  return promise;
}

export function getTreatmentTestList(treatment_id){
  const promise = auth.get('/treatment/testlist/' + treatment_id);
  return promise;
}

export function getSearchTests(test_name){
  const promise = auth.get('/treatment/tests/' + test_name);
  return promise;
}

export function getTreatmentSympton(treatment_id){
  const promise = auth.get('/treatment/sympton/' + treatment_id);
  return promise;
}

export function saveTreatment(treatmentObj){
  console.log(">>>>>");
  auth.post('/treatment/save', treatmentObj);
}

export function getTreatmentTestResults(treatment_id){
  const promise = auth.get('/treatment/testresult/' + treatment_id);
  return promise;
}

export function getPrevDoctorName(treatment_id){
  const promise = auth.get('/treatment/staffname/' + treatment_id);
  return promise;
}

export function getPatientName(treatment_id){
  const promise = auth.get('/treatment/patientname/' + treatment_id);
  return promise;
}

export function insertTestList(testListObj){
  auth.post('/treatment/testlist', testListObj);
}

export function updateAppointmentAndReceptionState(treatment_id){
  auth.put('/treatment/appointment-and-reception-state/' + treatment_id);
}