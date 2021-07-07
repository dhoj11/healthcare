package com.team4.healthcare.dto;

public class SummeryTest {
	private int treatment_id;
	private String treatment_date;
	private String staff_id;
	private String staff_name;
	private String test_code;
	private String test_name;
	public int getTreatment_id() {
		return treatment_id;
	}
	public void setTreatment_id(int treatment_id) {
		this.treatment_id = treatment_id;
	}
	public String getTreatment_date() {
		return treatment_date;
	}
	public void setTreatment_date(String treatment_date) {
		this.treatment_date = treatment_date;
	}
	public String getStaff_id() {
		return staff_id;
	}
	public void setStaff_id(String staff_id) {
		this.staff_id = staff_id;
	}
	public String getStaff_name() {
		return staff_name;
	}
	public void setStaff_name(String staff_name) {
		this.staff_name = staff_name;
	}
	public String getTest_code() {
		return test_code;
	}
	public void setTest_code(String test_code) {
		this.test_code = test_code;
	}
	public String getTest_name() {
		return test_name;
	}
	public void setTest_name(String test_name) {
		this.test_name = test_name;
	}
	@Override
	public String toString() {
		return "SummeryTest [treatment_id=" + treatment_id + ", treatment_date=" + treatment_date + ", staff_id="
				+ staff_id + ", staff_name=" + staff_name + ", test_code=" + test_code + ", test_name=" + test_name
				+ "]";
	}
}
