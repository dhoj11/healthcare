import { Tabs, Tab} from "react-bootstrap";
import AppointmentTab from "./AppointmentTab";
import TreatmentTab from "./TreatmentTab";
import TestTab from "./TestTab";
import PrescriptionTab from "./PrescriptionTab";

function PatientInformationTab(props) {

  const {patient} = props;

  return (
    <>
    {patient !==undefined ? (
      <Tabs defaultActiveKey="appointmentTab">
        <Tab eventKey="appointmentTab" title="예약">
          <AppointmentTab patientId={patient.patient_id}/>
        </Tab>
        <Tab eventKey="treatmentTab" title="진료">
          <TreatmentTab patientId={patient.patient_id}/>
        </Tab>
        <Tab eventKey="testTab" title="검사">
          <TestTab patientId={patient.patient_id}/>
        </Tab>
        <Tab eventKey="prescriptionTab" title="처방">
          <PrescriptionTab patientId={patient.patient_id}/>
        </Tab>
      </Tabs>) : (null)}
      
    </>
  );
}

export default PatientInformationTab;