package com.team4.healthcare.dto;

public class SummeryTreatment {
	private int treatment_id;
	private String treatment_date;
	private String staff_id;
	private String staff_name;
	private String disease_code;
	private String disease_name;
	
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
	public String getDisease_code() {
		return disease_code;
	}
	public void setDisease_code(String disease_code) {
		this.disease_code = disease_code;
	}
	public String getDisease_name() {
		return disease_name;
	}
	public void setDisease_name(String disease_name) {
		this.disease_name = disease_name;
	}
	@Override
	public String toString() {
		return "SummeryTreatment [treatment_id=" + treatment_id + ", treatment_date=" + treatment_date + ", staff_id="
				+ staff_id + ", staff_name=" + staff_name + ", disease_code=" + disease_code + ", disease_name="
				+ disease_name + "]";
	}
}
