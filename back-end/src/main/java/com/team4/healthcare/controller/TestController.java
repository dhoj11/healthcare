package com.team4.healthcare.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team4.healthcare.dto.Patient;
import com.team4.healthcare.dto.TestList;
import com.team4.healthcare.dto.TestResult;
import com.team4.healthcare.service.TestService;

@CrossOrigin(origins="*", allowedHeaders = "*")
@RestController
@RequestMapping("/test")
public class TestController {

	@Autowired
	private TestService testService;
	
	@GetMapping("/list")
	public List<TestList> list(){
		return testService.getTestList();
	}
	
	@GetMapping("/patient/{patient_id}")
	public Patient pateint(@PathVariable int patient_id) {
		return testService.getPatient(patient_id);
	}
	
	@GetMapping("/isValid/{test_list_id}")
	public int isValid(@PathVariable int test_list_id) {
		return testService.isValidTestList(test_list_id);
	}
	
	@GetMapping("/patientBytestlistid/{test_list_id}")
	public Patient patientByTestListId(@PathVariable int test_list_id) {
		return testService.getPatientByTestListId(test_list_id);
	}
	
	@GetMapping("/testresult/")
	public List<TestResult> testResult(@RequestParam() int test_list_id, @RequestParam() int reception_id){
		return testService.getTestResult(test_list_id, reception_id);
	}
	
	@PutMapping("/testlist")
	public void updateTestListState(@RequestBody Map<String, String> obj) {
		testService.updateTestListState(obj);
	}
	
	@PutMapping("/testresult/")
	public void updateTestResult( @RequestBody List<TestResult> testResults) {
		testService.updateTestResult(testResults);
	}
	
	@GetMapping("/issaved/{test_list_id}")
	public Boolean isSaved(@PathVariable int test_list_id) {
		return testService.getTestSaved(test_list_id);
	}
}
