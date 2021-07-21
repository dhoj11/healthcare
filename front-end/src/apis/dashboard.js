import auth from './axiosConfig';

//notice
export function getNoticeList(){
  return auth.get("/dashboard/notice");
}
export function createNotice(notice){
  return auth.post("/dashboard/notice",notice);
}

export function deleteNotice(notice_id){
  return auth.delete("/dashboard/notice/"+notice_id);
}
export function getNotice(notice_id) {
  return auth.get("/dashboard/notice/"+notice_id);
}
export function updateNotice(notice){
  return auth.put("/dashboard/notice",notice);
}


//ImgNotice
export function createImgNotice(imgNotice) {
  return auth.post("/dashboard/imgnotice",imgNotice);
}
export function getImgNoticeList(){
  return auth.get("/dashboard/imgnotice");
}
export function imgNoticeDownloadAttach(img_notice_id){
  return auth.get("/dashboard/imgnotice/downloadAttach/" + img_notice_id);
}
export function getImgNotice(img_notice_id){
  return auth.get("/dashboard/imgnotice/"+img_notice_id);
}
export function deleteImgNotice(img_notice_id){
  return auth.delete("/dashboard/imgnotice/" +img_notice_id);
}
export function updateHitCount(img_notice_id){
  return auth.put("/dashboard/imgnotice/" +img_notice_id);
}
export function updateImgNotice(imgNotice){
  return auth.post("/dashboard/updateimgnotice",imgNotice);
}



//freeboard
export function getFreeBoardList(){
  return auth.get("/dashboard/freeboard");
}
export function createFreeBoard(freeBoard){
  return auth.post("/dashboard/freeboard",freeBoard);
}

export function deleteFreeBoard(freeboard_id){
  return auth.delete("/dashboard/freeboard/"+ freeboard_id);
}
export function updateFreeBoard(freeBoard){
  return auth.put("/dashboard/freeboard",freeBoard);
}
export function getFreeBoard(freeboard_id){
  return auth.get("/dashboard/freeboard/"+ freeboard_id);
}

//freeboard_answer
export function getFreeBoardAnswerList(freeboard_id){
  return auth.get("/dashboard/freeboardanswer/"+freeboard_id);
}
export function createFreeBoardAnswer(freeBoardAnswer){
  return auth.post("/dashboard/freeboardanswer",freeBoardAnswer);
}
export function deleteFreeBoardAnswer(freeboard_answer_id){
  return auth.delete("/dashboard/freeboardanswer/"+freeboard_answer_id);
}

//staff
export function getStaffList(){
  return auth.get("/dashboard/staff");
}
