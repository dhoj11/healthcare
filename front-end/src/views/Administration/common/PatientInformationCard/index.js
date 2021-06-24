import styles from "./PatientInformationCard.module.css";

function PatientInformationCard(props) {

  const {patient} = props;

  return (
    <div className={styles.patient_information_card}>
      <div className={styles.first_card_row}>
        <div>
          <img className={styles.patient_icon} src="/resources/svg/emoji-smile.svg" />
        </div>
        <div className={styles.patient_basic}>
          <p className={styles.patient_basic_information}>{patient.name} ( {patient.gender} , {patient.age} )</p>
          <p className={styles.patient_basic_information}>생년월일 : {patient.birth}</p>
          <p className={styles.patient_basic_information}>연락처 : {patient.tel}</p>
          <p className={styles.patient_basic_information}>최근 내원일 : {patient.recentVisit}</p>
        </div>
      </div> 
      <div className={styles.second_card_row}>
        <div>
          <span className={styles.patient_detail_information}>복용 약물</span>
          <input className="mr-2" type="checkbox" checked readOnly/>{patient.medicine}
        </div>
        <div>
          <span className={styles.patient_detail_information}>만성 질환</span>
          <input className="mr-2" type="checkbox" checked readOnly/>{patient.disease}
        </div>
        <div>
          <span className={styles.patient_detail_information}>특이 사항</span>
          <input className="mr-2" type="checkbox" checked readOnly/>{patient.comment}
        </div>
      </div>   
    </div>
  );
}

export default PatientInformationCard;