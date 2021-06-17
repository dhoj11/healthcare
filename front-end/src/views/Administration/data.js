let appointmentData = [];
appointmentData = [
  {"order":"1", "date": "2021.06.16","time": "10:30", "name":"정동호", "appointmentKind":"진료","doctor":"김의사","state": "완료","patientId":"1"},
  {"order":"2", "date": "2021.06.16","time": "11:00", "name":"조운호", "appointmentKind":"검사","doctor":"박의사","state": "완료","patientId":"2"},
  {"order":"3", "date": "2021.06.16","time": "11:30", "name":"박선명", "appointmentKind":"진료","doctor":"정의사","state": "완료","patientId":"4"},
  {"order":"4", "date": "2021.06.16","time": "12:00", "name":"홍길동", "appointmentKind":"검사","doctor":"나의사","state": "내원","patientId":"5"},
  {"order":"5", "date": "2021.06.16","time": "12:30", "name":"아무개", "appointmentKind":"진료","doctor":"김의사","state": "내원","patientId":"6"},
  {"order":"1", "date": "2021.06.15","time": "10:30", "name":"정동호", "appointmentKind":"진료","doctor":"김의사","state": "완료","patientId":"1"},
  {"order":"2", "date": "2021.06.15","time": "11:00", "name":"조운호", "appointmentKind":"진료","doctor":"박의사","state": "완료","patientId":"2"},
  {"order":"3", "date": "2021.06.15","time": "11:30", "name":"박선명", "appointmentKind":"진료","doctor":"정의사","state": "완료","patientId":"4"},
  {"order":"4", "date": "2021.06.15","time": "12:00", "name":"홍길동", "appointmentKind":"검사","doctor":"나의사","state": "내원","patientId":"5"},
  {"order":"5", "date": "2021.06.15","time": "12:30", "name":"아무개", "appointmentKind":"진료","doctor":"김의사","state": "내원","patientId":"6"},
];

let receptionData = [];
receptionData = [
  {"order":"1", "time": "10:30", "name":"정동호", "treatmentComment":"두통","doctor":"김의사","state": "완료", "patientId":"2"},
  {"order":"2", "time": "11:00", "name":"조운호", "treatmentComment":"감기","doctor":"박의사","state": "완료","patientId":"2"},
  {"order":"3", "time": "11:30", "name":"박선명", "treatmentComment":"발열","doctor":"정의사","state": "완료","patientId":"4"},
  {"order":"4", "time": "12:00", "name":"홍길동", "treatmentComment":"감기","doctor":"나의사","state": "진료","patientId":"5"},
  {"order":"5", "time": "12:30", "name":"아무개", "treatmentComment":"근육통","doctor":"김의사","state": "대기","patientId":"6"},
  {"order":"6", "time": "14:00", "name":"강슬기", "treatmentComment":"감기","doctor":"김의사","state": "대기","patientId":"7"},
  {"order":"7", "time": "14:30", "name":"박수영", "treatmentComment":"두통","doctor":"나의사","state": "대기","patientId":"8"},
  {"order":"8", "time": "15:00", "name":"김예림", "treatmentComment":"두통","doctor":"박의사","state": "대기","patientId":"9"},
  {"order":"1", "time": "10:30", "name":"정동호", "treatmentComment":"두통","doctor":"김의사","state": "완료", "patientId":"2"},
  {"order":"2", "time": "11:00", "name":"조운호", "treatmentComment":"감기","doctor":"박의사","state": "완료","patientId":"2"},
  {"order":"3", "time": "11:30", "name":"박선명", "treatmentComment":"발열","doctor":"정의사","state": "완료","patientId":"4"},
  {"order":"4", "time": "12:00", "name":"홍길동", "treatmentComment":"감기","doctor":"나의사","state": "진료","patientId":"5"},
  {"order":"5", "time": "12:30", "name":"아무개", "treatmentComment":"근육통","doctor":"김의사","state": "대기","patientId":"6"},
  {"order":"6", "time": "14:00", "name":"강슬기", "treatmentComment":"감기","doctor":"김의사","state": "대기","patientId":"7"},
  {"order":"7", "time": "14:30", "name":"박수영", "treatmentComment":"두통","doctor":"나의사","state": "대기","patientId":"8"},
  {"order":"8", "time": "15:00", "name":"김예림", "treatmentComment":"두통","doctor":"박의사","state": "대기","patientId":"9"}
]

let testListData = [];
testListData = [
  {"order":"1", "time": "10:30", "name":"정동호","doctor":"김의사","state": "완료","patientId":"1"},
  {"order":"2", "time": "11:00", "name":"조운호","doctor":"박의사","state": "완료","patientId":"2"},
  {"order":"3", "time": "11:00", "name":"조운호","doctor":"김의사","state": "완료","patientId":"3"},
  {"order":"4", "time": "11:30", "name":"박선명","doctor":"정의사","state": "완료","patientId":"4"},
  {"order":"5", "time": "12:00", "name":"홍길동","doctor":"나의사","state": "진행중","patientId":"5"},
  {"order":"6", "time": "12:30", "name":"아무개","doctor":"김의사","state": "대기","patientId":"6"},
  {"order":"7", "time": "14:00", "name":"강슬기","doctor":"김의사","state": "대기","patientId":"7"},
  {"order":"8", "time": "14:30", "name":"박수영","doctor":"나의사","state": "대기","patientId":"8"},
  {"order":"9", "time": "15:00", "name":"김예림","doctor":"박의사","state": "대기","patientId":"9"}
];

