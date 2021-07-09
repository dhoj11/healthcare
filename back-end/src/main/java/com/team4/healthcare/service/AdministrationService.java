package com.team4.healthcare.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team4.healthcare.dao.AppointmentDao;
import com.team4.healthcare.dao.PatientDao;
import com.team4.healthcare.dao.PrescriptionDao;
import com.team4.healthcare.dao.ReceptionDao;
import com.team4.healthcare.dao.StaffDao;
import com.team4.healthcare.dao.TestDao;
import com.team4.healthcare.dao.TreatmentDao;
import com.team4.healthcare.dto.Appointment;
import com.team4.healthcare.dto.Patient;
import com.team4.healthcare.dto.Reception;
import com.team4.healthcare.dto.Staff;
import com.team4.healthcare.dto.SummeryPrescription;
import com.team4.healthcare.dto.SummeryTest;
import com.team4.healthcare.dto.SummeryTreatment;
import com.team4.healthcare.dto.TestList;

@Service
public class AdministrationService {
	
	private static final Logger logger = LoggerFactory.getLogger(AdministrationService.class);

	@Autowired
	private AppointmentDao appointmentDAO;
	@Autowired 
	private ReceptionDao receptionDAO;
	@Autowired
	private PatientDao patientDAO;
	@Autowired
	private TreatmentDao treatmentDAO;
	@Autowired
	private TestDao testDAO;
	@Autowired
	private PrescriptionDao prescriptionDAO;
	@Autowired
	private StaffDao staffDAO;
	
	public List<Appointment> getAppointmentList() {
		List<Appointment> appointmentList = appointmentDAO.selectAppointmentList();
		return appointmentList;
	}
	
	public boolean changeAppointmentState(int appointmen_id, String appointment_state) {
		int row = appointmentDAO.updateAppointmentState(appointmen_id, appointment_state);
		
		if(row == 1) {
			return true;
		}else {
			return false;
		}
	}
	
	public boolean addReceptionAfterAppointment(int appointment_id) {
		Appointment receptionData = appointmentDAO.selectAppointmentById(appointment_id);
		Reception reception = new Reception();
		reception.setReceptionInfo(receptionData);
		int row = receptionDAO.insertReceptionAfterAppointment(reception);
		
		if(row == 1) {
			return true;
		}else {
			return false;
		}
	}
	
	public List<Appointment> getAppointmentListByState(String appointment_state) {
		List<Appointment> appointmentList = appointmentDAO.selectAppointmentListByState(appointment_state);
		return appointmentList;
	}
	
	public List<Reception> getReceptionList(String reception_kind) {
		List<Reception> receptionList = receptionDAO.selectReceptionList(reception_kind);
		return receptionList;
	}
	
	public List<Reception> getReceptionListByState(String reception_state) {
		List<Reception> receptionList = receptionDAO.selectReceptionListByState(reception_state);
		return receptionList;
	}
	
	public boolean changeReceptionState(int reception_id, String reception_state) {
		int row = receptionDAO.updateReceptionState(reception_id, reception_state);
		
		if(row == 1) {
			return true;
		}else {
			return false;
		}
	}
	
	public Patient getPatient(int patient_id) {
		Patient patient = patientDAO.selectPatientById(patient_id);
		return patient;
	}
	
	public List<Patient> getPatientList() {
		List<Patient> patientList = patientDAO.selectPatientList();
		return patientList;
	}
	
	public List<Patient> getSearchedPatientList(String patient_name) {
		List<Patient> patientList = patientDAO.selectSearchedPatientList(patient_name);
		return patientList;
	}
	
	public boolean addNewPatient(Patient newPatient) {
		int row = patientDAO.insertNewPatient(newPatient);
		
		if(row == 1) {
			return true;
		}else {
			return false;
		}
	}
	
	public List<Appointment> checkAppointmentList(int patient_id) {
		List<Appointment> appointmentList = appointmentDAO.selectAppointmentHistory(patient_id);
		return appointmentList;
	}
	
	public List<SummeryTreatment> checkTreatmentList(int patient_id) {
		List<SummeryTreatment> treatmentList = treatmentDAO.selectTreatmentHistory(patient_id);
		return treatmentList;
	}
	
	public List<SummeryPrescription> checkPrescriptionList(int patient_id) {
		List<SummeryPrescription> prescriptionList = prescriptionDAO.selectPrescriptionHistory(patient_id);
		return prescriptionList;
	}
	
	public List<SummeryTest> checkTestList(int patient_id) {
		List<SummeryTest> testList = testDAO.selectTestHistory(patient_id);
		return testList;
	}
	
	public List<Staff> getDoctorNameList() {
		List<Staff> staffList = staffDAO.selectDoctorNameList();
		return staffList;
	}
	
	public boolean addReceptionAfterVisit(Reception reception) {
		int row = receptionDAO.insertReceptionAfterVisit(reception);
		
		if(row == 1) {
			return true;
		}else {
			return false;
		}
	}
	
	public List<String> isReserved(String staff_id, String appointment_date) {
		String[] times = {"10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"};
		List<String> timeSelect = new ArrayList<>(Arrays.asList(times));
		List<String> reservedTimes = appointmentDAO.selectAppointment(staff_id, appointment_date);
		
		if(reservedTimes.size() > 0) {
			for(String time : times) {
				for(String reserved: reservedTimes) {
					if(time.equals(reserved)) {
						timeSelect.remove(time);
					}
				}
			}
		}
		return timeSelect;
	}
	
	public boolean addNewAppointment(Appointment appointment) {
		int row = appointmentDAO.insertNewAppointment(appointment);
		
		if(row == 1) {
			return true;
		}else {
			return false;
		}
	}
	
	public List<TestList> getTestCodesByAppointment(int appointment_id) {
		List<TestList> testCodes = testDAO.selectTestsByAppointment(appointment_id);
		return testCodes;
	}
	
	public List<Appointment> CountbyAppointment(String appointment_date) {
		String[] times = {"10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"};
		List<Appointment> getTimeAndCount = appointmentDAO.selectCountByAppointment(appointment_date);
		List<Appointment> timeAndCount = new ArrayList<Appointment>();
		
		if(getTimeAndCount.size() > 0) {
			for(String time : times) {
				for(Appointment a : getTimeAndCount) {
					int index=0;
					if(time.equals(a.getAppointment_time())) {
						Appointment appointment = new Appointment();
						appointment.setAppointment_time(time);
						appointment.setCount(a.getCount());
						timeAndCount.add(appointment);
						break;
					}else {
						index++;
						if(index == getTimeAndCount.size()) {
							Appointment appointment = new Appointment();
							appointment.setAppointment_time(time);
							appointment.setCount(a.getCount());
							timeAndCount.add(appointment);
						}else {
							continue;
						}
					}
				}
			}
		}

		return timeAndCount;
	}
}
