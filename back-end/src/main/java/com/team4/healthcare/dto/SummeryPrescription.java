package com.team4.healthcare.dto;

public class SummeryPrescription {
	private int treatment_id;
	private String treatment_date;
	private String staff_name;
	private String prescription_comment;
	private String medicine_kind;
	private String medicine_name;
	
	
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
	public String getStaff_name() {
		return staff_name;
	}
	public void setStaff_name(String staff_name) {
		this.staff_name = staff_name;
	}
	public String getPrescription_comment() {
		return prescription_comment;
	}
	public void setPrescription_comment(String prescription_comment) {
		this.prescription_comment = prescription_comment;
	}
	public String getMedicine_kind() {
		return medicine_kind;
	}
	public void setMedicine_kind(String medicine_kind) {
		this.medicine_kind = medicine_kind;
	}
	public String getMedicine_name() {
		return medicine_name;
	}
	public void setMedicine_name(String medicine_name) {
		this.medicine_name = medicine_name;
	}
	@Override
	public String toString() {
		return "SummeryPrescription [treatment_id=" + treatment_id + ", treatment_date=" + treatment_date
				+ ", staff_name=" + staff_name + ", prescription_comment=" + prescription_comment + ", medicine_kind="
				+ medicine_kind + ", medicine_name=" + medicine_name + "]";
	}

}
