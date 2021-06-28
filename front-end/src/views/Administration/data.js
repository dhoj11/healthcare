let appointmentData = [];
appointmentData = [
  {"appointment_id":"1", "appointment_date": "2021-06-16","appointment_time": "10:30", "patient_name":"정동호", "appointment_kind":"진료","staff_name":"김의사","appointment_state": "완료","patient_id":"1"},
  {"appointment_id":"2", "appointment_date": "2021-06-16","appointment_time": "11:00", "patient_name":"조운호", "appointment_kind":"검사","staff_name":"박의사","appointment_state": "완료","patient_id":"2"},
  {"appointment_id":"3", "appointment_date": "2021-06-16","appointment_time": "11:30", "patient_name":"박선명", "appointment_kind":"진료","staff_name":"정의사","appointment_state": "내원","patient_id":"4"},
  {"appointment_id":"4", "appointment_date": "2021-06-16","appointment_time": "12:00", "patient_name":"홍길동", "appointment_kind":"검사","staff_name":"나의사","appointment_state": "내원","patient_id":"5"},
  {"appointment_id":"5", "appointment_date": "2021-06-16","appointment_time": "12:30", "patient_name":"아무개", "appointment_kind":"진료","staff_name":"김의사","appointment_state": "취소","patient_id":"6"},
  {"appointment_id":"6", "appointment_date": "2021-06-16","appointment_time": "11:30", "patient_name":"강슬기", "appointment_kind":"진료","staff_name":"정의사","appointment_state": "완료","patient_id":"7"},
  {"appointment_id":"7", "appointment_date": "2021-06-16","appointment_time": "12:00", "patient_name":"박수영", "appointment_kind":"검사","staff_name":"나의사","appointment_state": "내원","patient_id":"8"},
  {"appointment_id":"8", "appointment_date": "2021-06-16","appointment_time": "12:30", "patient_name":"김예림", "appointment_kind":"진료","staff_name":"김의사","appointment_state": "예약","patient_id":"9"},
  {"appointment_id":"9", "appointment_date": "2021-06-16","appointment_time": "13:00", "patient_name":"이마크", "appointment_kind":"진료","staff_name":"김의사","appointment_state": "완료","patient_id":"10"},
  {"appointment_id":"10", "appointment_date": "2021-06-16","appointment_time": "13:30", "patient_name":"황인준", "appointment_kind":"검사","staff_name":"박의사","appointment_state": "완료","patient_id":"11"},
  {"appointment_id":"11", "appointment_date": "2021-06-16","appointment_time": "14:00", "patient_name":"이제노", "appointment_kind":"진료","staff_name":"정의사","appointment_state": "내원","patient_id":"12"},
  {"appointment_id":"12", "appointment_date": "2021-06-16","appointment_time": "14:30", "patient_name":"이해찬", "appointment_kind":"검사","staff_name":"나의사","appointment_state": "내원","patient_id":"13"},
  {"appointment_id":"13", "appointment_date": "2021-06-16","appointment_time": "15:00", "patient_name":"나재민", "appointment_kind":"진료","staff_name":"김의사","appointment_state": "취소","patient_id":"14"},
  {"appointment_id":"14", "appointment_date": "2021-06-16","appointment_time": "15:30", "patient_name":"종천러", "appointment_kind":"진료","staff_name":"정의사","appointment_state": "완료","patient_id":"15"},
  {"appointment_id":"15", "appointment_date": "2021-06-16","appointment_time": "16:00", "patient_name":"박지성", "appointment_kind":"검사","staff_name":"나의사","appointment_state": "내원","patient_id":"16"},
  {"appointment_id":"16", "appointment_date": "2021-06-16","appointment_time": "16:30", "patient_name":"임나연", "appointment_kind":"진료","staff_name":"김의사","appointment_state": "예약","patient_id":"17"},
  {"appointment_id":"17", "appointment_date": "2021-06-16","appointment_time": "17:00", "patient_name":"황예지", "appointment_kind":"진료","staff_name":"정의사","appointment_state": "내원","patient_id":"18"},
  {"appointment_id":"18", "appointment_date": "2021-06-16","appointment_time": "17:30", "patient_name":"신류진", "appointment_kind":"검사","staff_name":"나의사","appointment_state": "내원","patient_id":"19"},
  {"appointment_id":"19", "appointment_date": "2021-06-15","appointment_time": "10:30", "patient_name":"정동호", "appointment_kind":"진료","staff_name":"김의사","appointment_state": "완료","patient_id":"1"},
  {"appointment_id":"20", "appointment_date": "2021-06-15","appointment_time": "11:00", "patient_name":"조운호", "appointment_kind":"진료","staff_name":"박의사","appointment_state": "완료","patient_id":"2"},
  {"appointment_id":"21", "appointment_date": "2021-06-15","appointment_time": "11:30", "patient_name":"박선명", "appointment_kind":"진료","staff_name":"정의사","appointment_state": "완료","patient_id":"4"},
  {"appointment_id":"22", "appointment_date": "2021-06-15","appointment_time": "12:00", "patient_name":"홍길동", "appointment_kind":"검사","staff_name":"나의사","appointment_state": "내원","patient_id":"5"},
  {"appointment_id":"23", "appointment_date": "2021-06-15","appointment_time": "12:30", "patient_name":"아무개", "appointment_kind":"진료","staff_name":"김의사","appointment_state": "내원","patient_id":"6"},
];

