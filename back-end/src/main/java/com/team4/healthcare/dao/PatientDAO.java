package com.team4.healthcare.dao;

import java.util.List;

import com.team4.healthcare.dto.Patient;

public interface PatientDAO {
	
	public Patient selectPatientById(int patient_id);
	public List<Patient> selectPatientList();
	public List<Patient> selectSearchedPatientList(String patient_name);
	public int insertNewPatient(Patient newPatient);

}
