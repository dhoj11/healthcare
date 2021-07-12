package com.team4.healthcare.dto;

public class TestList {
	private int test_list_id;
	private String test_code;
	private String test_list_state;
	private String test_list_time;
	private int treatment_id;
	private int test_list_req;
	private int appointment_id;
	private String test_list_date;
	private int test_list_saved;
	
	private String test_name;
	private String patient_name;

	private int patient_id;
	private int reception_id;

	private String staff_id;

	public int getTest_list_id() {
		return test_list_id;
	}

	public void setTest_list_id(int test_list_id) {
		this.test_list_id = test_list_id;
	}

	public String getTest_code() {
		return test_code;
	}

	public void setTest_code(String test_code) {
		this.test_code = test_code;
	}

	public String getTest_list_state() {
		return test_list_state;
	}

	public void setTest_list_state(String test_list_state) {
		this.test_list_state = test_list_state;
	}

	public String getTest_list_time() {
		return test_list_time;
	}

	public void setTest_list_time(String test_list_time) {
		this.test_list_time = test_list_time;
	}

	public int getTreatment_id() {
		return treatment_id;
	}

	public void setTreatment_id(int treatment_id) {
		this.treatment_id = treatment_id;
	}

	public int getTest_list_req() {
		return test_list_req;
	}

	public void setTest_list_req(int test_list_req) {
		this.test_list_req = test_list_req;
	}

	public int getAppointment_id() {
		return appointment_id;
	}

	public void setAppointment_id(int appointment_id) {
		this.appointment_id = appointment_id;
	}

	public String getTest_list_date() {
		return test_list_date;
	}

	public void setTest_list_date(String test_list_date) {
		this.test_list_date = test_list_date;
	}

	public int getTest_list_saved() {
		return test_list_saved;
	}

	public void setTest_list_saved(int test_list_saved) {
		this.test_list_saved = test_list_saved;
	}

	public String getPatient_name() {
		return patient_name;
	}

	public void setPatient_name(String patient_name) {
		this.patient_name = patient_name;
	}

	public String getTest_name() {
		return test_name;
	}

	public void setTest_name(String test_name) {
		this.test_name = test_name;
	}


	public int getPatient_id() {
		return patient_id;
	}

	public void setPatient_id(int patient_id) {
		this.patient_id = patient_id;
	}

	public int getReception_id() {
		return reception_id;
	}

	public void setReception_id(int reception_id) {
		this.reception_id = reception_id;
	}

	public String getStaff_id() {
		return staff_id;
	}

	public void setStaff_id(String staff_id) {
		this.staff_id = staff_id;
	}

	@Override
	public String toString() {
		return "TestList [test_list_id=" + test_list_id + ", test_code=" + test_code + ", test_list_state="
				+ test_list_state + ", test_list_time=" + test_list_time + ", treatment_id=" + treatment_id
				+ ", test_list_req=" + test_list_req + ", appointment_id=" + appointment_id + ", test_list_date="
				+ test_list_date + ", test_list_saved=" + test_list_saved + ", test_name=" + test_name
				+ ", patient_name=" + patient_name + ", patient_id=" + patient_id + ", reception_id=" + reception_id
				+ ", staff_id=" + staff_id + "]";
	}


}
