let appointmentData = [];
appointmentData = [
  {"order":"1", "date": "2021-06-16","time": "10:30", "name":"정동호", "appointmentKind":"진료","doctor":"김의사","state": "완료","patientId":"1"},
  {"order":"2", "date": "2021-06-16","time": "11:00", "name":"조운호", "appointmentKind":"검사","doctor":"박의사","state": "완료","patientId":"2"},
  {"order":"3", "date": "2021-06-16","time": "11:30", "name":"박선명", "appointmentKind":"진료","doctor":"정의사","state": "내원","patientId":"4"},
  {"order":"4", "date": "2021-06-16","time": "12:00", "name":"홍길동", "appointmentKind":"검사","doctor":"나의사","state": "내원","patientId":"5"},
  {"order":"5", "date": "2021-06-16","time": "12:30", "name":"아무개", "appointmentKind":"진료","doctor":"김의사","state": "취소","patientId":"6"},
  {"order":"6", "date": "2021-06-16","time": "11:30", "name":"강슬기", "appointmentKind":"진료","doctor":"정의사","state": "완료","patientId":"7"},
  {"order":"7", "date": "2021-06-16","time": "12:00", "name":"박수영", "appointmentKind":"검사","doctor":"나의사","state": "내원","patientId":"8"},
  {"order":"8", "date": "2021-06-16","time": "12:30", "name":"김예림", "appointmentKind":"진료","doctor":"김의사","state": "예약","patientId":"9"},
  {"order":"9", "date": "2021-06-16","time": "13:00", "name":"이마크", "appointmentKind":"진료","doctor":"김의사","state": "완료","patientId":"10"},
  {"order":"10", "date": "2021-06-16","time": "13:30", "name":"황인준", "appointmentKind":"검사","doctor":"박의사","state": "완료","patientId":"11"},
  {"order":"11", "date": "2021-06-16","time": "14:00", "name":"이제노", "appointmentKind":"진료","doctor":"정의사","state": "내원","patientId":"12"},
  {"order":"12", "date": "2021-06-16","time": "14:30", "name":"이해찬", "appointmentKind":"검사","doctor":"나의사","state": "내원","patientId":"13"},
  {"order":"13", "date": "2021-06-16","time": "15:00", "name":"나재민", "appointmentKind":"진료","doctor":"김의사","state": "취소","patientId":"14"},
  {"order":"14", "date": "2021-06-16","time": "15:30", "name":"종천러", "appointmentKind":"진료","doctor":"정의사","state": "완료","patientId":"15"},
  {"order":"15", "date": "2021-06-16","time": "16:00", "name":"박지성", "appointmentKind":"검사","doctor":"나의사","state": "내원","patientId":"16"},
  {"order":"16", "date": "2021-06-16","time": "16:30", "name":"임나연", "appointmentKind":"진료","doctor":"김의사","state": "예약","patientId":"17"},
  {"order":"17", "date": "2021-06-16","time": "17:00", "name":"황예지", "appointmentKind":"진료","doctor":"정의사","state": "내원","patientId":"18"},
  {"order":"18", "date": "2021-06-16","time": "17:30", "name":"신류진", "appointmentKind":"검사","doctor":"나의사","state": "내원","patientId":"19"},
  {"order":"1", "date": "2021-06-15","time": "10:30", "name":"정동호", "appointmentKind":"진료","doctor":"김의사","state": "완료","patientId":"1"},
  {"order":"2", "date": "2021-06-15","time": "11:00", "name":"조운호", "appointmentKind":"진료","doctor":"박의사","state": "완료","patientId":"2"},
  {"order":"3", "date": "2021-06-15","time": "11:30", "name":"박선명", "appointmentKind":"진료","doctor":"정의사","state": "완료","patientId":"4"},
  {"order":"4", "date": "2021-06-15","time": "12:00", "name":"홍길동", "appointmentKind":"검사","doctor":"나의사","state": "내원","patientId":"5"},
  {"order":"5", "date": "2021-06-15","time": "12:30", "name":"아무개", "appointmentKind":"진료","doctor":"김의사","state": "내원","patientId":"6"},
];

