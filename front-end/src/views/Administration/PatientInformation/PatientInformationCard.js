import { useState, useEffect } from "react";
import PatientInformaionCard from "../common/PatientInformationCard";

function PatientInformationCard(props) {
  //전역상태로 환자id를 받으면 그 id에 해당하는 환자 정보 보여주기
  // const staticPatientList = getPatientList();
  // const filteredPatient = staticPatientList.filter(patient=> (patient.patientId === props.patientId));

  //환자 객체를 받을 때
  const [patient, setPatient] = useState({});

  useEffect(() => {
    setPatient(props.patient);
    return (() => {
        console.log("환자 카드 언마운트시 실행");
    });
  },[props.patient]);
  
  return (
    <>
    {patient !== undefined ? (<PatientInformaionCard patient={patient}/>):(null)}
    </>
  );
}

export default PatientInformationCard;