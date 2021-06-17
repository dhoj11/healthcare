let appointmentData = [];
appointmentData = [
  {"order":"1", "time": "10:30", "name":"정동호", "appointmentKind":"진료","doctor":"김의사","state": "완료"},
  {"order":"2", "time": "11:00", "name":"조운호", "appointmentKind":"검사","doctor":"박의사","state": "완료"},
  {"order":"3", "time": "11:30", "name":"박선명", "appointmentKind":"진료","doctor":"정의사","state": "완료"},
  {"order":"4", "time": "12:00", "name":"홍길동", "appointmentKind":"검사","doctor":"나의사","state": "내원"},
  {"order":"5", "time": "12:30", "name":"아무개", "appointmentKind":"진료","doctor":"김의사","state": "내원"}
];

let receptionData = [];
receptionData = [
  {"order":"1", "time": "10:30", "name":"정동호", "treatmentComment":"두통","doctor":"김의사","state": "완료"},
  {"order":"2", "time": "11:00", "name":"조운호", "treatmentComment":"감기","doctor":"박의사","state": "완료"},
  {"order":"3", "time": "11:30", "name":"박선명", "treatmentComment":"발열","doctor":"정의사","state": "완료"},
  {"order":"4", "time": "12:00", "name":"홍길동", "treatmentComment":"감기","doctor":"나의사","state": "진행중"},
  {"order":"5", "time": "12:30", "name":"아무개", "treatmentComment":"근육통","doctor":"김의사","state": "대기"},
  {"order":"6", "time": "14:00", "name":"강슬기", "treatmentComment":"감기","doctor":"김의사","state": "대기"},
  {"order":"7", "time": "14:30", "name":"박수영", "treatmentComment":"두통","doctor":"나의사","state": "대기"},
  {"order":"8", "time": "15:00", "name":"김예림", "treatmentComment":"두통","doctor":"박의사","state": "대기"}
]

export function getAppointmentList() {
  var appointmentList = appointmentData;
  return appointmentList;
};

export function getReceptionList() {
  var receptionList = receptionData;
  return receptionList;
};