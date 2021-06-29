const appointNum = [
  {gender:"남", num:"20"},
  {gender:"여", num:"25"}
]

export function getAppointNum(){
  return appointNum;
}

const staffList = [
  {"staff_id":1,"staff_name":"정동호","staff_tel":"010-1234-1234","img":"/resources/img/staff2.jpg","appoint_num":5,"staff_authority":"의사"},
  {"staff_id":2,"staff_name":"박선명","staff_tel":"010-1234-1234","img":"/resources/img/staff3.jpg","appoint_num":7,"staff_authority":"간호사"},
  {"staff_id":3,"staff_name":"조운호","staff_tel":"010-1234-1234","img":"/resources/img/staff3.jpg","appoint_num":15,"staff_authority":"의사"},
  {"staff_id":4,"staff_name":"강슬기","staff_tel":"010-1234-1234","img":"/resources/img/staff3.jpg","appoint_num":12,"staff_authority":"검사자"},
  {"staff_id":5,"staff_name":"김나영","staff_tel":"010-1234-1234","img":"/resources/img/staff3.jpg","appoint_num":10,"staff_authority":"의사"}
]
export function getStaffList(){
  return staffList;
}

const imgNotice = [
  {"img_notice_id":1,"img_notice_title":"병원 근무시간 및 휴식시간 안내","img_notice_content":"근무시간: 월요일 화요일 수요일 목요일 금요일 ....","img_notice_date":"2021-06-25","img_notice_hitcount":2,"img_notice_img":"resources/img/img1.jpg"},
  {"img_notice_id":1,"img_notice_title":"병원 위치 및 병원관리","img_notice_content":"근무시간: 월요일 화요일 수요일 목요일 금요일 ....","img_notice_date":"2021-06-25","img_notice_hitcount":2,"img_notice_img":"resources/img/img2.jpg"},
  {"img_notice_id":1,"img_notice_title":"점심시간 안내 및 점심비용","img_notice_content":"근무시간: 월요일 화요일 수요일 목요일 금요일 ....","img_notice_date":"2021-06-25","img_notice_hitcount":2,"img_notice_img":"resources/img/img3.jpg"},
  {"img_notice_id":1,"img_notice_title":"병원 근무시간 및 휴식시간 안내","img_notice_content":"근무시간: 월요일 화요일 수요일 목요일 금요일 ....","img_notice_date":"2021-06-25","img_notice_hitcount":2,"img_notice_img":"resources/img/img1.jpg"},
  {"img_notice_id":1,"img_notice_title":"병원 근무시간 및 휴식시간 안내","img_notice_content":"근무시간: 월요일 화요일 수요일 목요일 금요일 ....","img_notice_date":"2021-06-25","img_notice_hitcount":2,"img_notice_img":"resources/img/img2.jpg"},
  {"img_notice_id":1,"img_notice_title":"점심시간 안내 및 점심비용","img_notice_content":"근무시간: 월요일 화요일 수요일 목요일 금요일 ....","img_notice_date":"2021-06-25","img_notice_hitcount":2,"img_notice_img":"resources/img/img3.jpg"}
]
export function getImgNotice(){
  return imgNotice;
}

const notice = [
  {"notice_id":1,"notice_title":"자율 재택근무 관련 공지","notice_content":"자율재택 근무관련을 공지합니다\n내용은 뭐뭐입니다.","notice_date":"2021-06-26","notice_hitcount":3},
  {"notice_id":2,"notice_title":"코로나 19 재택근무 관련 공지","notice_content":"자율재택 근무 관련을 공지합니다\n내용은 뭐뭐입니다.","notice_date":"2021-03-01","notice_hitcount":3},
  {"notice_id":3,"notice_title":"설날 휴무 관련 공지","notice_content":"자율재택 근무 관련을 공지합니다 내용은 뭐뭐입니다.","notice_date":"2021-02-21","notice_hitcount":3},
  {"notice_id":4,"notice_title":"2020년도 종무식 관련 공지","notice_content":"자율재택 근무 관련을 공지합니다 내용은 뭐뭐입니다.","notice_date":"2021-01-21","notice_hitcount":3},
  {"notice_id":5,"notice_title":"2020년 상반기 결산 관련 공지","notice_content":"자율재택 근무 관련을 공지합니다 내용은 뭐뭐입니다.","notice_date":"2021-01-01","notice_hitcount":3},
  {"notice_id":1,"notice_title":"자율 재택근무 관련 공지","notice_content":"자율재택 근무 관련을 공지합니다 내용은 뭐뭐입니다.","notice_date":"2021-06-26","notice_hitcount":3},
  {"notice_id":2,"notice_title":"코로나 19 재택근무 관련 공지","notice_content":"자율재택 근무 관련을 공지합니다 내용은 뭐뭐입니다.","notice_date":"2021-03-01","notice_hitcount":3},
  {"notice_id":3,"notice_title":"설날 휴무 관련 공지","notice_content":"자율재택 근무 관련을 공지합니다 내용은 뭐뭐입니다.","notice_date":"2021-02-21","notice_hitcount":3},
  {"notice_id":4,"notice_title":"2020년도 종무식 관련 공지","notice_content":"자율재택 근무 관련을 공지합니다 내용은 뭐뭐입니다.","notice_date":"2021-01-21","notice_hitcount":3},
  {"notice_id":5,"notice_title":"2020년 상반기 결산 관련 공지","notice_content":"자율재택 근무 관련을 공지합니다 내용은 뭐뭐입니다.","notice_date":"2021-01-01","notice_hitcount":3},
]
export function getNotice(){
  return notice;
}