let receptionData = [];
receptionData = [
  {"reception_id":"1", "patient_name":"정동호", "reception_content":"두통","staff_name":"김의사","reception_state": "완료", "patient_id":"1", "appointment_id":"1"},
  {"reception_id":"2", "patient_name":"조운호", "reception_content":"감기","staff_name":"박의사","reception_state": "완료","patient_id":"2", "appointment_id":"2"},
  {"reception_id":"3", "patient_name":"박선명", "reception_content":"발열","staff_name":"정의사","reception_state": "완료","patient_id":"4", "appointment_id":"3"},
  {"reception_id":"4", "patient_name":"홍길동", "reception_content":"감기","staff_name":"나의사","reception_state": "진료","patient_id":"5","appointment_id":"4"},
  {"reception_id":"5", "patient_name":"아무개", "reception_content":"근육통","staff_name":"김의사","reception_state": "대기","patient_id":"6","appointment_id":"5"},
  {"reception_id":"6", "patient_name":"강슬기", "reception_content":"감기","staff_name":"김의사","reception_state": "대기","patient_id":"7","appointment_id":"6"},
  {"reception_id":"7", "patient_name":"박수영", "reception_content":"두통","staff_name":"나의사","reception_state": "대기","patient_id":"8","appointment_id":"7"},
  {"reception_id":"8", "patient_name":"김예림", "reception_content":"감기","staff_name":"나의사","reception_state": "대기","patient_id":"9","appointment_id":"8"},
  {"reception_id":"9", "patient_name":"이마크", "reception_content":"두통","staff_name":"김의사","reception_state": "완료", "patient_id":"10","appointment_id":"9"},
  {"reception_id":"10", "patient_name":"황인준", "reception_content":"감기","staff_name":"박의사","reception_state": "완료","patient_id":"11","appointment_id":"10"},
  {"reception_id":"11", "patient_name":"이제노", "reception_content":"발열","staff_name":"정의사","reception_state": "완료","patient_id":"12","appointment_id":"11"},
  {"reception_id":"12", "patient_name":"이해찬", "reception_content":"감기","staff_name":"나의사","reception_state": "진료","patient_id":"13","appointment_id":"12"},
  {"reception_id":"13", "patient_name":"나재민", "reception_content":"근육통","staff_name":"김의사","reception_state": "대기","patient_id":"14","appointment_id":"13"},
  {"reception_id":"14", "patient_name":"종천러", "reception_content":"감기","staff_name":"김의사","reception_state": "대기","patient_id":"15","appointment_id":"14"},
  {"reception_id":"15", "patient_name":"박지성", "reception_content":"두통","staff_name":"나의사","reception_state": "대기","patient_id":"16","appointment_id":"15"},
  {"reception_id":"16", "patient_name":"임나연", "reception_content":"감기","staff_name":"나의사","reception_state": "대기","patient_id":"17","appointment_id":"16"},
  {"reception_id":"17", "patient_name":"황예지", "reception_content":"두통","staff_name":"나의사","reception_state": "대기","patient_id":"18","appointment_id":"17"},
  {"reception_id":"18", "patient_name":"신류진", "reception_content":"감기","staff_name":"나의사","reception_state": "대기","patient_id":"19","appointment_id":"18"},
]

let testListData = [];
testListData = [
  {"test_list_id":"1", "patient_name":"정동호","staff_name":"김의사","patient_id":"1", "appointment_id":"1"},
  {"test_list_id":"2", "patient_name":"조운호","staff_name":"박의사","patient_id":"2", "appointment_id":"2"},
  {"test_list_id":"3", "patient_name":"박선명","staff_name":"정의사","patient_id":"4", "appointment_id":"3"},
  {"test_list_id":"4", "patient_name":"홍길동","staff_name":"나의사","patient_id":"5", "appointment_id":"4"},
  {"test_list_id":"5", "patient_name":"아무개","staff_name":"김의사","patient_id":"6","appointment_id":"5"},
  {"test_list_id":"6", "patient_name":"강슬기","staff_name":"김의사","patient_id":"7","appointment_id":"6"},
  {"test_list_id":"7", "patient_name":"박수영","staff_name":"나의사","patient_id":"8","appointment_id":"7"},
  {"test_list_id":"8", "patient_name":"김예림","staff_name":"박의사","patient_id":"9","appointment_id":"8"},
  {"test_list_id":"9", "patient_name":"이마크","staff_name":"박의사","patient_id":"10","appointment_id":"9"},
  {"test_list_id":"10", "patient_name":"황인준","staff_name":"김의사","patient_id":"11","appointment_id":"10"},
  {"test_list_id":"11", "patient_name":"이제노","staff_name":"박의사","patient_id":"12","appointment_id":"11"},
  {"test_list_id":"12", "patient_name":"이해찬","staff_name":"김의사","patient_id":"13","appointment_id":"12"},
  {"test_list_id":"13", "patient_name":"나재민","staff_name":"정의사","patient_id":"14","appointment_id":"13"},
  {"test_list_id":"14", "patient_name":"종천러","staff_name":"나의사","patient_id":"15","appointment_id":"14"},
  {"test_list_id":"15", "patient_name":"박지성","staff_name":"김의사","patient_id":"16","appointment_id":"15"},
  {"test_list_id":"16", "patient_name":"임나연","staff_name":"김의사","patient_id":"17","appointment_id":"16"},
  {"test_list_id":"17", "patient_name":"황예지","staff_name":"나의사","patient_id":"18","appointment_id":"17"},
  {"test_list_id":"18", "patient_name":"신류진","staff_name":"나의사","patient_id":"19","appointment_id":"18"},
];

