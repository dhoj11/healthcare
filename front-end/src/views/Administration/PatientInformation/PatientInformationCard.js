import "./PatientInformationCard.css";
import { getPatientList} from "../data";
import { useState } from "react";

function PatientInformationCard(props) {
//전역상태로 환자id를 받으면 그 id에 해당하는 환자 정보 보여주기
  const staticPatientList = getPatientList();
  const filteredPatient = staticPatientList.filter(patient=> (patient.patientId === props.patientId));
  console.log(filteredPatient);
  const [patient, setPatient] = useState(filteredPatient[0]);
  
  return (
    <div className="patient-information-card">
      <div className="first-card-row">
        <div>
          <img className="patient-icon" src="/resources/svg/emoji-smile.svg" />
        </div>
        <div className="patient-basic">
          <p className="patient-basic-information">{patient.name} ( {patient.gender} , {patient.age} )</p>
          <p className="patient-basic-information">생년월일 : {patient.birth}</p>
          <p className="patient-basic-information">연락처 : {patient.tel}</p>
          <p className="patient-basic-information">최근 내원일 : {patient.recentVisit}</p>
        </div>
      </div> 
      <div className="second-card-row">
        <div className="patient-detail">
          <span className="patient-detail-information">복용 약물</span>
          <input className="mr-2" type="checkbox" checked readOnly/>{patient.medicine}
        </div>
        <div className="patient-detail">
          <span className="patient-detail-information">만성 질환</span>
          <input className="mr-2" type="checkbox" checked readOnly/>{patient.disease}
        </div>
        <div className="patient-detail">
          <span className="patient-detail-information">특이 사항</span>
          <input className="mr-2" type="checkbox" checked readOnly/>{patient.comment}
        </div>
      </div>   
    </div>
  );
}

export default PatientInformationCard;