let receptionData = [];
receptionData = [
  {"order":"1", "name":"정동호", "treatmentComment":"두통","doctor":"김의사","state": "완료", "patientId":"1"},
  {"order":"2", "name":"조운호", "treatmentComment":"감기","doctor":"박의사","state": "완료","patientId":"2"},
  {"order":"3", "name":"박선명", "treatmentComment":"발열","doctor":"정의사","state": "완료","patientId":"4"},
  {"order":"4", "name":"홍길동", "treatmentComment":"감기","doctor":"나의사","state": "진료","patientId":"5"},
  {"order":"5", "name":"아무개", "treatmentComment":"근육통","doctor":"김의사","state": "대기","patientId":"6"},
  {"order":"6", "name":"강슬기", "treatmentComment":"감기","doctor":"김의사","state": "대기","patientId":"7"},
  {"order":"7", "name":"박수영", "treatmentComment":"두통","doctor":"나의사","state": "대기","patientId":"8"},
  {"order":"8", "name":"김예림", "treatmentComment":"감기","doctor":"나의사","state": "대기","patientId":"9"},
  {"order":"9", "name":"이마크", "treatmentComment":"두통","doctor":"김의사","state": "완료", "patientId":"10"},
  {"order":"10", "name":"황인준", "treatmentComment":"감기","doctor":"박의사","state": "완료","patientId":"11"},
  {"order":"11", "name":"이제노", "treatmentComment":"발열","doctor":"정의사","state": "완료","patientId":"12"},
  {"order":"12", "name":"이해찬", "treatmentComment":"감기","doctor":"나의사","state": "진료","patientId":"13"},
  {"order":"13", "name":"나재민", "treatmentComment":"근육통","doctor":"김의사","state": "대기","patientId":"14"},
  {"order":"14", "name":"종천러", "treatmentComment":"감기","doctor":"김의사","state": "대기","patientId":"15"},
  {"order":"15", "name":"박지성", "treatmentComment":"두통","doctor":"나의사","state": "대기","patientId":"16"},
  {"order":"16", "name":"임나연", "treatmentComment":"감기","doctor":"나의사","state": "대기","patientId":"17"},
  {"order":"17", "name":"황예지", "treatmentComment":"두통","doctor":"나의사","state": "대기","patientId":"18"},
  {"order":"18", "name":"신류진", "treatmentComment":"감기","doctor":"나의사","state": "대기","patientId":"19"},
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
  {"order":"9", "time": "15:00", "name":"김예림","doctor":"박의사","state": "대기","patientId":"9"},
  {"order":"9", "time": "15:00", "name":"이마크","doctor":"박의사","state": "대기","patientId":"10"},
  {"order":"1", "time": "10:30", "name":"황인준","doctor":"김의사","state": "완료","patientId":"11"},
  {"order":"2", "time": "11:00", "name":"이제노","doctor":"박의사","state": "완료","patientId":"12"},
  {"order":"3", "time": "11:00", "name":"이해찬","doctor":"김의사","state": "완료","patientId":"13"},
  {"order":"4", "time": "11:30", "name":"나재민","doctor":"정의사","state": "완료","patientId":"14"},
  {"order":"5", "time": "12:00", "name":"종천러","doctor":"나의사","state": "진행중","patientId":"15"},
  {"order":"6", "time": "12:30", "name":"박지성","doctor":"김의사","state": "대기","patientId":"16"},
  {"order":"7", "time": "14:00", "name":"임나연","doctor":"김의사","state": "대기","patientId":"17"},
  {"order":"8", "time": "14:30", "name":"황예지","doctor":"나의사","state": "대기","patientId":"18"},
  {"order":"8", "time": "14:30", "name":"신류진","doctor":"나의사","state": "대기","patientId":"19"},
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
  {"order":"1", "code":"SRC60", "codeName": "순환기능검사", "inspector":"나검사","state": "대기","patientId":"10"},
  {"order":"1", "code":"03221", "codeName": "경추엑스레이", "inspector":"김검사","state": "대기","patientId":"10"},
  {"order":"1", "code":"R102", "codeName": "당뇨검사", "inspector":"나검사","state": "대기","patientId":"10"},
  {"order":"2", "code":"SRC60", "codeName": "순환기능검사", "inspector":"나검사","state": "대기","patientId":"11"},
  {"order":"2", "code":"03221", "codeName": "경추엑스레이", "inspector":"김검사","state": "대기","patientId":"11"},
  {"order":"3", "code":"R102", "codeName": "당뇨검사", "inspector":"나검사","state": "대기","patientId":"12"},
  {"order":"3", "code":"SRC60", "codeName": "순환기능검사", "inspector":"나검사","state": "대기","patientId":"13"},
  {"order":"3", "code":"03221", "codeName": "경추엑스레이", "inspector":"김검사","state": "대기","patientId":"13"},
  {"order":"4", "code":"R102", "codeName": "당뇨검사", "inspector":"나검사","state": "대기","patientId":"14"},
  {"order":"5", "code":"SRC60", "codeName": "순환기능검사", "inspector":"나검사","state": "대기","patientId":"15"},
  {"order":"5", "code":"03221", "codeName": "경추엑스레이", "inspector":"김검사","state": "대기","patientId":"15"},
  {"order":"6", "code":"R102", "codeName": "당뇨검사", "inspector":"나검사","state": "대기","patientId":"16"},
  {"order":"7", "code":"SRC60", "codeName": "순환기능검사", "inspector":"나검사","state": "대기","patientId":"17"},
  {"order":"7", "code":"03221", "codeName": "경추엑스레이", "inspector":"김검사","state": "대기","patientId":"17"},
  {"order":"8", "code":"R102", "codeName": "당뇨검사", "inspector":"나검사","state": "대기","patientId":"18"},
  {"order":"9", "code":"R102", "codeName": "당뇨검사", "inspector":"나검사","state": "대기","patientId":"19"},
];

