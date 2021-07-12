package com.team4.healthcare.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.team4.healthcare.dto.Diagnose;
import com.team4.healthcare.dto.Disease;
import com.team4.healthcare.dto.Medicine;
import com.team4.healthcare.dto.Patient;
import com.team4.healthcare.dto.Prescription;
import com.team4.healthcare.dto.SummeryTreatment;
import com.team4.healthcare.dto.Test;
import com.team4.healthcare.dto.TestList;
import com.team4.healthcare.dto.TestResult;
import com.team4.healthcare.dto.Treatment;

public interface TreatmentDao {
	public List<SummeryTreatment> selectTreatmentHistory(int patient_id);
	
	public List<Integer> selectPatientIds(String staff_id);
	public List<Patient> selectPatients(List<Integer> patientidList);
	public int selectTreatmentIsComplete(int patient_id);
	public List<Treatment> selectTreatments(int pateint_id);
	public String selectTreatmentRecord(int treatment_id);
	public String selectTreatmentComment(int treatment_id);
	public List<Diagnose> selectTreatmentDiagnoses(int treatment_id);
	public List<Disease> selectDiseases(String disease_name);
	public List<Prescription> selectTreatmentPrescriptions(int treatment_id);
	public List<Medicine> selectMedicines(String medicine_name);
	public List<TestList> selectTreatmentTestList(int treatmnet_id);
	public List<Test> selectTests(String test_name);
	public int selectReceptionId(int treatmnet_id);
	public String selectTreatmentSympton(int receptionId);
	
	public void updateTreatment(
								@Param(value = "treatment_id")int treatment_id
							   ,@Param(value = "treatment_record")String treatment_record
							   ,@Param(value = "treatment_comment") String treatment_comment
							   );
	
	public void insertDiagnose(
							   @Param("treatment_id")int treatment_id
							  ,@Param("treatment_diagnoses")List<Diagnose> treatment_diagnoses
							  );
	
	public void insertPrescription(
							   @Param("treatment_id")int treatment_id
							  ,@Param("treatment_prescriptions")List<Prescription> treatment_prescriptions
							  );
	
	public int getReceptionId(int treatment_id);
	
	public void insertTestList(
							   @Param("treatment_id")int treatment_id
							  ,@Param("reception_id")int reception_id
							  ,@Param("test_list_id")int test_list_id
							  ,@Param("treatment_tests")List<TestList> treatment_tests
							  );
	
	public List<Integer> selectTestDetailsId(String test_code);
	
	public void insertTestResult(
							   @Param("test_list_id")int test_list_id
							  ,@Param("test_code")String test_code
							  ,@Param("test_details_id")List<Integer> test_details_id
							  );
	
	public int getPatiendId(int treatment_id);
	public String getStaffId(int treatment_id);
	
	public void insertReception(
								@Param("patient_id") int patient_id
							   ,@Param("staff_id") String staff_id
								);
	
	public List<Integer> getTestListId(int treatment_id);
	
	public List<TestResult> selectTreatmentTestResults(List<Integer> test_list_id);

}