let testCodeListData = [];
testCodeListData = [
  {"test_list_id":"1", "test_code":"SRC60", "test_name": "순환기능검사", "staff_name":"나검사","test_list_state": "대기","patient_id":"1"},
  {"test_list_id":"1", "test_code":"03221", "test_name": "경추엑스레이", "staff_name":"김검사","test_list_state": "대기","patient_id":"1"},
  {"test_list_id":"1", "test_code":"R102", "test_name": "당뇨검사", "staff_name":"나검사","test_list_state": "대기","patient_id":"1"},
  {"test_list_id":"2", "test_code":"SRC60", "test_name": "순환기능검사", "staff_name":"나검사","test_list_state": "대기","patient_id":"2"},
  {"test_list_id":"2", "test_code":"03221", "test_name": "경추엑스레이", "staff_name":"김검사","test_list_state": "대기","patient_id":"2"},
  {"test_list_id":"3", "test_code":"R102", "test_name": "당뇨검사", "staff_name":"나검사","test_list_state": "대기","patient_id":"4"},
  {"test_list_id":"3", "test_code":"SRC60", "test_name": "순환기능검사", "staff_name":"나검사","test_list_state": "대기","patient_id":"4"},
  {"test_list_id":"3", "test_code":"03221", "test_name": "경추엑스레이", "staff_name":"김검사","test_list_state": "대기","patient_id":"4"},
  {"test_list_id":"4", "test_code":"R102", "test_name": "당뇨검사", "staff_name":"나검사","test_list_state": "대기","patient_id":"5"},
  {"test_list_id":"5", "test_code":"SRC60", "test_name": "순환기능검사", "staff_name":"나검사","test_list_state": "대기","patient_id":"6"},
  {"test_list_id":"5", "test_code":"03221", "test_name": "경추엑스레이", "staff_name":"김검사","test_list_state": "대기","patient_id":"6"},
  {"test_list_id":"6", "test_code":"R102", "test_name": "당뇨검사", "staff_name":"나검사","test_list_state": "대기","patient_id":"7"},
  {"test_list_id":"7", "test_code":"SRC60", "test_name": "순환기능검사", "staff_name":"나검사","test_list_state": "대기","patient_id":"8"},
  {"test_list_id":"7", "test_code":"03221", "test_name": "경추엑스레이", "staff_name":"김검사","test_list_state": "대기","patient_id":"8"},
  {"test_list_id":"8", "test_code":"R102", "test_name": "당뇨검사", "staff_name":"나검사","test_list_state": "대기","patient_id":"9"},
  {"test_list_id":"9", "test_code":"R102", "test_name": "당뇨검사", "staff_name":"나검사","test_list_state": "대기","patient_id":"10"},
  {"test_list_id":"10", "test_code":"SRC60", "test_name": "순환기능검사", "staff_name":"나검사","test_list_state": "대기","patient_id":"11"},
  {"test_list_id":"10", "test_code":"03221", "test_name": "경추엑스레이", "staff_name":"김검사","test_list_state": "대기","patient_id":"11"},
  {"test_list_id":"10", "test_code":"R102", "test_name": "당뇨검사", "staff_name":"나검사","test_list_state": "대기","patient_id":"11"},
  {"test_list_id":"11", "test_code":"SRC60", "test_name": "순환기능검사", "staff_name":"나검사","test_list_state": "대기","patient_id":"12"},
  {"test_list_id":"11", "test_code":"03221", "test_name": "경추엑스레이", "staff_name":"김검사","test_list_state": "대기","patient_id":"12"},
  {"test_list_id":"12", "test_code":"R102", "test_name": "당뇨검사", "staff_name":"나검사","test_list_state": "대기","patient_id":"13"},
  {"test_list_id":"13", "test_code":"SRC60", "test_name": "순환기능검사", "staff_name":"나검사","test_list_state": "대기","patient_id":"14"},
  {"test_list_id":"13", "test_code":"03221", "test_name": "경추엑스레이", "staff_name":"김검사","test_list_state": "대기","patient_id":"14"},
  {"test_list_id":"14", "test_code":"R102", "test_name": "당뇨검사", "staff_name":"나검사","test_list_state": "대기","patient_id":"15"},
  {"test_list_id":"15", "test_code":"SRC60", "test_name": "순환기능검사", "staff_name":"나검사","test_list_state": "대기","patient_id":"16"},
  {"test_list_id":"15", "test_code":"03221", "test_name": "경추엑스레이", "staff_name":"김검사","test_list_state": "대기","patient_id":"16"},
  {"test_list_id":"16", "test_code":"R102", "test_name": "당뇨검사", "staff_name":"나검사","test_list_state": "대기","patient_id":"17"},
  {"test_list_id":"17", "test_code":"SRC60", "test_name": "순환기능검사", "staff_name":"나검사","test_list_state": "대기","patient_id":"18"},
  {"test_list_id":"17", "test_code":"03221", "test_name": "경추엑스레이", "staff_name":"김검사","test_list_state": "대기","patient_id":"18"},
  {"test_list_id":"18", "test_code":"R102", "test_name": "당뇨검사", "staff_name":"나검사","test_list_state": "대기","patient_id":"19"}
];

