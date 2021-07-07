package com.team4.healthcare.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team4.healthcare.dao.TreatmentDao;
import com.team4.healthcare.dto.Diagnose;
import com.team4.healthcare.dto.Disease;
import com.team4.healthcare.dto.Medicine;
import com.team4.healthcare.dto.Patient;
import com.team4.healthcare.dto.Prescription;
import com.team4.healthcare.dto.Test;
import com.team4.healthcare.dto.TestList;
import com.team4.healthcare.dto.TestResult;
import com.team4.healthcare.dto.Treatment;
import com.team4.healthcare.dto.TreatmentSave;

@Service
public class TreatmentService {
	
	@Autowired
	TreatmentDao treatmentDao;
	
	public List<Patient> getPatientList(String staff_id) {
		List<Integer> patientIdList = treatmentDao.selectPatientIds(staff_id);
		List<Patient> patientList = null;
		if(patientIdList.size()>0) patientList = treatmentDao.selectPatients(patientIdList);

		return patientList;
	}
	
	public List<Treatment> getTreatmentList(int patient_id){
		List<Treatment> treatmentList = treatmentDao.selectTreatments(patient_id);
		return treatmentList;
	}
	
	public String getTreatmentIsComplete(int patient_id) {
		int treatmentState = treatmentDao.selectTreatmentIsComplete(patient_id);
		if(treatmentState==1) return "complete";
		else return "before";
	}
	
	public String getTreatmentRecord(int treatment_id) {
		String treatmentRecord = treatmentDao.selectTreatmentRecord(treatment_id);
		return treatmentRecord;
	}
	
	public String getTreatmentComment(int treatment_id) {
		String treatmentComment = treatmentDao.selectTreatmentComment(treatment_id);
		return treatmentComment;
	}
	
	public List<Diagnose> getTreatmentDiagnoses(int treatment_id) {
		List<Diagnose> treatmentDiagnoses = treatmentDao.selectTreatmentDiagnoses(treatment_id);
		return treatmentDiagnoses;
	}
	
	public List<Disease> getSearchedDiseases(String disease_name){
		List<Disease> searchedDiseases = treatmentDao.selectDiseases(disease_name);
		return searchedDiseases;
	}
	
	public List<Prescription> getTreatmentPrescriptions(int treatment_id){
		List<Prescription> treatmentPrescriptions = treatmentDao.selectTreatmentPrescriptions(treatment_id);
		return treatmentPrescriptions;
	}
	
	public List<Medicine> getSearchedMedicine(String medicine_name){
		List<Medicine> searchedMedicines = treatmentDao.selectMedicines(medicine_name);
		return searchedMedicines;
	}
	
	public List<TestList> getTreatmentTestList(int treatment_id){
		List<TestList> treatmentTestList = treatmentDao.selectTreatmentTestList(treatment_id);
		return treatmentTestList;
	}
	
	public List<Test> getSearchedTest(String test_name){
		List<Test> searchedTests = treatmentDao.selectTests(test_name);
		return searchedTests;
	}
	
	public String getTreatmentSypton(int treatment_id) {
		int receptionId = treatmentDao.selectReceptionId(treatment_id);
		String treatmentSympton = treatmentDao.selectTreatmentSympton(receptionId);
		return treatmentSympton;
	}
	
	public void saveTreatment(TreatmentSave treatment) {
		
		int treatment_id = treatment.getTreatment_id();
		String treatment_record = treatment.getTreatment_record();
		String treatment_comment = treatment.getTreatment_comment();
		
		List<Diagnose> treatment_diagnoses = treatment.getTreatment_diagnoses();
		List<Prescription> treatment_prescriptions = treatment.getTreatment_prescriptions();
		List<TestList> treatment_tests = treatment.getTreatment_tests(); 
		
		treatmentDao.updateTreatment(treatment_id, treatment_record, treatment_comment);
		if(treatment_diagnoses.size()>0) treatmentDao.insertDiagnose(treatment_id, treatment_diagnoses);
		if(treatment_prescriptions.size()>0) treatmentDao.insertPrescription(treatment_id,treatment_prescriptions);
		
		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyMMdd", Locale.KOREA);
		String today = sdf.format(date);
		int test_list_id = Integer.parseInt(today +"0" +treatment_id);
				
		if(treatment_tests.size()>0) treatmentDao.insertTestList(treatment_id, test_list_id,treatment_tests);
		
		if(treatment_tests.size()>0) {
			for(TestList test : treatment_tests) {
				String test_code = test.getTest_code();
				List<Integer> test_details_id = treatmentDao.selectTestDetailsId(test_code);
				treatmentDao.insertTestResult(test_list_id, test_code, test_details_id);
			}
		}
	}
	
	public List<TestResult> getTreatmentTestResult(int treatment_id) {
		List<Integer> test_list_id = treatmentDao.getTestListId(treatment_id);
		List<TestResult> treatemnt_testResult = treatmentDao.selectTreatmentTestResults(test_list_id);
		return treatemnt_testResult;
	}
	
	
}