let patientData = [];
patientData = [
  {"patientId":"1","name":"정동호", "gender":"남","birth":"1995-01-01","age":"26","tel": "010-1111-1111","recentVisit": "2021-06-16", "medicine": "고혈압", "disease": "고혈압", "comment": "특이 사항 없음"},
  {"patientId":"2","name":"조운호", "gender":"남","birth":"1996-01-01","age":"25","tel": "010-2222-2222","recentVisit": "2021-06-16", "medicine": "당뇨", "disease": "당뇨", "comment": "특이 사항 없음"},
  {"patientId":"3","name":"조운호", "gender":"남","birth":"1996-02-01","age":"25","tel": "010-1212-1212","recentVisit": "2021-06-16", "medicine": "신경안정제", "disease": "없음", "comment": "특이 사항 없음"},
  {"patientId":"4","name":"박선명", "gender":"여","birth":"1997-01-01","age":"24","tel": "010-3333-3333","recentVisit": "2021-06-16", "medicine": "고혈압", "disease": "고혈압", "comment": "특이 사항 없음"},
  {"patientId":"5","name":"홍길동", "gender":"남","birth":"1951-01-01","age":"70","tel": "010-4444-4444","recentVisit": "2021-06-16", "medicine": "당뇨", "disease": "당뇨", "comment": "특이 사항 없음"},
  {"patientId":"6","name":"아무개", "gender":"남","birth":"1984-01-01","age":"37","tel": "010-5555-5555","recentVisit": "2021-06-16", "medicine": "없음", "disease": "없음", "comment": "특이 사항 없음"},
  {"patientId":"7","name":"강슬기", "gender":"여","birth":"1995-01-01","age":"26","tel": "010-6666-6666","recentVisit": "2021-01-01", "medicine": "없음", "disease": "고혈압", "comment": "특이 사항 없음"},
  {"patientId":"8","name":"박수영", "gender":"여","birth":"1996-01-01","age":"25","tel": "010-7777-7777","recentVisit": "2021-01-01", "medicine": "없음", "disease": "없음", "comment": "특이 사항 없음"},
  {"patientId":"9","name":"김예림", "gender":"여","birth":"1999-01-01","age":"22","tel": "010-8888-8888","recentVisit": "2021-01-01", "medicine": "당뇨", "disease": "당뇨", "comment": "특이 사항 없음"},
  {"patientId":"10","name":"이마크", "gender":"남","birth":"1995-01-01","age":"17","tel": "010-9999-9999","recentVisit": "2021-06-16", "medicine": "고혈압", "disease": "고혈압", "comment": "특이 사항 없음"},
  {"patientId":"11","name":"황인준", "gender":"남","birth":"1996-01-01","age":"25","tel": "010-1010-1010","recentVisit": "2021-06-16", "medicine": "당뇨", "disease": "당뇨", "comment": "특이 사항 없음"},
  {"patientId":"12","name":"이제노", "gender":"남","birth":"1996-02-01","age":"25","tel": "010-1313-1313","recentVisit": "2021-06-16", "medicine": "신경안정제", "disease": "없음", "comment": "특이 사항 없음"},
  {"patientId":"13","name":"이해찬", "gender":"남","birth":"1997-01-01","age":"24","tel": "010-1414-1414","recentVisit": "2021-06-16", "medicine": "고혈압", "disease": "고혈압", "comment": "특이 사항 없음"},
  {"patientId":"14","name":"나재민", "gender":"남","birth":"1951-01-01","age":"70","tel": "010-1515-1515","recentVisit": "2021-06-16", "medicine": "당뇨", "disease": "당뇨", "comment": "특이 사항 없음"},
  {"patientId":"15","name":"종천러", "gender":"남","birth":"1984-01-01","age":"37","tel": "010-1616-1616","recentVisit": "2021-06-16", "medicine": "없음", "disease": "없음", "comment": "특이 사항 없음"},
  {"patientId":"16","name":"박지성", "gender":"남","birth":"1995-01-01","age":"26","tel": "010-1717-1717","recentVisit": "2021-01-01", "medicine": "없음", "disease": "고혈압", "comment": "특이 사항 없음"},
  {"patientId":"17","name":"임나연", "gender":"여","birth":"1995-01-01","age":"26","tel": "010-1818-1818","recentVisit": "2021-06-16", "medicine": "고혈압", "disease": "고혈압", "comment": "특이 사항 없음"},
  {"patientId":"18","name":"황예지", "gender":"여","birth":"1996-01-01","age":"25","tel": "010-1919-1919","recentVisit": "2021-06-16", "medicine": "당뇨", "disease": "당뇨", "comment": "특이 사항 없음"},
  {"patientId":"19","name":"신류진", "gender":"여","birth":"1996-02-01","age":"25","tel": "010-2020-2020","recentVisit": "2021-06-16", "medicine": "신경안정제", "disease": "없음", "comment": "특이 사항 없음"}
];