let patientData = [];
patientData = [
  {"patient_id":"1","patient_name":"정동호", "patient_gender":"남","patient_birth":"1995-01-01","age":"26","patient_tel": "010-1111-1111","recentVisit": "2021-06-16", "patient_medicine": "고혈압", "patient_disease": "고혈압", "patient_comment": "특이 사항 없음"},
  {"patient_id":"2","patient_name":"조운호", "patient_gender":"남","patient_birth":"1996-01-01","age":"25","patient_tel": "010-2222-2222","recentVisit": "2021-06-16", "patient_medicine": "당뇨", "patient_disease": "당뇨", "patient_comment": "특이 사항 없음"},
  {"patient_id":"3","patient_name":"조운호", "patient_gender":"남","patient_birth":"1996-02-01","age":"25","patient_tel": "010-1212-1212","recentVisit": "2021-06-16", "patient_medicine": "신경안정제", "patient_disease": "없음", "patient_comment": "특이 사항 없음"},
  {"patient_id":"4","patient_name":"박선명", "patient_gender":"여","patient_birth":"1997-01-01","age":"24","patient_tel": "010-3333-3333","recentVisit": "2021-06-16", "patient_medicine": "고혈압", "patient_disease": "고혈압", "patient_comment": "특이 사항 없음"},
  {"patient_id":"5","patient_name":"홍길동", "patient_gender":"남","patient_birth":"1951-01-01","age":"70","patient_tel": "010-4444-4444","recentVisit": "2021-06-16", "patient_medicine": "당뇨", "patient_disease": "당뇨", "patient_comment": "특이 사항 없음"},
  {"patient_id":"6","patient_name":"아무개", "patient_gender":"남","patient_birth":"1984-01-01","age":"37","patient_tel": "010-5555-5555","recentVisit": "2021-06-16", "patient_medicine": "없음", "patient_disease": "없음", "patient_comment": "특이 사항 없음"},
  {"patient_id":"7","patient_name":"강슬기", "patient_gender":"여","patient_birth":"1995-01-01","age":"26","patient_tel": "010-6666-6666","recentVisit": "2021-01-01", "patient_medicine": "없음", "patient_disease": "고혈압", "patient_comment": "특이 사항 없음"},
  {"patient_id":"8","patient_name":"박수영", "patient_gender":"여","patient_birth":"1996-01-01","age":"25","patient_tel": "010-7777-7777","recentVisit": "2021-01-01", "patient_medicine": "없음", "patient_disease": "없음", "patient_comment": "특이 사항 없음"},
  {"patient_id":"9","patient_name":"김예림", "patient_gender":"여","patient_birth":"1999-01-01","age":"22","patient_tel": "010-8888-8888","recentVisit": "2021-01-01", "patient_medicine": "당뇨", "patient_disease": "당뇨", "patient_comment": "특이 사항 없음"},
  {"patient_id":"10","patient_name":"이마크", "patient_gender":"남","patient_birth":"1995-01-01","age":"17","patient_tel": "010-9999-9999","recentVisit": "2021-06-16", "patient_medicine": "고혈압", "patient_disease": "고혈압", "patient_comment": "특이 사항 없음"},
  {"patient_id":"11","patient_name":"황인준", "patient_gender":"남","patient_birth":"1996-01-01","age":"25","patient_tel": "010-1010-1010","recentVisit": "2021-06-16", "patient_medicine": "당뇨", "patient_disease": "당뇨", "patient_comment": "특이 사항 없음"},
  {"patient_id":"12","patient_name":"이제노", "patient_gender":"남","patient_birth":"1996-02-01","age":"25","patient_tel": "010-1313-1313","recentVisit": "2021-06-16", "patient_medicine": "신경안정제", "patient_disease": "없음", "patient_comment": "특이 사항 없음"},
  {"patient_id":"13","patient_name":"이해찬", "patient_gender":"남","patient_birth":"1997-01-01","age":"24","patient_tel": "010-1414-1414","recentVisit": "2021-06-16", "patient_medicine": "고혈압", "patient_disease": "고혈압", "patient_comment": "특이 사항 없음"},
  {"patient_id":"14","patient_name":"나재민", "patient_gender":"남","patient_birth":"1951-01-01","age":"70","patient_tel": "010-1515-1515","recentVisit": "2021-06-16", "patient_medicine": "당뇨", "patient_disease": "당뇨", "patient_comment": "특이 사항 없음"},
  {"patient_id":"15","patient_name":"종천러", "patient_gender":"남","patient_birth":"1984-01-01","age":"37","patient_tel": "010-1616-1616","recentVisit": "2021-06-16", "patient_medicine": "없음", "patient_disease": "없음", "patient_comment": "특이 사항 없음"},
  {"patient_id":"16","patient_name":"박지성", "patient_gender":"남","patient_birth":"1995-01-01","age":"26","patient_tel": "010-1717-1717","recentVisit": "2021-01-01", "patient_medicine": "없음", "patient_disease": "고혈압", "patient_comment": "특이 사항 없음"},
  {"patient_id":"17","patient_name":"임나연", "patient_gender":"여","patient_birth":"1995-01-01","age":"26","patient_tel": "010-1818-1818","recentVisit": "2021-06-16", "patient_medicine": "고혈압", "patient_disease": "고혈압", "patient_comment": "특이 사항 없음"},
  {"patient_id":"18","patient_name":"황예지", "patient_gender":"여","patient_birth":"1996-01-01","age":"25","patient_tel": "010-1919-1919","recentVisit": "2021-06-16", "patient_medicine": "당뇨", "patient_disease": "당뇨", "patient_comment": "특이 사항 없음"},
  {"patient_id":"19","patient_name":"신류진", "patient_gender":"여","patient_birth":"1996-02-01","age":"25","patient_tel": "010-2020-2020","recentVisit": "2021-06-16", "patient_medicine": "신경안정제", "patient_disease": "없음", "patient_comment": "특이 사항 없음"}
];

