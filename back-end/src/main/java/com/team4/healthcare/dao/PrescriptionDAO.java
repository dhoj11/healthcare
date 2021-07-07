package com.team4.healthcare.dao;

import java.util.List;

import com.team4.healthcare.dto.SummeryPrescription;

public interface PrescriptionDAO {
	
	public List<SummeryPrescription> selectPrescriptionHistory(int patient_id);

}
