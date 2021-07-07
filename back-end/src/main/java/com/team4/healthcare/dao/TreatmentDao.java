package com.team4.healthcare.dao;

import java.util.List;

import com.team4.healthcare.dto.SummeryTreatment;

public interface TreatmentDao {
	public List<SummeryTreatment> selectTreatmentHistory(int patient_id);

}
