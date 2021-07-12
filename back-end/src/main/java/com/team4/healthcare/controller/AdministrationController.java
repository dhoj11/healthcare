package com.team4.healthcare.controller;

import java.text.ParseException;
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
import org.springframework.web.bind.annotation.RestController;

import com.team4.healthcare.dto.Appointment;
import com.team4.healthcare.dto.Patient;
import com.team4.healthcare.dto.Reception;
import com.team4.healthcare.dto.Staff;
import com.team4.healthcare.dto.SummeryPrescription;
import com.team4.healthcare.dto.SummeryTest;
import com.team4.healthcare.dto.SummeryTreatment;
import com.team4.healthcare.dto.TestList;
import com.team4.healthcare.service.AdministrationService;

@CrossOrigin(origins="*", allowedHeaders = "*")
@RestController
@RequestMapping("/administration")
public class AdministrationController {
	
	private static final Logger logger = LoggerFactory.getLogger(AdministrationController.class);
	
	@Autowired
	private AdministrationService administrationService;
	
	/**
	 * ���� ��¥�� �ش��ϴ� ���ฮ��Ʈ, ȯ�� �̸��� ������ �´�.
	 * @return List<Appointment>
	 */
	@GetMapping("/appointment")
	public List<Appointment> getAppointmentList() {
		List<Appointment> appointmentList = administrationService.getAppointmentList();
		return appointmentList;
	}
	
	/**
	 * ���� ���¸� �ٲ��ش�.
	 */
	@PutMapping("/appointment/{appointment_id}")
	public void changeAppointmentState(@PathVariable int appointment_id,@RequestBody String appointment_state) {
		boolean isChanged = administrationService.changeAppointmentState(appointment_id, appointment_state);
		
		if(isChanged) {
			logger.info("���� ���� ���� �Ϸ�");
		}else {
			logger.info("���� ���� ���� ����");
		}
	}
	
	/**
	 * ���࿡�� �������� ���°� �ٲ�� ���� ���̺� Ʃ�� �߰�
	 */
	@PostMapping("/appointment/reception/{appointment_id}")
	public void addReceptionAfterAppointment(@PathVariable int appointment_id) {
		boolean isAdded = administrationService.addReceptionAfterAppointment(appointment_id);
		
		if(isAdded) {
			logger.info("���� �� ���� �߰� ����");
		}else {
			logger.info("���� �� ���� �߰� ����");
		}
	}
	/**
	 * ȯ��id�� �ش��ϴ� ȯ�� ��ü�� �����´�
	 * @param patient_id
	 * @return Patient
	 */
	@GetMapping("/{patient_id}")
	public Patient getPatient(@PathVariable int patient_id) {
		Patient patient = administrationService.getPatient(patient_id);
		return patient;
	}
	
	/**
	 * ���� ���¿� ���� ���� ����Ʈ�� �����´�.
	 * @param appointment_state
	 * @return List<Appointment>
	 */
	@GetMapping("/appointment/state")
	public List<Appointment> getAppointmentListByState(@RequestParam("appointment_state") String appointment_state) {
		List<Appointment> appointmentList = administrationService.getAppointmentListByState(appointment_state);
		return appointmentList;
	}
	
	/**
	 * ���� ����Ʈ�� �����´�.
	 * @return List<Reception>
	 */
	@GetMapping("/reception")
	public List<Reception> getReceptionList(@RequestParam("reception_kind") String reception_kind) {
		List<Reception> receptionList = administrationService.getReceptionList(reception_kind);
		return receptionList;
	}
	
	@GetMapping("/reception/state")
	public List<Reception> getReceptionListByState(@RequestParam("reception_state") String reception_state) {
		List<Reception> receptionList = administrationService.getReceptionListByState(reception_state);
		return receptionList;
	}
	
	/**
	 * ���� ���¸� �ٲ��ش�.
	 */
	@PutMapping("/reception/{reception_id}")
	public void changeReceptionState(@PathVariable int reception_id,@RequestBody String reception_state) {
		boolean isChanged = administrationService.changeReceptionState(reception_id, reception_state);
		
		if(isChanged) {
			logger.info("���� ���� ���� �Ϸ�");
		}else {
			logger.info("���� ���� ���� ����");
		}
	}
	
	@GetMapping("/patient")
	public List<Patient> getPatientList() {
		List<Patient> patientList = administrationService.getPatientList();
		return patientList;
	}
	
	/**
	 * �̸����� �˻��� ȯ�� ����Ʈ
	 * @param patient_name
	 * @return List<Patient>
	 */
	@GetMapping("/patient/searching")
	public List<Patient> getSearchedPatientList(@RequestParam("patient_name") String patient_name) {
		List<Patient> patientList = administrationService.getSearchedPatientList(patient_name);
		return patientList;
	}
	/**
	 * �ű� ȸ�� ���(add)
	 * @param newPatient
	 */
	@PostMapping("/patient/new")
	public void addNewPatient(@RequestBody Patient newPatient) {
		boolean isAdded = administrationService.addNewPatient(newPatient);
		
		if(isAdded) {
			logger.info("�ű� ȸ�� ��� �Ϸ�");
		}else {
			logger.info("�ű� ȸ�� ��� ����");
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
			logger.info("�湮 ȯ�� ���� �Ϸ�");
		}else {
			logger.info("�湮 ȯ�� ���� ����");
		}
	}
	
	@GetMapping("/appointment/treatment/time")
	public List<String> isReserved(@RequestParam() String staff_id, @RequestParam() String appointment_date ) {
		List<String> timeSelect = administrationService.isReserved(staff_id, appointment_date);
		return timeSelect;
	}
	
	@PostMapping("/appointment")
	public void addNewAppointment(@RequestBody Appointment appointment) {
		boolean isAdded = administrationService.addNewAppointment(appointment);
		
		if(isAdded) {
			logger.info("���� ���� ��� �Ϸ�");
		}else {
			logger.info("���� ���� ��� ����");
		}
	}
	
	@GetMapping("/test/testcode")
	public List<TestList> getTestCodesByAppointment(@RequestParam() int reception_id) {
		List<TestList> testCodes = administrationService.getTestCodesByAppointment(reception_id);
		return testCodes;
	}
	@GetMapping("/appointment/test/time")
	public List<Appointment> CountbyAppointment(@RequestParam() String appointment_date) throws ParseException {
		String hospitalCode = "DZ0001";		//나중에 프론트에서 받아올 예정
		List<Appointment> timeAndCountList = administrationService.CountbyAppointment(appointment_date, hospitalCode);
		return timeAndCountList;
	}
	@PutMapping("/appointment/test/update")
	public void appointmentTestList(@RequestBody Map<String,List<TestList>> testList) throws Exception {

		List<TestList> testCodes = testList.get("testCodes");
		List<TestList> newTestList = testList.get("testList");
		
		administrationService.appointmentTestList(newTestList,testCodes);
		
		
	}
	
	@PutMapping("/appointment/test/state")
	public void changeTestStateToAppointment(@RequestBody TestList testList) {
		logger.info(testList.toString());
		administrationService.changeTestStateToAppointment(testList);
		
	}
	
}