const freeBoard=[
  {"freeboard_id":1,"freeboard_title":"오늘 점심 뭐 먹을까요?","freeboard_date":"2021-06-26","freeboard_content":"면종류가 먹고 싶은데 고민이에요 ㅠㅠ","freeboard_time":"13:42","staff_name":"조운호","freeboard_comment":3},
  {"freeboard_id":2,"freeboard_title":"오늘 점심 뭐 먹을까요?","freeboard_date":"2021-06-26","freeboard_content":"면종류가 먹고 싶은데 고민이에요 ㅠㅠ","freeboard_time":"13:00","staff_name":"조운호","freeboard_comment":3},
  {"freeboard_id":3,"freeboard_title":"오늘 점심 뭐 먹을까요?","freeboard_date":"2021-06-26","freeboard_time":"13:00","staff_name":"조운호","freeboard_comment":3},
  {"freeboard_id":4,"freeboard_title":"오늘 점심 뭐 먹을까요?","freeboard_date":"2021-06-26","freeboard_time":"13:00","staff_name":"조운호","freeboard_comment":3},
  {"freeboard_id":5,"freeboard_title":"오늘 점심 뭐 먹을까요?","freeboard_date":"2021-06-26","freeboard_time":"13:00","staff_name":"조운호","freeboard_comment":3},
  {"freeboard_id":6,"freeboard_title":"오늘 점심 뭐 먹을까요?","freeboard_date":"2021-06-26","freeboard_time":"13:00","staff_name":"조운호","freeboard_comment":3},
  {"freeboard_id":1,"freeboard_title":"오늘 점심 뭐 먹을까요?","freeboard_date":"2021-06-26","freeboard_time":"13:00","staff_name":"조운호","freeboard_comment":3},
  {"freeboard_id":2,"freeboard_title":"오늘 점심 뭐 먹을까요?","freeboard_date":"2021-06-26","freeboard_time":"13:00","staff_name":"조운호","freeboard_comment":3},
  {"freeboard_id":3,"freeboard_title":"오늘 점심 뭐 먹을까요?","freeboard_date":"2021-06-26","freeboard_time":"13:00","staff_name":"조운호","freeboard_comment":3},
  {"freeboard_id":4,"freeboard_title":"오늘 점심 뭐 먹을까요?","freeboard_date":"2021-06-26","freeboard_time":"13:00","staff_name":"조운호","freeboard_comment":3},
  {"freeboard_id":5,"freeboard_title":"오늘 점심 뭐 먹을까요?","freeboard_date":"2021-06-26","freeboard_time":"13:00","staff_name":"조운호","freeboard_comment":3},
  {"freeboard_id":6,"freeboard_title":"오늘 점심 뭐 먹을까요?","freeboard_date":"2021-06-26","freeboard_time":"13:00","staff_name":"조운호","freeboard_comment":3},
]
export function getFreeBoard(){
  return freeBoard;
}
const freeBoardAnswer=[
  {"freeboard_id":1,"freeboard_answer_content":"짜장면어때요?!","freeboard_answer_date":"2021-06-26","freeboard_answer_time":"13:45","staff_name":"슬기"},
  {"freeboard_id":1,"freeboard_answer_content":"짜장면어때요?!","freeboard_answer_date":"2021-06-26","freeboard_answer_time":"13:45","staff_name":"슬기"},
  {"freeboard_id":1,"freeboard_answer_content":"짜장면어때요?!","freeboard_answer_date":"2021-06-26","freeboard_answer_time":"13:45","staff_name":"슬기"},
  {"freeboard_id":1,"freeboard_answer_content":"짜장면어때요?!","freeboard_answer_date":"2021-06-26","freeboard_answer_time":"13:45","staff_name":"슬기"},
  {"freeboard_id":1,"freeboard_answer_content":"짜장면어때요?!","freeboard_answer_date":"2021-06-26","freeboard_answer_time":"13:45","staff_name":"슬기"},
  {"freeboard_id":1,"freeboard_answer_content":"짜장면어때요?!","freeboard_answer_date":"2021-06-26","freeboard_answer_time":"13:45","staff_name":"슬기"},
  {"freeboard_id":1,"freeboard_answer_content":"짜장면어때요?!","freeboard_answer_date":"2021-06-26","freeboard_answer_time":"13:45","staff_name":"슬기"},
  {"freeboard_id":1,"freeboard_answer_content":"짜장면어때요?!","freeboard_answer_date":"2021-06-26","freeboard_answer_time":"13:45","staff_name":"슬기"}

]

export function getFreeBoardAnswer() {
  return freeBoardAnswer;
}