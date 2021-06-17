const patientList=[
  {"patient_name":"조운허","patient_gender":"남", "patient_birth":"960413","patient_tel":"01077069178","date":"2020-12-11"},
  {"patient_name":"아무개","patient_gender":"남", "patient_birth":"960413","patient_tel":"01077069178","date":"2020-12-11"},
  {"patient_name":"아무개","patient_gender":"남", "patient_birth":"960413","patient_tel":"01077069178","date":"2020-12-11"},
  {"patient_name":"조운ㅁ","patient_gender":"남", "patient_birth":"960413","patient_tel":"01077069178","date":"2020-12-11"},
  {"patient_name":"아무개","patient_gender":"남", "patient_birth":"960413","patient_tel":"01077069178","date":"2020-12-11"},
  {"patient_name":"아무개","patient_gender":"남", "patient_birth":"960413","patient_tel":"01077069178","date":"2020-12-11"},
  {"patient_name":"조호","patient_gender":"남", "patient_birth":"960413","patient_tel":"01077069178","date":"2020-12-11"},
  {"patient_name":"아무개","patient_gender":"남", "patient_birth":"960413","patient_tel":"01077069178","date":"2020-12-11"},
  {"patient_name":"조운호","patient_gender":"남", "patient_birth":"960413","patient_tel":"01077069178","date":"2020-12-11"},
  {"patient_name":"아무개","patient_gender":"남", "patient_birth":"960413","patient_tel":"01077069178","date":"2020-12-11"},
  {"patient_name":"조운호","patient_gender":"남", "patient_birth":"960413","patient_tel":"01077069178","date":"2020-12-11"},
  {"patient_name":"아무개","patient_gender":"남", "patient_birth":"960413","patient_tel":"01077069178","date":"2020-12-11"},
  {"patient_name":"아무개","patient_gender":"남", "patient_birth":"960413","patient_tel":"01077069178","date":"2020-12-11"},
  {"patient_name":"조운호","patient_gender":"남", "patient_birth":"960413","patient_tel":"01077069178","date":"2020-12-11"},
  {"patient_name":"아무개","patient_gender":"남", "patient_birth":"960413","patient_tel":"01077069178","date":"2020-12-11"},
  {"patient_name":"조운호","patient_gender":"남", "patient_birth":"960413","patient_tel":"01077069178","date":"2020-12-11"},
  {"patient_name":"아무개","patient_gender":"남", "patient_birth":"960413","patient_tel":"01077069178","date":"2020-12-11"},
  {"patient_name":"아무개","patient_gender":"남", "patient_birth":"960413","patient_tel":"01077069178","date":"2020-12-11"},
  {"patient_name":"아무개","patient_gender":"남", "patient_birth":"960413","patient_tel":"01077069178","date":"2020-12-11"}
]

const timeTables=[
  {"시간":"10:00", "김의사":null,"나의사":"진료완료","박의사":2,"정의사":null, "검사실":"진료완료"},
  {"시간":"10:30", "김의사":"진료완료","나의사":1,"박의사":2,"정의사":"진료완료", "검사실":4},
  {"시간":"11:00", "김의사":null,"나의사":1,"박의사":"진료완료","정의사":null, "검사실":3},
  {"시간":"12:00", "김의사":null,"나의사":"예약","박의사":2,"정의사":null, "검사실":3},
  {"시간":"13:00", "김의사":null,"나의사":null,"박의사":null,"정의사":null, "검사실":null},
  {"시간":"14:00", "김의사":null,"나의사":"취소","박의사":"진료완료","정의사":"예약", "검사실":"예약"},
  {"시간":"14:30", "김의사":null,"나의사":1,"박의사":2,"정의사":null, "검사실":3},
  {"시간":"15:00", "김의사":"예약","나의사":"취소","박의사":"취소","정의사":null, "검사실":"취소"},
  {"시간":"15:30", "김의사":null,"나의사":"예약","박의사":2,"정의사":null, "검사실":3},
  {"시간":"16:00", "김의사":null,"나의사":1,"박의사":"예약","정의사":null, "검사실":"취소"},
  {"시간":"16:30", "김의사":null,"나의사":1,"박의사":2,"정의사":"예약", "검사실":3},
  {"시간":"17:00", "김의사":null,"나의사":1,"박의사":"취소","정의사":null, "검사실":"예약"}
]

export function getPatientList() {
  return patientList;
}

export function getTimeTables(){
  return timeTables;
}