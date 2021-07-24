package com.team4.healthcare.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.team4.healthcare.dto.Test;

import com.team4.healthcare.dao.TestDao;
import com.team4.healthcare.dto.Patient;
import com.team4.healthcare.dto.TestList;
import com.team4.healthcare.dto.TestResult;

@Service
public class TestService {
	@Autowired
	TestDao testDao;
	
	public int Test() {
		return testDao.test();
	}
	
	/* 아래 동호작성 나중에 주석 지웁니다. */
	public List<TestList> getTestList(){
		List<TestList> patientList = testDao.selectTestList();
		return patientList;
	}
	
	public Patient getPatient(int patient_id) {
		Patient patient = testDao.selectPatient(patient_id);
		return patient;
	}
	
	public int isValidTestList(int test_list_id) {
		int result = testDao.isValidTestList(test_list_id);
		return result;
	}
	
	public Patient getPatientByTestListId(int test_list_id) {
		Patient patient = testDao.getPatientByTestListId(test_list_id);
		return patient;
	}
	
	public List<TestResult> getTestResult(int test_list_id, int reception_id){
		List<TestResult> result = testDao.getTestResult(test_list_id, reception_id);
		return result;
	}
	
	public void updateTestListState(Map<String,String> obj) {
		int test_list_id = Integer.parseInt(obj.get("test_list_id"));
		int reception_id = Integer.parseInt(obj.get("reception_id"));
		String state = obj.get("state");
		
		testDao.updateTestListState(test_list_id, reception_id, state);
		List<String> stateList = testDao.getTestStateList(test_list_id);
		
		for(String item : stateList) {
			if(item.equals("진행")) {
				testDao.updateTestReceptionState(reception_id, "진행");
				break;
			}
			if(item.equals("요청")) {
				testDao.updateTestReceptionState(reception_id, "진행");
				break;
			}
			if(item.equals("대기")) {
				testDao.updateTestReceptionState(reception_id, "진행");
				break;
			}
			// state_list가 예약이거나 완료이면 -> 완료
			testDao.updateTestReceptionState(reception_id, "완료");
		}
		
		if(state.equals("완료"))
			testDao.updateTestAppointmentState(reception_id, "완료");
	}
	
	public void updateTestResult(List<TestResult> testResults) {
		for(TestResult item : testResults) {
			testDao.updateTestResult(item);
			testDao.updateTestResultSave(item.getTest_list_id());
		}
		//testDao.updateTestResultSave(testResults.get(0).getTest_list_id());
		
	}
	public Test getTestByCode(String test_code) {
		return testDao.selectByCode(test_code);
	}
	
	public Boolean getTestSaved(int test_list_id) {
		List<Integer> results = testDao.selectTestSaved(test_list_id);
		for(int r : results) {
			if(r==0) {
				return false;
			}
		}
		return true;
	}
	
}