let testCodeListData = [];
testCodeListData = [
  {"order":"1", "code":"SRC60", "codeName": "순환기능검사", "inspector":"나검사","state": "대기","patientId":"1"},
  {"order":"1", "code":"03221", "codeName": "경추엑스레이", "inspector":"김검사","state": "대기","patientId":"1"},
  {"order":"1", "code":"R102", "codeName": "당뇨검사", "inspector":"나검사","state": "대기","patientId":"1"},
  {"order":"2", "code":"SRC60", "codeName": "순환기능검사", "inspector":"나검사","state": "대기","patientId":"2"},
  {"order":"2", "code":"03221", "codeName": "경추엑스레이", "inspector":"김검사","state": "대기","patientId":"2"},
  {"order":"3", "code":"R102", "codeName": "당뇨검사", "inspector":"나검사","state": "대기","patientId":"3"},
  {"order":"3", "code":"SRC60", "codeName": "순환기능검사", "inspector":"나검사","state": "대기","patientId":"3"},
  {"order":"3", "code":"03221", "codeName": "경추엑스레이", "inspector":"김검사","state": "대기","patientId":"3"},
  {"order":"4", "code":"R102", "codeName": "당뇨검사", "inspector":"나검사","state": "대기","patientId":"4"},
  {"order":"5", "code":"SRC60", "codeName": "순환기능검사", "inspector":"나검사","state": "대기","patientId":"5"},
  {"order":"5", "code":"03221", "codeName": "경추엑스레이", "inspector":"김검사","state": "대기","patientId":"5"},
  {"order":"6", "code":"R102", "codeName": "당뇨검사", "inspector":"나검사","state": "대기","patientId":"6"},
  {"order":"7", "code":"SRC60", "codeName": "순환기능검사", "inspector":"나검사","state": "대기","patientId":"7"},
  {"order":"7", "code":"03221", "codeName": "경추엑스레이", "inspector":"김검사","state": "대기","patientId":"7"},
  {"order":"8", "code":"R102", "codeName": "당뇨검사", "inspector":"나검사","state": "대기","patientId":"8"},
  {"order":"9", "code":"R102", "codeName": "당뇨검사", "inspector":"나검사","state": "대기","patientId":"9"},
];

let patientData = [];
patientData = [
  {"patientId":"1","name":"정동호", "gender":"남","birth":"1995.01.01","age":"26","tel": "010-1111-1111","recentVisit": "2021.06.16", "medicine": "고혈압", "disease": "고혈압", "comment": "특이 사항 없음"},
  {"patientId":"2","name":"조운호", "gender":"남","birth":"1996.01.01","age":"25","tel": "010-2222-2222","recentVisit": "2021.06.16", "medicine": "당뇨", "disease": "당뇨", "comment": "특이 사항 없음"},
  {"patientId":"3","name":"조운호", "gender":"남","birth":"1996.02.01","age":"25","tel": "010-1212-1212","recentVisit": "2021.06.16", "medicine": "신경안정제", "disease": "", "comment": "특이 사항 없음"},
  {"patientId":"4","name":"박선명", "gender":"여","birth":"1997.01.01","age":"24","tel": "010-3333-3333","recentVisit": "2021.06.16", "medicine": "고혈압", "disease": "고혈압", "comment": "특이 사항 없음"},
  {"patientId":"5","name":"홍길동", "gender":"남","birth":"1951.01.01","age":"70","tel": "010-4444-4444","recentVisit": "2021.06.16", "medicine": "당뇨", "disease": "당뇨", "comment": "특이 사항 없음"},
  {"patientId":"6","name":"아무개", "gender":"남","birth":"1984.01.01","age":"37","tel": "010-5555-5555","recentVisit": "2021.06.16", "medicine": "", "disease": "", "comment": "특이 사항 없음"},
  {"patientId":"7","name":"강슬기", "gender":"여","birth":"1995.01.01","age":"26","tel": "010-6666-6666","recentVisit": "2021.01.01", "medicine": "", "disease": "고혈압", "comment": "특이 사항 없음"},
  {"patientId":"8","name":"박수영", "gender":"여","birth":"1996.01.01","age":"25","tel": "010-7777-7777","recentVisit": "2021.01.01", "medicine": "", "disease": "", "comment": ""},
  {"patientId":"9","name":"김예림", "gender":"여","birth":"1999.01.01","age":"22","tel": "010-8888-8888","recentVisit": "2021.01.01", "medicine": "당뇨", "disease": "당뇨", "comment": "특이 사항 없음"}
];

let testPatientData = {};
testPatientData = {"patientId":"2","name":"조운호", "gender":"남","birth":"1996.01.01","age":"25","tel": "010-2222-2222","recentVisit": "2021.06.16", "medicine": "당뇨", "disease": "당뇨", "comment": "특이 사항 없음"};

export function getAppointmentList() {
  var appointmentList = appointmentData;
  return appointmentList;
};

export function getReceptionList() {
  var receptionList = receptionData;
  return receptionList;
};

export function getTestPatientList() {
  return testListData;
}

export function getTestCodeList() {
  return testCodeListData;
}

export function getPatientList() {
  return patientData;
}

export function getTestPatient() {
  return testPatientData;
}