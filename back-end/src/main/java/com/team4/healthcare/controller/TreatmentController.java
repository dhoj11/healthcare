package com.team4.healthcare.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

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
import com.team4.healthcare.service.TreatmentService;

@CrossOrigin(origins="*", allowedHeaders = "*")
@RestController
@RequestMapping("/treatment")
public class TreatmentController {

	@Autowired
	private TreatmentService treatmentService;
	
	@GetMapping("/patient/{staff_id}")
	public List<Patient> patientList(@PathVariable String staff_id){
		return treatmentService.getPatientList(staff_id);
	}
	
	@GetMapping("/treatments/{patient_id}")
	public List<Treatment> treatmentList(@PathVariable int patient_id){
		return treatmentService.getTreatmentList(patient_id);
	}
	
	@GetMapping("/treatmentIsComplete/{patient_id}")
	public String treatmentComplete(@PathVariable int patient_id) {
		String treatmentState = treatmentService.getTreatmentIsComplete(patient_id);
		return treatmentState;
	}
	
	@GetMapping("/record/{treatment_id}")
	public String treatmentRecord(@PathVariable int treatment_id) {
		return treatmentService.getTreatmentRecord(treatment_id);
	}
	
	@GetMapping("/comment/{treatment_id}")
	public String treatmentComment(@PathVariable int treatment_id) {
		return treatmentService.getTreatmentComment(treatment_id);
	}
	
	@GetMapping("/diagnoses/{treatment_id}")
	public List<Diagnose> treatmentDiagnoses(@PathVariable int treatment_id) {
		return treatmentService.getTreatmentDiagnoses(treatment_id);
	}
	
	@GetMapping("/diseases/{disease_name}")
	public List<Disease> searchDiseases(@PathVariable String disease_name){
		return treatmentService.getSearchedDiseases(disease_name);
	}
	
	@GetMapping("/prescriptions/{treatment_id}")
	public List<Prescription> treatmentPrescriptions(@PathVariable int treatment_id){
		return treatmentService.getTreatmentPrescriptions(treatment_id);
	}
	
	@GetMapping("/medicines/{medicine_name}")
	public List<Medicine> searchMedicine(@PathVariable String medicine_name){		
		return treatmentService.getSearchedMedicine(medicine_name);
	}
	
	@GetMapping("/testlist/{treatment_id}")
	public List<TestList> treatmentTestList(@PathVariable int treatment_id){
		return treatmentService.getTreatmentTestList(treatment_id);
	}
	
	@GetMapping("/tests/{test_name}")
	public List<Test> searchTests(@PathVariable String test_name){
		return treatmentService.getSearchedTest(test_name);
	}
	
	@GetMapping("/sympton/{treatment_id}")
	public String treatmentSympton(@PathVariable int treatment_id) {
		return treatmentService.getTreatmentSypton(treatment_id);
	}
	
	@PostMapping("/save")
	public void saveTreatment(@RequestBody TreatmentSave treatment) {
		treatmentService.saveTreatment(treatment);
	}
	
	@GetMapping("/testresult/{treatment_id}")
	public List<TestResult> treatmentTestResults(@PathVariable int treatment_id){
		 return treatmentService.getTreatmentTestResult(treatment_id);
	}

}
