package com.team4.healthcare.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team4.healthcare.dao.AppointmentDao;
import com.team4.healthcare.dao.HospitalDao;
import com.team4.healthcare.dao.PatientDao;
import com.team4.healthcare.dao.PrescriptionDao;
import com.team4.healthcare.dao.ReceptionDao;
import com.team4.healthcare.dao.StaffDao;
import com.team4.healthcare.dao.TestDao;
import com.team4.healthcare.dao.TreatmentDao;
import com.team4.healthcare.dto.Appointment;
import com.team4.healthcare.dto.Hospital;
import com.team4.healthcare.dto.Patient;
import com.team4.healthcare.dto.Reception;
import com.team4.healthcare.dto.Staff;
import com.team4.healthcare.dto.SummeryPrescription;
import com.team4.healthcare.dto.SummeryTest;
import com.team4.healthcare.dto.SummeryTreatment;
import com.team4.healthcare.dto.TestList;
import com.team4.healthcare.dto.Treatment;

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
	@Autowired
	private HospitalDao hospitalDAO;
	
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
	
	public void addReceptionAfterAppointment(int appointment_id) {
		Appointment receptionData = appointmentDAO.selectAppointmentById(appointment_id);
		Reception reception = new Reception();
		reception.setReceptionInfo(receptionData);
		int row = receptionDAO.insertReceptionAfterAppointment(reception);
		
		// 방금 추가된 접수 번호 불러와서
		int reception_id = receptionDAO.selectReceptionId(reception, appointment_id);
		
		// treatmentDTO 에 recetion_id, patient_id, staff_id 담고
		Treatment addTreatment = receptionDAO.getCurrentReception(reception_id);
		
		// treatment 테이블에 위에서 가져온거 reception_id, treatment_date (now()로), patient_id, staff_id 추가
		receptionDAO.addTreatment(addTreatment);
		
		//환자의 최근 내원일 변경
		patientDAO.updatePatientRecentVisit(reception.getPatient_id());
	}
	
	public void addTestReceptionAfterAppointment(int appointment_id) {
		Appointment receptionData = appointmentDAO.selectAppointmentById(appointment_id);
		Reception reception = new Reception();
		reception.setReceptionInfo(receptionData);
		int row = receptionDAO.insertReceptionAfterAppointment(reception);
		
		// 방금 추가된 접수 번호 불러와서
		int reception_id = receptionDAO.selectReceptionId(reception, appointment_id);
		
		//테스트리스트의 접수 번호를 방금 추가된 접수 번호로 변경
		testDAO.updateTestListAfterReception(appointment_id, reception_id);
		
		//환자의 최근 내원일 변경
		patientDAO.updatePatientRecentVisit(reception.getPatient_id());
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
	
	public void addReceptionAfterVisit(Reception reception) {
		int row = receptionDAO.insertReceptionAfterVisit(reception);
		patientDAO.updatePatientRecentVisit(reception.getPatient_id());
		
		Treatment addTreatment = new Treatment();
		int latelyReceptionId = receptionDAO.getLatelyReceptionId();
		addTreatment.setReception_id(latelyReceptionId);
		addTreatment.setPatient_id(reception.getPatient_id());
		addTreatment.setStaff_id(reception.getStaff_id());
		receptionDAO.addTreatment(addTreatment);
	}

	public List<String> isReserved(String hospital_code, String staff_id, String appointment_date) throws ParseException {
		
		SimpleDateFormat format = new SimpleDateFormat("HH:mm");

		Hospital timeSetting = hospitalDAO.selectTimeSetting(hospital_code);
		Date offstartDate = format.parse(timeSetting.getOfficehour_start());
		Date offEndDate = format.parse(timeSetting.getOfficehour_end());
		Date lunchstartDate = format.parse(timeSetting.getLunch_start());
		Date lunchEndDate = format.parse(timeSetting.getLunch_end());
		int interval = timeSetting.getOfficehour_interval();

		List<String> times = new ArrayList<String>();

		String time = format.format(offstartDate);
		times.add(time);

		Calendar cal = Calendar.getInstance();
		cal.setTime(offstartDate);
		while(true) {
			cal.add(Calendar.MINUTE, interval);
			if(offEndDate.compareTo(cal.getTime()) == 0) {
				break;
			}else if(cal.getTime().compareTo(lunchstartDate) >= 0 && cal.getTime().compareTo(lunchEndDate) <0 ) {
				continue;
			}
			offstartDate = cal.getTime();
			time = format.format(offstartDate);
			times.add(time);
		}
		
		List<String> timeSelect = new ArrayList<String>();
		timeSelect.addAll(times);
		List<String> reservedTimes = appointmentDAO.selectAppointment(staff_id, appointment_date);
		if(reservedTimes.size() > 0) {
			for(String opTime : times) {
				for(String reserved: reservedTimes) {
					if(opTime.equals(reserved)) {
						timeSelect.remove(opTime);
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
	
	public List<TestList> getTestCodesByAppointment(int reception_id) {
		List<TestList> testCodes = testDAO.selectTestsByAppointment(reception_id);
		return testCodes;
	}
	
	public List<Appointment> CountbyAppointment(String appointment_date, String hospital_code) throws ParseException  {

		SimpleDateFormat format = new SimpleDateFormat("HH:mm");

		Hospital timeSetting = hospitalDAO.selectTimeSetting(hospital_code);
		Date offstartDate = format.parse(timeSetting.getOfficehour_start());
		Date offEndDate = format.parse(timeSetting.getOfficehour_end());
		Date lunchstartDate = format.parse(timeSetting.getLunch_start());
		Date lunchEndDate = format.parse(timeSetting.getLunch_end());
		int interval = timeSetting.getOfficehour_interval();

		List<String> times = new ArrayList<String>();

		String time = format.format(offstartDate);
		times.add(time);

		Calendar cal = Calendar.getInstance();
		cal.setTime(offstartDate);
		while(true) {
			cal.add(Calendar.MINUTE, interval);
			if(offEndDate.compareTo(cal.getTime()) == 0) {
				break;
			}else if(cal.getTime().compareTo(lunchstartDate) >= 0 && cal.getTime().compareTo(lunchEndDate) <0 ) {
				continue;
			}
			offstartDate = cal.getTime();
			time = format.format(offstartDate);
			times.add(time);
		}

		List<Appointment> getTimeAndCount = appointmentDAO.selectCountByAppointment(appointment_date);
		List<Appointment> timeAndCountList = new ArrayList<Appointment>();

		if(getTimeAndCount.size() > 0) {
			for(String opTime : times) {
				int index=0;
				for(Appointment timeAndConunt : getTimeAndCount) {
					if(opTime.equals(timeAndConunt.getAppointment_time())) {
						Appointment appointment = new Appointment();
						appointment.setAppointment_time(opTime);
						appointment.setCount(timeAndConunt.getCount());
						timeAndCountList.add(appointment);
						break;
					}else {
						index++;
						if(index == getTimeAndCount.size()) {
							Appointment appointment = new Appointment();
							appointment.setAppointment_time(opTime);
							appointment.setCount(0);
							timeAndCountList.add(appointment);
						}else {
							continue;
						}
					}
				}
			}
		} else {
			for(String opTime : times) {
				Appointment appointment = new Appointment();
				appointment.setAppointment_time(opTime);
				appointment.setCount(0);
				timeAndCountList.add(appointment);
			}
		}

		return timeAndCountList;
	}
	
	public void appointmentTestList(List<TestList> testList, List<TestList> testCodes) {
		int appointment_id = appointmentDAO.selectAppointmentId(testList.get(0));
		for(TestList test : testCodes) {
			testDAO.updateTestList(testList.get(0), appointment_id, test.getTest_code());
		}
	}
	
//	public void changeTestStateToAppointment(TestList testList) {
//		List<String> testStateList = testDAO.selectTestState(testList.getReception_id());
//		logger.info(testStateList.toString());
//		if(testStateList.size() == 0) {
//			receptionDAO.updateReceptionState(testList.getReception_id(), "예약");
//		}
//	}
	
	public void changeTestStateToAppointment(int reception_id) {
		
		List<String> testStateList2 = testDAO.selectTestState2(reception_id);
		if(testStateList2.size() ==0) {
			receptionDAO.updateReceptionState(reception_id, "완료");
		}
		
		List<String> testStateList = testDAO.selectTestState(reception_id);
		logger.info(testStateList.toString());
		if(testStateList.size() == 0) {
			receptionDAO.updateReceptionState(reception_id, "예약");
		}
	}
	
	public void requestTest(List<TestList> testCodes) {
		for(TestList test : testCodes) {
			testDAO.updateTestListReq(test);
		}
	}

	public List<Reception> getTestReceptionListByState(String reception_state) {
		List<Reception> receptionList = receptionDAO.selectTestReceptionListByState(reception_state);
		return receptionList;
	}
}