let staffList = [];
staffList = [
  {"staffId":"aaa","staff_name":"정의사", "staff_tel": "010-1111-1111"},
  {"staffId":"bbb","staff_name":"조의사","staff_tel": "010-2222-2222"},
  {"staffId":"ccc","staff_name":"박의사","staff_tel": "010-1212-1212"},
  {"staffId":"ddd","staff_name":"김의사", "staff_tel": "010-3333-3333"}
]

let appointmentTime = [];
appointmentTime = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"];

let treatmentList = [];
treatmentList = [{"diagnose_id":"1","treatment_id": "1", "treatment_date":"2021-06-16", "staff_name":"정의사", "disease_name": "콜레라", "patient_id": "1"},
                  {"diagnose_id":"2","treatment_id": "1", "treatment_date":"2021-06-16", "staff_name":"정의사", "disease_name": "장티푸스", "patient_id": "1"},
                  {"diagnose_id":"3","treatment_id": "2", "treatment_date":"2021-06-15", "staff_name":"조의사", "disease_name": "고전적 콜레라", "patient_id": "1"},
                  {"diagnose_id":"4","treatment_id": "2", "treatment_date":"2021-06-15", "staff_name":"조의사", "disease_name": "장티푸스 및 파라티푸스", "patient_id": "1"},
                  {"diagnose_id":"5","treatment_id": "2", "treatment_date":"2021-06-15", "staff_name":"조의사", "disease_name": "상세불명의 콜레라", "patient_id": "1"},
                  {"diagnose_id":"6","treatment_id": "3", "treatment_date":"2021-06-16", "staff_name":"김의사", "disease_name": "엘토르 콜레라", "patient_id": "2"},
                  {"diagnose_id":"7","treatment_id": "3", "treatment_date":"2021-06-16", "staff_name":"김의사", "disease_name": "장티푸스", "patient_id": "2"},
                  {"diagnose_id":"8","treatment_id": "4", "treatment_date":"2021-06-15", "staff_name":"김의사", "disease_name": "장티푸스 및 파라티푸스", "patient_id": "2"},
                  {"diagnose_id":"9","treatment_id": "5", "treatment_date":"2021-06-13", "staff_name":"정의사", "disease_name": "엘토르 콜레라", "patient_id": "2"},
                  {"diagnose_id":"10","treatment_id": "6", "treatment_date":"2021-06-12", "staff_name":"박의사", "disease_name": "고전적 콜레라", "patient_id": "2"},
                  {"diagnose_id":"11","treatment_id": "7", "treatment_date":"2021-06-16", "staff_name":"박의사", "disease_name": "장티푸스 및 파라티푸스", "patient_id": "3"},
                  {"diagnose_id":"12","treatment_id": "8", "treatment_date":"2021-06-15", "staff_name":"박의사", "disease_name": "엘토르 콜레라", "patient_id": "3"},
                  {"diagnose_id":"13","treatment_id": "9", "treatment_date":"2021-06-16", "staff_name":"정의사", "disease_name": "상세불명의 콜레라", "patient_id": "4"},
                  {"diagnose_id":"14","treatment_id": "10", "treatment_date":"2021-06-15", "staff_name":"조의사", "disease_name": "콜레라", "patient_id": "5"},
                  {"diagnose_id":"15","treatment_id": "11", "treatment_date":"2021-06-16", "staff_name":"조의사", "disease_name": "고전적 콜레라", "patient_id": "6"},
                  {"diagnose_id":"16","treatment_id": "12", "treatment_date":"2021-06-15", "staff_name":"정의사", "disease_name": "장티푸스", "patient_id": "6"},
                  {"diagnose_id":"17","treatment_id": "13", "treatment_date":"2021-06-16", "staff_name":"박의사", "disease_name": "엘토르 콜레라", "patient_id": "7"},
                  {"diagnose_id":"18","treatment_id": "14", "treatment_date":"2021-06-15", "staff_name":"정의사", "disease_name": "장티푸스", "patient_id": "7"},
                  {"diagnose_id":"19","treatment_id": "15", "treatment_date":"2021-06-16", "staff_name":"정의사", "disease_name": "엘토르 콜레라", "patient_id": "8"},
                  {"diagnose_id":"20","treatment_id": "16", "treatment_date":"2021-06-15", "staff_name":"김의사", "disease_name": "고전적 콜레라", "patient_id": "9"},
                  {"diagnose_id":"21","treatment_id": "17", "treatment_date":"2021-06-16", "staff_name":"정의사", "disease_name": "장티푸스", "patient_id": "10"},
                  {"diagnose_id":"22","treatment_id": "18", "treatment_date":"2021-06-15", "staff_name":"조의사", "disease_name": "고전적 콜레라", "patient_id": "11"},
                  {"diagnose_id":"23","treatment_id": "19", "treatment_date":"2021-06-15", "staff_name":"조의사", "disease_name": "장티푸스 및 파라티푸스", "patient_id": "12"},
                  {"diagnose_id":"24","treatment_id": "20", "treatment_date":"2021-06-15", "staff_name":"조의사", "disease_name": "상세불명의 콜레라", "patient_id": "13"},
                  {"diagnose_id":"25","treatment_id": "21", "treatment_date":"2021-06-16", "staff_name":"김의사", "disease_name": "엘토르 콜레라", "patient_id": "14"},
                  {"diagnose_id":"26","treatment_id": "22", "treatment_date":"2021-06-16", "staff_name":"김의사", "disease_name": "장티푸스", "patient_id": "15"},
                  {"diagnose_id":"27","treatment_id": "23", "treatment_date":"2021-06-15", "staff_name":"김의사", "disease_name": "장티푸스 및 파라티푸스", "patient_id": "16"},
                  {"diagnose_id":"28","treatment_id": "24", "treatment_date":"2021-06-13", "staff_name":"정의사", "disease_name": "엘토르 콜레라", "patient_id": "17"},
                  {"diagnose_id":"29","treatment_id": "25", "treatment_date":"2021-06-12", "staff_name":"박의사", "disease_name": "고전적 콜레라", "patient_id": "18"},
                  {"diagnose_id":"30","treatment_id": "26", "treatment_date":"2021-06-16", "staff_name":"박의사", "disease_name": "장티푸스 및 파라티푸스", "patient_id": "19"}
                ]

