import { useState, useEffect } from "react";
import PatientInformaionCard from "../common/PatientInformationCard";

function PatientInformationCard(props) {

  const {patient} = props;
  
  return (
    <>
    {patient !== undefined ? (<PatientInformaionCard patient={patient}/>):(null)}
    </>
  );
}

export default PatientInformationCard;