let testPatientData = {};
testPatientData = {"patientId":"2","name":"조운호", "gender":"남","birth":"1996-01-01","age":"25","tel": "010-2222-2222","recentVisit": "2021-06-16", "medicine": "당뇨", "disease": "당뇨", "comment": "특이 사항 없음"};

let staffList = [];
staffList = [
  {"staffId":"aaa","name":"정의사", "tel": "010-1111-1111"},
  {"staffId":"bbb","name":"조의사","tel": "010-2222-2222"},
  {"staffId":"ccc","name":"박의사","tel": "010-1212-1212"},
  {"staffId":"ddd","name":"김의사", "tel": "010-3333-3333"}
]

let appointmentTime = [];
appointmentTime = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"];

const disease = [
  {"code":  "A00", "name": "콜레라"},
  {"code":  "A000", "name": "	고전적 콜레라"},
  {"code":  "A001", "name": "	엘토르 콜레라"},
  {"code":  "A009", "name": "	상세불명의 콜레라"},
  {"code":  "A01", "name": "	장티푸스 및 파라티푸스"},
  {"code":  "A010", "name": "	장티푸스"},
]


let treatmentList = [];
treatmentList = [{"diagnosisId":"1","treatmentId": "1", "treatmentDate":"2021-06-16", "doctor":"정의사", "disease": "콜레라", "patientId": "1"},
                  {"diagnosisId":"2","treatmentId": "1", "treatmentDate":"2021-06-16", "doctor":"정의사", "disease": "장티푸스", "patientId": "1"},
                  {"diagnosisId":"3","treatmentId": "2", "treatmentDate":"2021-06-15", "doctor":"조의사", "disease": "고전적 콜레라", "patientId": "1"},
                  {"diagnosisId":"4","treatmentId": "2", "treatmentDate":"2021-06-15", "doctor":"조의사", "disease": "장티푸스 및 파라티푸스", "patientId": "1"},
                  {"diagnosisId":"5","treatmentId": "2", "treatmentDate":"2021-06-15", "doctor":"조의사", "disease": "상세불명의 콜레라", "patientId": "1"},
                  {"diagnosisId":"6","treatmentId": "3", "treatmentDate":"2021-06-16", "doctor":"김의사", "disease": "엘토르 콜레라", "patientId": "2"},
                  {"diagnosisId":"7","treatmentId": "3", "treatmentDate":"2021-06-16", "doctor":"김의사", "disease": "장티푸스", "patientId": "2"},
                  {"diagnosisId":"8","treatmentId": "4", "treatmentDate":"2021-06-15", "doctor":"김의사", "disease": "장티푸스 및 파라티푸스", "patientId": "2"},
                  {"diagnosisId":"9","treatmentId": "5", "treatmentDate":"2021-06-13", "doctor":"정의사", "disease": "엘토르 콜레라", "patientId": "2"},
                  {"diagnosisId":"10","treatmentId": "6", "treatmentDate":"2021-06-12", "doctor":"박의사", "disease": "고전적 콜레라", "patientId": "2"},
                  {"diagnosisId":"11","treatmentId": "7", "treatmentDate":"2021-06-16", "doctor":"박의사", "disease": "장티푸스 및 파라티푸스", "patientId": "3"},
                  {"diagnosisId":"12","treatmentId": "8", "treatmentDate":"2021-06-15", "doctor":"박의사", "disease": "엘토르 콜레라", "patientId": "3"},
                  {"diagnosisId":"13","treatmentId": "9", "treatmentDate":"2021-06-16", "doctor":"정의사", "disease": "상세불명의 콜레라", "patientId": "4"},
                  {"diagnosisId":"14","treatmentId": "10", "treatmentDate":"2021-06-15", "doctor":"조의사", "disease": "콜레라", "patientId": "5"},
                  {"diagnosisId":"15","treatmentId": "11", "treatmentDate":"2021-06-16", "doctor":"조의사", "disease": "고전적 콜레라", "patientId": "6"},
                  {"diagnosisId":"16","treatmentId": "12", "treatmentDate":"2021-06-15", "doctor":"정의사", "disease": "장티푸스", "patientId": "6"},
                  {"diagnosisId":"17","treatmentId": "13", "treatmentDate":"2021-06-16", "doctor":"박의사", "disease": "엘토르 콜레라", "patientId": "7"},
                  {"diagnosisId":"18","treatmentId": "14", "treatmentDate":"2021-06-15", "doctor":"정의사", "disease": "장티푸스", "patientId": "7"},
                  {"diagnosisId":"19","treatmentId": "15", "treatmentDate":"2021-06-16", "doctor":"정의사", "disease": "엘토르 콜레라", "patientId": "8"},
                  {"diagnosisId":"20","treatmentId": "16", "treatmentDate":"2021-06-15", "doctor":"김의사", "disease": "고전적 콜레라", "patientId": "9"},
                  {"diagnosisId":"21","treatmentId": "17", "treatmentDate":"2021-06-16", "doctor":"정의사", "disease": "장티푸스", "patientId": "10"},
                  {"diagnosisId":"22","treatmentId": "18", "treatmentDate":"2021-06-15", "doctor":"조의사", "disease": "고전적 콜레라", "patientId": "11"},
                  {"diagnosisId":"23","treatmentId": "19", "treatmentDate":"2021-06-15", "doctor":"조의사", "disease": "장티푸스 및 파라티푸스", "patientId": "12"},
                  {"diagnosisId":"24","treatmentId": "20", "treatmentDate":"2021-06-15", "doctor":"조의사", "disease": "상세불명의 콜레라", "patientId": "13"},
                  {"diagnosisId":"25","treatmentId": "21", "treatmentDate":"2021-06-16", "doctor":"김의사", "disease": "엘토르 콜레라", "patientId": "14"},
                  {"diagnosisId":"26","treatmentId": "22", "treatmentDate":"2021-06-16", "doctor":"김의사", "disease": "장티푸스", "patientId": "15"},
                  {"diagnosisId":"27","treatmentId": "23", "treatmentDate":"2021-06-15", "doctor":"김의사", "disease": "장티푸스 및 파라티푸스", "patientId": "16"},
                  {"diagnosisId":"28","treatmentId": "24", "treatmentDate":"2021-06-13", "doctor":"정의사", "disease": "엘토르 콜레라", "patientId": "17"},
                  {"diagnosisId":"29","treatmentId": "25", "treatmentDate":"2021-06-12", "doctor":"박의사", "disease": "고전적 콜레라", "patientId": "18"},
                  {"diagnosisId":"30","treatmentId": "26", "treatmentDate":"2021-06-16", "doctor":"박의사", "disease": "장티푸스 및 파라티푸스", "patientId": "19"}
                ]

