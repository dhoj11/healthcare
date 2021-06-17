import "./index.css";
import Appointment from "./Appointment";
import PatientInformation from "./PatientInformation";
import Reception from "./Reception";
import TestList from "./TestList";
import SearchPatient from "./SearchPatient";

function Administration(props) {
  return (
    <div className="first-content">
      <div>
        <div className="second-content">
          <div className="appointment-component"><Appointment /></div>
          <div className="reception-component"><Reception /></div>
        </div>
        <div className="testlist-component">
          <TestList />
        </div>
      </div>
      <div>
        <div className="search-patient-component"><SearchPatient /></div>
        <div className="patient-information-component"><PatientInformation /></div>
        
      </div>
    </div>
    
  );
}

export default Administration;