import auth from './axiosConfig';

export function getStaffList(){
  const promise = auth.get('http://localhost:8080/account/staff');
  return promise;
}

export function getStaff(staff_id){
  const promise = auth.get('http://localhost:8080/account/staff/' + staff_id);
  return promise;
}

export function createAccouont(account){
  auth.post('http://localhost:8080/account/staff', account);
}

export function downloadAttach(staff_id) {
  const promise =  auth.get("http://localhost:8080/account/staff/attach/" + staff_id, {responseType: "blob"});
  return promise;
}

export function updateAccount(account){
  auth.post('http://localhost:8080/account/staff/modify', account);
}

export function deleteAccount(staff_id){
  auth.delete('http://localhost:8080/account/staff/' + staff_id);
}

export function getOptime(hospital_code){
  const promise = auth.get("http://localhost:8080/account/optime/" + hospital_code);
  return promise;
}

export function updateOptime(hospitalObj){
  auth.put("http://localhost:8080/account/optime/", hospitalObj);
}