const medicine = [
  {"code": "NIZA15", "name": "AXID Cap 150mg", "kind" : "내복약", "type":	"T"},
  {"code": "ROPIN1", "name": "ONIROL Tab 1mg ", "kind" : "내복약", "type":	"T"},
  {"code": "ROXN", "name": "ROXAN Cap 75mg", "kind" : "내복약", "type":	"C"},
  {"code": "RT150", "name": "URANTAC Tab 150mg", "kind" : "내복약", "type":	"T"},
  {"code": "SILY14", "name": "LEGALON 140 Cap", "kind" : "내복약", "type":	"T"},
  {"code": "SIMV2", "name": "SIMVALORD Tab 20mg", "kind" : "내복약", "type":	"C"},
  {"code": "RFD45", "name": "RIFODEX Tab 450mg", "kind" : "내복약", "type":	"T"},
  {"code": "PSEUDA", "name": "SUDAFED Tab 60mg", "kind" : "내복약", "type":	"C"},
  {"code": "QU100", "name": "Tab 400mg", "kind" : "내복약", "type":	"T"},
  {"code": "RAC", "name": "MESTINON Tab 60mg", "kind" : "내복약", "type":	"C"},
]

let prescriptionList = [];
prescriptionList = [{"prescriptionId":"1","treatmentId": "1", "treatmentDate":"2021-06-16", "doctor":"정의사", "medicine": "LEGALON 140 Cap", "kind":"내복약","days":"3","patientId": "1"},
                  {"prescriptionId":"2","treatmentId": "1", "treatmentDate":"2021-06-16", "doctor":"정의사", "medicine": "SIMVALORD Tab 20mg", "kind":"내복약","days":"3","patientId": "1"},
                  {"prescriptionId":"3","treatmentId": "2", "treatmentDate":"2021-06-15", "doctor":"조의사", "medicine": "RIFODEX Tab 450mg", "kind":"내복약","days":"3","patientId": "1"},
                  {"prescriptionId":"4","treatmentId": "2", "treatmentDate":"2021-06-15", "doctor":"조의사", "medicine": "SUDAFED Tab 60mg", "kind":"내복약","days":"3","patientId": "1"},
                  {"prescriptionId":"5","treatmentId": "2", "treatmentDate":"2021-06-15", "doctor":"조의사", "medicine": "Tab 400mg", "kind":"내복약","days":"3","patientId": "1"},
                  {"prescriptionId":"6","treatmentId": "3", "treatmentDate":"2021-06-16", "doctor":"김의사", "medicine": "MESTINON Tab 60mg","kind":"내복약","days":"3","patientId": "2"},
                  {"prescriptionId":"7","treatmentId": "3", "treatmentDate":"2021-06-16", "doctor":"김의사", "medicine": "SIMVALORD Tab 20mg", "kind":"내복약","days":"3","patientId": "2"},
                  {"prescriptionId":"8","treatmentId": "4", "treatmentDate":"2021-06-15", "doctor":"김의사", "medicine": "SUDAFED Tab 60mg", "kind":"내복약","days":"3","patientId": "2"},
                  {"prescriptionId":"9","treatmentId": "5", "treatmentDate":"2021-06-13", "doctor":"정의사", "medicine": "MESTINON Tab 60mg", "kind":"내복약","days":"3","patientId": "2"},
                  {"prescriptionId":"10","treatmentId": "6", "treatmentDate":"2021-06-12", "doctor":"박의사", "medicine": "RIFODEX Tab 450mg", "kind":"내복약","days":"3","patientId": "2"},
                  {"prescriptionId":"11","treatmentId": "7", "treatmentDate":"2021-06-16", "doctor":"박의사", "medicine": "SUDAFED Tab 60mg", "kind":"내복약","days":"3","patientId": "3"},
                  {"prescriptionId":"12","treatmentId": "8", "treatmentDate":"2021-06-15", "doctor":"박의사", "medicine": "MESTINON Tab 60mg", "kind":"내복약","days":"3","patientId": "3"},
                  {"prescriptionId":"13","treatmentId": "9", "treatmentDate":"2021-06-16", "doctor":"정의사", "medicine": "Tab 400mg","kind":"내복약","days":"3","patientId": "4"},
                  {"prescriptionId":"14","treatmentId": "10", "treatmentDate":"2021-06-15", "doctor":"조의사", "medicine": "LEGALON 140 Cap","kind":"내복약","days":"3","patientId": "5"},
                  {"prescriptionId":"15","treatmentId": "11", "treatmentDate":"2021-06-16", "doctor":"조의사", "medicine": "RIFODEX Tab 450mg","kind":"내복약","days":"3","patientId": "6"},
                  {"prescriptionId":"16","treatmentId": "12", "treatmentDate":"2021-06-15", "doctor":"정의사", "medicine": "SIMVALORD Tab 20mg", "kind":"내복약","days":"3","patientId": "6"},
                  {"prescriptionId":"17","treatmentId": "13", "treatmentDate":"2021-06-16", "doctor":"박의사", "medicine": "MESTINON Tab 60mg", "kind":"내복약","days":"3","patientId": "7"},
                  {"prescriptionId":"18","treatmentId": "14", "treatmentDate":"2021-06-15", "doctor":"정의사", "medicine": "SIMVALORD Tab 20mg","kind":"내복약","days":"3","patientId": "7"},
                  {"prescriptionId":"19","treatmentId": "15", "treatmentDate":"2021-06-16", "doctor":"정의사", "medicine": "MESTINON Tab 60mg", "kind":"내복약","days":"3","patientId": "8"},
                  {"prescriptionId":"20 ","treatmentId": "16", "treatmentDate":"2021-06-15", "doctor":"김의사", "medicine": "RIFODEX Tab 450mg", "kind":"내복약","days":"3","patientId": "9"},
                  {"prescriptionId":"21","treatmentId": "17", "treatmentDate":"2021-06-12", "doctor":"박의사", "medicine": "RIFODEX Tab 450mg", "kind":"내복약","days":"3","patientId": "10"},
                  {"prescriptionId":"22","treatmentId": "18", "treatmentDate":"2021-06-16", "doctor":"박의사", "medicine": "SUDAFED Tab 60mg", "kind":"내복약","days":"3","patientId": "11"},
                  {"prescriptionId":"23","treatmentId": "19", "treatmentDate":"2021-06-15", "doctor":"박의사", "medicine": "MESTINON Tab 60mg", "kind":"내복약","days":"3","patientId": "12"},
                  {"prescriptionId":"24","treatmentId": "20", "treatmentDate":"2021-06-16", "doctor":"정의사", "medicine": "Tab 400mg","kind":"내복약","days":"3","patientId": "13"},
                  {"prescriptionId":"25","treatmentId": "21", "treatmentDate":"2021-06-15", "doctor":"조의사", "medicine": "LEGALON 140 Cap","kind":"내복약","days":"3","patientId": "14"},
                  {"prescriptionId":"26","treatmentId": "22", "treatmentDate":"2021-06-16", "doctor":"조의사", "medicine": "RIFODEX Tab 450mg","kind":"내복약","days":"3","patientId": "15"},
                  {"prescriptionId":"27","treatmentId": "23", "treatmentDate":"2021-06-15", "doctor":"정의사", "medicine": "SIMVALORD Tab 20mg", "kind":"내복약","days":"3","patientId": "16"},
                  {"prescriptionId":"28","treatmentId": "24", "treatmentDate":"2021-06-16", "doctor":"박의사", "medicine": "MESTINON Tab 60mg", "kind":"내복약","days":"3","patientId": "17"},
                  {"prescriptionId":"29","treatmentId": "25", "treatmentDate":"2021-06-15", "doctor":"정의사", "medicine": "SIMVALORD Tab 20mg","kind":"내복약","days":"3","patientId": "18"},
                  {"prescriptionId":"30","treatmentId": "26", "treatmentDate":"2021-06-16", "doctor":"정의사", "medicine": "MESTINON Tab 60mg", "kind":"내복약","days":"3","patientId": "19"}
                ]


