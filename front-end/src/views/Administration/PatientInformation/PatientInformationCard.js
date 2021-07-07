import { useState, useEffect } from "react";
import PatientInformaionCard from "../common/PatientInformationCard";

function PatientInformationCard(props) {
  
  return (
    <>
    {props.patient !== undefined ? (<PatientInformaionCard patient={props.patient}/>):(null)}
    </>
  );
}

export default PatientInformationCard;