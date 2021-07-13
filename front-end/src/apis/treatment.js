import axios from 'axios';

export function getPateintList(staff_id){
  const promise = axios.get('http://localhost:8080/treatment/patient/' + staff_id);
  return promise;
}

export function getTreatmentList(patient_id){
  const promise = axios.get('http://localhost:8080/treatment/treatments/' + patient_id);
  return promise;
}

export function isTreatmentComplete(patient_id){
  const promise = axios.get('http://localhost:8080/treatment/treatmentIsComplete/' + patient_id);
  return promise;
}

export function getTreatmentRecord(treatment_id){
  const promise = axios.get('http://localhost:8080/treatment/record/' + treatment_id);
  return promise;
}

export function getTreatmentComment(treatment_id){
  const promise = axios.get('http://localhost:8080/treatment/comment/' + treatment_id);
  return promise;
}

export function getTreatmentDiagnoses(treatment_id){
  const promise = axios.get('http://localhost:8080/treatment/diagnoses/' + treatment_id);
  return promise;
}

export function getSearchDiseases(disease_name){
  const promise = axios.get('http://localhost:8080/treatment/diseases/' + disease_name);
  return promise;
}

export function getTreatmentPrescriptions(treatment_id){
  const promise = axios.get('http://localhost:8080/treatment/prescriptions/' + treatment_id);
  return promise;
}

export function getSearchMedicine(medicine_name){
  const promise = axios.get('http://localhost:8080/treatment/medicines/' + medicine_name);
  return promise;
}

export function getTreatmentTestList(treatment_id){
  const promise = axios.get('http://localhost:8080/treatment/testlist/' + treatment_id);
  return promise;
}

export function getSearchTests(test_name){
  const promise = axios.get('http://localhost:8080/treatment/tests/' + test_name);
  return promise;
}

export function getTreatmentSympton(treatment_id){
  const promise = axios.get('http://localhost:8080/treatment/sympton/' + treatment_id);
  return promise;
}

export function saveTreatment(treatmentObj){
  axios.post('http://localhost:8080/treatment/save', treatmentObj);
}

export function getTreatmentTestResults(treatment_id){
  const promise = axios.get('http://localhost:8080/treatment/testresult/' + treatment_id);
  return promise;
}

export function getPrevDoctorName(treatment_id){
  const promise = axios.get('http://localhost:8080/treatment/staffname/' + treatment_id);
  return promise;
}
