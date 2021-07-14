import axios from "axios";

//notice
export function getNoticeList(){
  return axios.get("http://localhost:8080/dashboard/notice");
}
export function createNotice(notice){
  return axios.post("http://localhost:8080/dashboard/notice",notice);
}

export function deleteNotice(notice_id){
  return axios.delete("http://localhost:8080/dashboard/notice/"+notice_id);
}
export function getNotice(notice_id) {
  return axios.get("http://localhost:8080/dashboard/notice/"+notice_id);
}
export function updateNotice(notice){
  return axios.put("http://localhost:8080/dashboard/notice",notice);
}


//ImgNotice
export function createImgNotice(imgNotice) {
  return axios.post("http://localhost:8080/dashboard/imgnotice",imgNotice);
}
export function getImgNoticeList(){
  return axios.get("http://localhost:8080/dashboard/imgnotice");
}
export function imgNoticeDownloadAttach(img_notice_id){
  return axios.get("http://localhost:8080/dashboard/imgnotice/downloadAttach/" + img_notice_id);
}
export function getImgNotice(img_notice_id){
  return axios.get("http://localhost:8080/dashboard/imgnotice/"+img_notice_id);
}
export function deleteImgNotice(img_notice_id){
  return axios.delete("http://localhost:8080/dashboard/imgnotice/" +img_notice_id);
}
export function updateHitCount(img_notice_id){
  return axios.put("http://localhost:8080/dashboard/imgnotice/" +img_notice_id);
}
export function updateImgNotice(imgNotice){
  return axios.post("http://localhost:8080/dashboard/updateimgnotice",imgNotice);
}



//freeboard
export function getFreeBoardList(){
  return axios.get("http://localhost:8080/dashboard/freeboard");
}
export function createFreeBoard(freeBoard){
  return axios.post("http://localhost:8080/dashboard/freeboard",freeBoard);
}

export function deleteFreeBoard(freeboard_id){
  return axios.delete("http://localhost:8080/dashboard/freeboard/"+ freeboard_id);
}
export function updateFreeBoard(freeBoard){
  return axios.put("http://localhost:8080/dashboard/freeboard",freeBoard);
}
export function getFreeBoard(freeboard_id){
  return axios.get("http://localhost:8080/dashboard/freeboard/"+ freeboard_id);
}

//freeboard_answer
export function getFreeBoardAnswerList(freeboard_id){
  return axios.get("http://localhost:8080/dashboard/freeboardanswer/"+freeboard_id);
}
export function createFreeBoardAnswer(freeBoardAnswer){
  return axios.post("http://localhost:8080/dashboard/freeboardanswer",freeBoardAnswer);
}
export function deleteFreeBoardAnswer(freeboard_answer_id){
  return axios.delete("http://localhost:8080/dashboard/freeboardanswer/"+freeboard_answer_id);
}

//staff
export function getStaffList(){
  return axios.get("http://localhost:8080/dashboard/staff");
}
