import axios from 'axios';

export function getStaffList(){
  const promise = axios.get('http://localhost:8080/account/staff');
  return promise;
}

export function getStaff(staff_id){
  const promise = axios.get('http://localhost:8080/account/staff/' + staff_id);
  return promise;
}

export function createAccouont(account){
  axios.post('http://localhost:8080/account/staff', account);
}

export function downloadAttach(staff_id) {
  const promise =  axios.get("http://localhost:8080/account/staff/attach/" + staff_id, {responseType: "blob"});
  return promise;

}

export function updateAccount(account){
  axios.put('http://localhost:8080/account/staff', account);
}

export function deleteAccount(staff_id){
  axios.delete('http://localhost:8080/account/staff/' + staff_id);
}