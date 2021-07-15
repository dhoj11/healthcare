import auth from './axiosConfig';

export function getTestList(){
  const promise = auth.get('/test/list');
  return promise
}

export function getPateint(pateint_id){
  const promise = auth.get('/test/patient/' + pateint_id);
  return promise;
}

export function isValidTestListId(test_list_id){
  const promise = auth.get('/test/isValid/' + test_list_id);
  return promise;
}

export function getPateintByTestListId(test_list_id){
  const promise = auth.get('/test/patientBytestlistid/' + test_list_id);
  return promise;
}

export function getTestResult(test_list_id, reception_id){ 
  const promise = auth.get('/test/testresult/', {params:{test_list_id, reception_id}});
  return promise;
}

export function changeTestListState(test_list_id, reception_id, state){
  auth.put('/test/testlist/' , {test_list_id, reception_id, state});
}

export function saveTestResult(testResults){
  auth.put('/test/testresult/', testResults);
}