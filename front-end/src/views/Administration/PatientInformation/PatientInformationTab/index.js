import { Tabs, Tab} from "react-bootstrap";
import AppointmentTab from "./AppointmentTab";
import TreatmentTab from "./TreatmentTab";
import TestTab from "./TestTab";
import PrescriptionTab from "./PrescriptionTab";

function PatientInformationTab(props) {

  const {selectedPatientId} = props;

  return (
    <>
      <Tabs defaultActiveKey="appointmentTab">
        <Tab eventKey="appointmentTab" title="예약">
          <AppointmentTab patientId={selectedPatientId}/>
        </Tab>
        <Tab eventKey="treatmentTab" title="진료">
          <TreatmentTab patientId={selectedPatientId}/>
        </Tab>
        <Tab eventKey="testTab" title="검사">
          <TestTab patientId={selectedPatientId}/>
        </Tab>
        <Tab eventKey="prescriptionTab" title="처방">
          <PrescriptionTab patientId={selectedPatientId}/>
        </Tab>
      </Tabs>
    </>
  );
}

export default PatientInformationTab;