package com.team4.healthcare.controller;

import java.util.List;

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
import org.springframework.web.bind.annotation.RestController;

import com.team4.healthcare.dto.Appointment;
import com.team4.healthcare.dto.Patient;
import com.team4.healthcare.dto.Reception;
import com.team4.healthcare.dto.Staff;
import com.team4.healthcare.dto.SummeryPrescription;
import com.team4.healthcare.dto.SummeryTest;
import com.team4.healthcare.dto.SummeryTreatment;
import com.team4.healthcare.service.AdministrationService;

@CrossOrigin(origins="*", allowedHeaders = "*")
@RestController
@RequestMapping("/administration")
public class AdministrationController {
	
	private static final Logger logger = LoggerFactory.getLogger(AdministrationController.class);
	
	@Autowired
	private AdministrationService administrationService;
	
	/**
	 * 오늘 날짜에 해당하는 예약리스트, 환자 이름을 가지고 온다.
	 * @return List<Appointment>
	 */
	@GetMapping("/appointment")
	public List<Appointment> getAppointmentList() {
		List<Appointment> appointmentList = administrationService.getAppointmentList();
		appointmentList.toString();
		return appointmentList;
	}
	
	/**
	 * 예약 상태를 바꿔준다.
	 */
	@PutMapping("/appointment/{appointment_id}")
	public void changeAppointmentState(@PathVariable int appointment_id,@RequestBody String appointment_state) {
		boolean isChanged = administrationService.changeAppointmentState(appointment_id, appointment_state);
		
		if(isChanged) {
			logger.info("예약 상태 변경 완료");
		}else {
			logger.info("예약 상태 변경 오류");
		}
	}
	
	/**
	 * 예약에서 내원으로 상태가 바뀌면 접수 테이블에 튜플 추가
	 */
	@PostMapping("/appointment/reception/{appointment_id}")
	public void addReceptionAfterAppointment(@PathVariable int appointment_id) {
		boolean isAdded = administrationService.addReceptionAfterAppointment(appointment_id);
		
		if(isAdded) {
			logger.info("예약 후 접수 추가 성공");
		}else {
			logger.info("예약 후 접수 추가 실패");
		}
	}
	/**
	 * 환자id에 해당하는 환자 객체를 가져온다
	 * @param patient_id
	 * @return Patient
	 */
	@GetMapping("/{patient_id}")
	public Patient getPatient(@PathVariable int patient_id) {
		Patient patient = administrationService.getPatient(patient_id);
		return patient;
	}
	
	/**
	 * 예약 상태에 따른 예약 리스트를 가져온다.
	 * @param appointment_state
	 * @return List<Appointment>
	 */
	@GetMapping("/appointment/state")
	public List<Appointment> getAppointmentListByState(@RequestParam("appointment_state") String appointment_state) {
		List<Appointment> appointmentList = administrationService.getAppointmentListByState(appointment_state);
		return appointmentList;
	}
	
	/**
	 * 접수 리스트를 가져온다.
	 * @return List<Reception>
	 */
	@GetMapping("/reception")
	public List<Reception> getReceptionList() {
		List<Reception> receptionList = administrationService.getReceptionList();
		return receptionList;
	}
	
	@GetMapping("/reception/state")
	public List<Reception> getReceptionListByState(@RequestParam("reception_state") String reception_state) {
		List<Reception> receptionList = administrationService.getReceptionListByState(reception_state);
		return receptionList;
	}
	
	/**
	 * 접수 상태를 바꿔준다.
	 */
	@PutMapping("/reception/{reception_id}")
	public void changeReceptionState(@PathVariable int reception_id,@RequestBody String reception_state) {
		boolean isChanged = administrationService.changeReceptionState(reception_id, reception_state);
		
		if(isChanged) {
			logger.info("접수 상태 변경 완료");
		}else {
			logger.info("접수 상태 변경 오류");
		}
	}
	
	@GetMapping("/patient")
	public List<Patient> getPatientList() {
		List<Patient> patientList = administrationService.getPatientList();
		return patientList;
	}
	
	/**
	 * 이름으로 검색된 환자 리스트
	 * @param patient_name
	 * @return List<Patient>
	 */
	@GetMapping("/patient/searching")
	public List<Patient> getSearchedPatientList(@RequestParam("patient_name") String patient_name) {
		List<Patient> patientList = administrationService.getSearchedPatientList(patient_name);
		return patientList;
	}
	/**
	 * 신규 회원 등록(add)
	 * @param newPatient
	 */
	@PostMapping("/patient/new")
	public void addNewPatient(@RequestBody Patient newPatient) {
		boolean isAdded = administrationService.addNewPatient(newPatient);
		
		if(isAdded) {
			logger.info("신규 회원 등록 완료");
		}else {
			logger.info("신규 회원 등록 오류");
		}
	}
	
	@GetMapping("/patient/appointment")
	public List<Appointment> checkAppointmentList(@RequestParam() int patient_id) {
		List<Appointment> appointmentList = administrationService.checkAppointmentList(patient_id);
		return appointmentList;
	}
	
	@GetMapping("/patient/treatment")
	public List<SummeryTreatment> checkTreatmentList(@RequestParam() int patient_id) {
		List<SummeryTreatment> treatmentList = administrationService.checkTreatmentList(patient_id);
		return treatmentList;
	}
	
	@GetMapping("/patient/prescription")
	public List<SummeryPrescription> checkPrescriptionList(@RequestParam() int patient_id) {
		List<SummeryPrescription> prescriptionList = administrationService.checkPrescriptionList(patient_id);
		return prescriptionList;
	}
	
	@GetMapping("/patient/test")
	public List<SummeryTest> checkTestList(@RequestParam() int patient_id) {
		List<SummeryTest> testList = administrationService.checkTestList(patient_id);
		return testList;
	}
	
	@GetMapping("/staff")
	public List<Staff> getDoctorNameList() {
		List<Staff> staffList = administrationService.getDoctorNameList();
		return staffList;
	}
	
	@PostMapping("/reception/visit")
	public void addReceptionAfterVisit(@RequestBody Reception reception) {
		boolean isAdded = administrationService.addReceptionAfterVisit(reception);
		
		if(isAdded) {
			logger.info("방문 환자 접수 완료");
		}else {
			logger.info("방문 환자 접수 오류");
		}
	}
	
	@GetMapping("/appointment/time")
	public List<String> isReserved(@RequestParam() String staff_id, @RequestParam() String appointment_date ) {
		List<String> timeSelect = administrationService.isReserved(staff_id, appointment_date);
		return timeSelect;
	}
	
	@PostMapping("/appointment/treatment")
	public void addNewTreatmentAppointment(@RequestBody Appointment appointment) {
		boolean isAdded = administrationService.addNewTreatmentAppointment(appointment);
		
		if(isAdded) {
			logger.info("진료 예약 등록 완료");
		}else {
			logger.info("진료 예약 등록 오류");
		}
	}
}