let prescriptionList = [];
prescriptionList = [{"prescription_id":"1","treatment_id": "1", "treatment_date":"2021-06-16", "staff_name":"정의사", "medicine_name": "LEGALON 140 Cap", "medicine_kind":"내복약","prescription_comment":"3","patient_id": "1"},
                  {"prescription_id":"2","treatment_id": "1", "treatment_date":"2021-06-16", "staff_name":"정의사", "medicine_name": "SIMVALORD Tab 20mg", "medicine_kind":"내복약","prescription_comment":"3","patient_id": "1"},
                  {"prescription_id":"3","treatment_id": "2", "treatment_date":"2021-06-15", "staff_name":"조의사", "medicine_name": "RIFODEX Tab 450mg", "medicine_kind":"내복약","prescription_comment":"3","patient_id": "1"},
                  {"prescription_id":"4","treatment_id": "2", "treatment_date":"2021-06-15", "staff_name":"조의사", "medicine_name": "SUDAFED Tab 60mg", "medicine_kind":"내복약","prescription_comment":"3","patient_id": "1"},
                  {"prescription_id":"5","treatment_id": "2", "treatment_date":"2021-06-15", "staff_name":"조의사", "medicine_name": "Tab 400mg", "medicine_kind":"내복약","prescription_comment":"3","patient_id": "1"},
                  {"prescription_id":"6","treatment_id": "3", "treatment_date":"2021-06-16", "staff_name":"김의사", "medicine_name": "MESTINON Tab 60mg","medicine_kind":"내복약","prescription_comment":"3","patient_id": "2"},
                  {"prescription_id":"7","treatment_id": "3", "treatment_date":"2021-06-16", "staff_name":"김의사", "medicine_name": "SIMVALORD Tab 20mg", "medicine_kind":"내복약","prescription_comment":"3","patient_id": "2"},
                  {"prescription_id":"8","treatment_id": "4", "treatment_date":"2021-06-15", "staff_name":"김의사", "medicine_name": "SUDAFED Tab 60mg", "medicine_kind":"내복약","prescription_comment":"3","patient_id": "2"},
                  {"prescription_id":"9","treatment_id": "5", "treatment_date":"2021-06-13", "staff_name":"정의사", "medicine_name": "MESTINON Tab 60mg", "medicine_kind":"내복약","prescription_comment":"3","patient_id": "2"},
                  {"prescription_id":"10","treatment_id": "6", "treatment_date":"2021-06-12", "staff_name":"박의사", "medicine_name": "RIFODEX Tab 450mg", "medicine_kind":"내복약","prescription_comment":"3","patient_id": "2"},
                  {"prescription_id":"11","treatment_id": "7", "treatment_date":"2021-06-16", "staff_name":"박의사", "medicine_name": "SUDAFED Tab 60mg", "medicine_kind":"내복약","prescription_comment":"3","patient_id": "3"},
                  {"prescription_id":"12","treatment_id": "8", "treatment_date":"2021-06-15", "staff_name":"박의사", "medicine_name": "MESTINON Tab 60mg", "medicine_kind":"내복약","prescription_comment":"3","patient_id": "3"},
                  {"prescription_id":"13","treatment_id": "9", "treatment_date":"2021-06-16", "staff_name":"정의사", "medicine_name": "Tab 400mg","medicine_kind":"내복약","prescription_comment":"3","patient_id": "4"},
                  {"prescription_id":"14","treatment_id": "10", "treatment_date":"2021-06-15", "staff_name":"조의사", "medicine_name": "LEGALON 140 Cap","medicine_kind":"내복약","prescription_comment":"3","patient_id": "5"},
                  {"prescription_id":"15","treatment_id": "11", "treatment_date":"2021-06-16", "staff_name":"조의사", "medicine_name": "RIFODEX Tab 450mg","medicine_kind":"내복약","prescription_comment":"3","patient_id": "6"},
                  {"prescription_id":"16","treatment_id": "12", "treatment_date":"2021-06-15", "staff_name":"정의사", "medicine_name": "SIMVALORD Tab 20mg", "medicine_kind":"내복약","prescription_comment":"3","patient_id": "6"},
                  {"prescription_id":"17","treatment_id": "13", "treatment_date":"2021-06-16", "staff_name":"박의사", "medicine_name": "MESTINON Tab 60mg", "medicine_kind":"내복약","prescription_comment":"3","patient_id": "7"},
                  {"prescription_id":"18","treatment_id": "14", "treatment_date":"2021-06-15", "staff_name":"정의사", "medicine_name": "SIMVALORD Tab 20mg","medicine_kind":"내복약","prescription_comment":"3","patient_id": "7"},
                  {"prescription_id":"19","treatment_id": "15", "treatment_date":"2021-06-16", "staff_name":"정의사", "medicine_name": "MESTINON Tab 60mg", "medicine_kind":"내복약","prescription_comment":"3","patient_id": "8"},
                  {"prescription_id":"20 ","treatment_id": "16", "treatment_date":"2021-06-15", "staff_name":"김의사", "medicine_name": "RIFODEX Tab 450mg", "medicine_kind":"내복약","prescription_comment":"3","patient_id": "9"},
                  {"prescription_id":"21","treatment_id": "17", "treatment_date":"2021-06-12", "staff_name":"박의사", "medicine_name": "RIFODEX Tab 450mg", "medicine_kind":"내복약","prescription_comment":"3","patient_id": "10"},
                  {"prescription_id":"22","treatment_id": "18", "treatment_date":"2021-06-16", "staff_name":"박의사", "medicine_name": "SUDAFED Tab 60mg", "medicine_kind":"내복약","prescription_comment":"3","patient_id": "11"},
                  {"prescription_id":"23","treatment_id": "19", "treatment_date":"2021-06-15", "staff_name":"박의사", "medicine_name": "MESTINON Tab 60mg", "medicine_kind":"내복약","prescription_comment":"3","patient_id": "12"},
                  {"prescription_id":"24","treatment_id": "20", "treatment_date":"2021-06-16", "staff_name":"정의사", "medicine_name": "Tab 400mg","medicine_kind":"내복약","prescription_comment":"3","patient_id": "13"},
                  {"prescription_id":"25","treatment_id": "21", "treatment_date":"2021-06-15", "staff_name":"조의사", "medicine_name": "LEGALON 140 Cap","medicine_kind":"내복약","prescription_comment":"3","patient_id": "14"},
                  {"prescription_id":"26","treatment_id": "22", "treatment_date":"2021-06-16", "staff_name":"조의사", "medicine_name": "RIFODEX Tab 450mg","medicine_kind":"내복약","prescription_comment":"3","patient_id": "15"},
                  {"prescription_id":"27","treatment_id": "23", "treatment_date":"2021-06-15", "staff_name":"정의사", "medicine_name": "SIMVALORD Tab 20mg", "medicine_kind":"내복약","prescription_comment":"3","patient_id": "16"},
                  {"prescription_id":"28","treatment_id": "24", "treatment_date":"2021-06-16", "staff_name":"박의사", "medicine_name": "MESTINON Tab 60mg", "medicine_kind":"내복약","prescription_comment":"3","patient_id": "17"},
                  {"prescription_id":"29","treatment_id": "25", "treatment_date":"2021-06-15", "staff_name":"정의사", "medicine_name": "SIMVALORD Tab 20mg","medicine_kind":"내복약","prescription_comment":"3","patient_id": "18"},
                  {"prescription_id":"30","treatment_id": "26", "treatment_date":"2021-06-16", "staff_name":"정의사", "medicine_name": "MESTINON Tab 60mg", "medicine_kind":"내복약","prescription_comment":"3","patient_id": "19"}
                ]


