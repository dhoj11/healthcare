import axios from 'axios';

export function getTestList(){
  const promise = axios.get('http://localhost:8080/test/list');
  return promise
}

export function getPateint(pateint_id){
  const promise = axios.get('http://localhost:8080/test/patient/' + pateint_id);
  return promise;
}

export function isValidTestListId(test_list_id){
  const promise = axios.get('http://localhost:8080/test/isValid/' + test_list_id);
  return promise;
}

export function getPateintByTestListId(test_list_id){
  const promise = axios.get('http://localhost:8080/test/patientBytestlistid/' + test_list_id);
  return promise;
}

export function getTestResult(test_list_id){
  const promise = axios.get('http://localhost:8080/test/testresult/' + test_list_id);
  return promise;
}

export function changeTestListState(test_list_id, state){
  axios.put('http://localhost:8080/test/testlist/' , {test_list_id, state});
}

export function saveTestResult(testResults){
  axios.put('http://localhost:8080/test/testresult/', testResults);
}