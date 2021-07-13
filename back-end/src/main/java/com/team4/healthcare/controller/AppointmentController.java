package com.team4.healthcare.controller;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.team4.healthcare.dto.Appointment;
import com.team4.healthcare.dto.Hospital;
import com.team4.healthcare.dto.Patient;
import com.team4.healthcare.dto.Test;
import com.team4.healthcare.dto.TestDetail;
import com.team4.healthcare.dto.TestList;
import com.team4.healthcare.service.AppointmentService;
import com.team4.healthcare.service.HospitalService;
import com.team4.healthcare.service.PatientService;
import com.team4.healthcare.service.ReceptionService;
import com.team4.healthcare.service.TestListService;
import com.team4.healthcare.service.TestService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/appointment")
public class AppointmentController {
	private static final Logger logger = LoggerFactory.getLogger(AppointmentController.class);
	
	
	
	@Autowired
	private AppointmentService appointmentService;
	@Autowired
	private PatientService patientService;
	@Autowired
	private TestListService testListService;
	@Autowired
	private TestService testService;
	@Autowired
	private ReceptionService receptionService;
	@Autowired
	private HospitalService hospitalService;
	
	//appointment
	@GetMapping("/treatment")
	public Map<String,Object> treatmentAppointmentList(@RequestParam("appointment_date") String appointment_date){
		return appointmentService.getTreatmentAppointmentList(appointment_date);
	}
	@GetMapping("")
	public List<Appointment> appointmentList(@RequestParam String appointment_date){
		return appointmentService.getAppointmentList(appointment_date);
	}
	@GetMapping("/{patient_id}")
	public List<Appointment> appointmentListByPatientId(@PathVariable("patient_id") int patient_id){
		return appointmentService.getAppointmentListByPatientId(patient_id);
	}
	@PostMapping("/treatment")
	public void createTreatmentAppointment(@RequestBody Appointment appointment) {
		appointmentService.insertTreatmentAppointment(appointment);
	}
	@PutMapping("/treatment/{appointment_id}")
	public void cancelTreatmentAppointment(@PathVariable("appointment_id") int appointment_id) {
		appointmentService.cancelTreatmentAppointment(appointment_id);
	}
	@GetMapping("/test")
	public List<Appointment> testAppointmentList(@RequestParam("appointment_date") String appointment_date,@RequestParam("appointment_time") String appointment_time){
		return appointmentService.getTestAppointmentByDate(appointment_date, appointment_time);
	}
	
	@PutMapping("/test/{appointment_id}")
	public void cancelTestAppointment(@PathVariable("appointment_id") int appointment_id) {
		appointmentService.cancelTreatmentAppointment(appointment_id);
	}
	@PostMapping("/test")
	public void createTestAppointment(@RequestBody Appointment appointment) {
		appointmentService.insertTestAppointment(appointment);
	}
	@GetMapping("/maxappointmentid")
	public int maxAppointmentId() {
		return appointmentService.getMaxAppointmentId();
	}
	
	//test
	@GetMapping("/testcode")
	public Test getTestByCode(@RequestParam("test_code") String test_code) {
		return testService.getTestByCode(test_code);
	}
	
	//patient
	@GetMapping("/patient")
	public List<Patient> patientList(){
		return patientService.getPatientList();
	}
	
	@GetMapping("/patientbyname")
	public List<Patient> patientListByName(@RequestParam("patient_name") String patient_name){
		return patientService.getPatientListByName(patient_name);
	}
	
	//testList
	@GetMapping("/testcodelist/{appointment_id}")
	public List<String> testcodeList(@PathVariable("appointment_id") int appointment_id){
		return testListService.getTestCode(appointment_id);
	}
	@GetMapping("/testlist/{patient_id}")
	public List<TestList> testList(@PathVariable("patient_id") int patient_id){
		return testListService.getTestListByPatientId(patient_id);
	}
	@PutMapping("/testlist")
	public void testListAppointment(@RequestBody TestList testList) {
		System.out.println(testList.toString());
		testListService.testListAppointment(testList);
	}
	@PutMapping("/testlistwait/{appointment_id}")
	public void testListWait(@PathVariable("appointment_id") int appointment_id) {
		testListService.testListWait(appointment_id);
	}
	

	
	//testdetail
	@GetMapping("/testdetail")
	public List<TestDetail> testDetailList(@RequestParam("test_code") String test_code){
		return testListService.getTestDetail(test_code);
	}
	
	//reception
	@GetMapping("/reception")
	public String getReceptionStaffId(@RequestParam("test_list_id") int test_list_id, @RequestParam("test_code") String test_code) {
		return receptionService.getReceptionStaffId(test_list_id,test_code);
	}
	//hospital
	@GetMapping("/hospital")
	public Hospital getTimeSetting(@RequestParam("hospital_code") String hospital_code) {
		return hospitalService.getTimeSetting(hospital_code);
	}


}