let testList = [];
testList = [{"test_list_id":"1","treatment_id": "1", "treatment_date":"2021-06-16", "staff_name":"정의사", "test_name": "순환기능검사", "patient_id": "1"},
                  {"test_list_id":"1","treatment_id": "1", "treatment_date":"2021-06-16", "staff_name":"정의사", "test_name": "당뇨검사", "patient_id": "1"},
                  {"test_list_id":"2","treatment_id": "2", "treatment_date":"2021-06-15", "staff_name":"조의사", "test_name": "검사1", "patient_id": "1"},
                  {"test_list_id":"2","treatment_id": "2", "treatment_date":"2021-06-15", "staff_name":"조의사", "test_name": "검사2", "patient_id": "1"},
                  {"test_list_id":"2","treatment_id": "2", "treatment_date":"2021-06-15", "staff_name":"조의사", "test_name": "검사3", "patient_id": "1"},
                  {"test_list_id":"3","treatment_id": "3", "treatment_date":"2021-06-16", "staff_name":"김의사", "test_name": "검사1", "patient_id": "2"},
                  {"test_list_id":"3","treatment_id": "3", "treatment_date":"2021-06-16", "staff_name":"김의사", "test_name": "검사2", "patient_id": "2"},
                  {"test_list_id":"4","treatment_id": "4", "treatment_date":"2021-06-15", "staff_name":"김의사", "test_name": "검사1", "patient_id": "2"},
                  {"test_list_id":"5","treatment_id": "5", "treatment_date":"2021-06-13", "staff_name":"정의사", "test_name": "검사2", "patient_id": "2"},
                  {"test_list_id":"6","treatment_id": "6", "treatment_date":"2021-06-12", "staff_name":"박의사", "test_name": "검사3", "patient_id": "2"},
                  {"test_list_id":"7","treatment_id": "7", "treatment_date":"2021-06-16", "staff_name":"박의사", "test_name": "검사4", "patient_id": "3"},
                  {"test_list_id":"8","treatment_id": "8", "treatment_date":"2021-06-15", "staff_name":"박의사", "test_name": "검사5", "patient_id": "3"},
                  {"test_list_id":"9","treatment_id": "9", "treatment_date":"2021-06-16", "staff_name":"정의사", "test_name": "검사6", "patient_id": "4"},
                  {"test_list_id":"10","treatment_id": "10", "treatment_date":"2021-06-15", "staff_name":"조의사", "test_name": "검사7", "patient_id": "5"},
                  {"test_list_id":"11","treatment_id": "11", "treatment_date":"2021-06-16", "staff_name":"조의사", "test_name": "검사8", "patient_id": "6"},
                  {"test_list_id":"12","treatment_id": "12", "treatment_date":"2021-06-15", "staff_name":"정의사", "test_name": "검사9", "patient_id": "6"},
                  {"test_list_id":"13","treatment_id": "13", "treatment_date":"2021-06-16", "staff_name":"박의사", "test_name": "검사10", "patient_id": "7"},
                  {"test_list_id":"14","treatment_id": "14", "treatment_date":"2021-06-15", "staff_name":"정의사", "test_name": "검사11", "patient_id": "7"},
                  {"test_list_id":"15","treatment_id": "15", "treatment_date":"2021-06-16", "staff_name":"정의사", "test_name": "검사12", "patient_id": "8"},
                  {"test_list_id":"16","treatment_id": "16", "treatment_date":"2021-06-15", "staff_name":"김의사", "test_name": "검사13", "patient_id": "9"},
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