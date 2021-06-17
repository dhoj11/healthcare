import "./PatientInformation.css";
import PatientInformationCard from "./PatientInformationCard";
import { Tabs, Tab} from "react-bootstrap";
import AppointmentTab from "./PatientInformationTab/AppointmentTab";
import TreatmentTab from "./PatientInformationTab/TreatmentTab";
import TestTab from "./PatientInformationTab/TestTab";
import PrescriptionTab from "./PatientInformationTab/PrescriptionTab";
import AppointmentModal from "./AppointmentModal";
import { useState } from "react";

function PatientInformation(props) {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="patient-information">
      <div className="patient-card"><PatientInformationCard patientId={"2"}/></div>
      <div className="patient-information-tab">
        <Tabs defaultActiveKey="appointmentTab">
          <Tab eventKey="appointmentTab" title="예약">
            <AppointmentTab patientId={"2"}/>
          </Tab>
          <Tab eventKey="treatmentTab" title="진료">
            <TreatmentTab patientId={"2"}/>
          </Tab>
          <Tab eventKey="testTab" title="검사">
            <TestTab patientId={"2"}/>
          </Tab>
          <Tab eventKey="prescriptionTab" title="처방">
            <PrescriptionTab patientId={"2"}/>
          </Tab>
        </Tabs>
      </div>
      <div className="button-area">
        <div>
          <button type="button" className="btn btn-outline-secondary mr-2" >진료접수</button>
        </div>
        <div>
          <button type="button" className="btn btn-outline-secondary mr-3" onClick={openModal}>진료예약</button>
          <AppointmentModal isOpen={modalOpen} close={closeModal}/>
        </div>
      </div>
    </div>
  );
}

export default PatientInformation;