package com.team4.healthcare.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team4.healthcare.dao.PatientDao;
import com.team4.healthcare.dto.Patient;

@Service
public class PatientService {
	@Autowired
	private PatientDao patientDao;
	
	public List<Patient> getPatientList(){
		return patientDao.selectPatientList();
	}
	
	public List<Patient> getPatientListByName(String patient_name) {
		return patientDao.selectPatientByName(patient_name);
	}
}
