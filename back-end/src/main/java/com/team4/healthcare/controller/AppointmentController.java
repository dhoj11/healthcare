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
import org.springframework.web.bind.annotation.RestController;

import com.team4.healthcare.dto.Appointment;
import com.team4.healthcare.dto.Patient;
import com.team4.healthcare.service.AppointmentService;
import com.team4.healthcare.service.PatientService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/appointment")
public class AppointmentController {
	private static final Logger logger = LoggerFactory.getLogger(AppointmentController.class);
	
	
	//appointment
	@Autowired
	private AppointmentService appointmentService;
	@Autowired
	private PatientService patientService;
	
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
	
	
	//patient
	@GetMapping("/patient")
	public List<Patient> patientList(){
		return patientService.getPatientList();
	}
	
	@GetMapping("/patientbyname")
	public List<Patient> patientListByName(@RequestParam("patient_name") String patient_name){
		return patientService.getPatientListByName(patient_name);
		
	}


}