let testList = [];
testList = [{"testListId":"1","treatmentId": "1", "treatmentDate":"2021-06-16", "doctor":"정의사", "testCodeName": "순환기능검사", "patientId": "1"},
                  {"testListId":"1","treatmentId": "1", "treatmentDate":"2021-06-16", "doctor":"정의사", "testCodeName": "당뇨검사", "patientId": "1"},
                  {"testListId":"2","treatmentId": "2", "treatmentDate":"2021-06-15", "doctor":"조의사", "testCodeName": "검사1", "patientId": "1"},
                  {"testListId":"2","treatmentId": "2", "treatmentDate":"2021-06-15", "doctor":"조의사", "testCodeName": "검사2", "patientId": "1"},
                  {"testListId":"2","treatmentId": "2", "treatmentDate":"2021-06-15", "doctor":"조의사", "testCodeName": "검사3", "patientId": "1"},
                  {"testListId":"3","treatmentId": "3", "treatmentDate":"2021-06-16", "doctor":"김의사", "testCodeName": "검사1", "patientId": "2"},
                  {"testListId":"3","treatmentId": "3", "treatmentDate":"2021-06-16", "doctor":"김의사", "testCodeName": "검사2", "patientId": "2"},
                  {"testListId":"4","treatmentId": "4", "treatmentDate":"2021-06-15", "doctor":"김의사", "testCodeName": "검사1", "patientId": "2"},
                  {"testListId":"5","treatmentId": "5", "treatmentDate":"2021-06-13", "doctor":"정의사", "testCodeName": "검사2", "patientId": "2"},
                  {"testListId":"6","treatmentId": "6", "treatmentDate":"2021-06-12", "doctor":"박의사", "testCodeName": "검사3", "patientId": "2"},
                  {"testListId":"7","treatmentId": "7", "treatmentDate":"2021-06-16", "doctor":"박의사", "testCodeName": "검사4", "patientId": "3"},
                  {"testListId":"8","treatmentId": "8", "treatmentDate":"2021-06-15", "doctor":"박의사", "testCodeName": "검사5", "patientId": "3"},
                  {"testListId":"9","treatmentId": "9", "treatmentDate":"2021-06-16", "doctor":"정의사", "testCodeName": "검사6", "patientId": "4"},
                  {"testListId":"10","treatmentId": "10", "treatmentDate":"2021-06-15", "doctor":"조의사", "testCodeName": "검사7", "patientId": "5"},
                  {"testListId":"11","treatmentId": "11", "treatmentDate":"2021-06-16", "doctor":"조의사", "testCodeName": "검사8", "patientId": "6"},
                  {"testListId":"12","treatmentId": "12", "treatmentDate":"2021-06-15", "doctor":"정의사", "testCodeName": "검사9", "patientId": "6"},
                  {"testListId":"13","treatmentId": "13", "treatmentDate":"2021-06-16", "doctor":"박의사", "testCodeName": "검사10", "patientId": "7"},
                  {"testListId":"14","treatmentId": "14", "treatmentDate":"2021-06-15", "doctor":"정의사", "testCodeName": "검사11", "patientId": "7"},
                  {"testListId":"15","treatmentId": "15", "treatmentDate":"2021-06-16", "doctor":"정의사", "testCodeName": "검사12", "patientId": "8"},
                  {"testListId":"16","treatmentId": "16", "treatmentDate":"2021-06-15", "doctor":"김의사", "testCodeName": "검사13", "patientId": "9"},
                ]
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

export function getStaffList() {
  return staffList;
}

export function getAppointmentTime() {
  return appointmentTime;
}

export function getTreatmentList() {
  return treatmentList;
}

export function getPrescriptionList() {
  return prescriptionList;
}
export function getTestList() {
  return testList;
}