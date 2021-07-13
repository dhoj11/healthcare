import auth from './axiosConfig';

export function getStaffList(){
  const promise = auth.get('/account/staff');
  return promise;
}

export function getStaff(staff_id){
  const promise = auth.get('/account/staff/' + staff_id);
  return promise;
}

export function createAccouont(account){
  auth.post('/account/staff', account);
}

export function downloadAttach(staff_id) {
  const promise =  auth.get("/account/staff/attach/" + staff_id, {responseType: "blob"});
  return promise;
}

export function updateAccount(account){
  auth.post('/account/staff/modify', account);
}

export function deleteAccount(staff_id){
  auth.delete('/account/staff/' + staff_id);
}

export function getOptime(hospital_code){
  const promise = auth.get("/account/optime/" + hospital_code);
  return promise;
}

export function updateOptime(hospitalObj){
  auth.put("/account/optime/", hospitalObj);
}