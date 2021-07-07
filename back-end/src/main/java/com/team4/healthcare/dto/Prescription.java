package com.team4.healthcare.dto;

public class Prescription {
	private int prescription_id;
	private String medicine_code;
	private int treatment_id;
	private String prescription_comment;
	private String prescription_amount;
	
	private String medicine_name;
	private String medicine_type;
	private String medicine_kind;
	
	public int getPrescription_id() {
		return prescription_id;
	}
	public void setPrescription_id(int prescription_id) {
		this.prescription_id = prescription_id;
	}
	public String getMedicine_code() {
		return medicine_code;
	}
	public void setMedicine_code(String medicine_code) {
		this.medicine_code = medicine_code;
	}
	public int getTreatment_id() {
		return treatment_id;
	}
	public void setTreatment_id(int treatment_id) {
		this.treatment_id = treatment_id;
	}
	public String getPrescription_comment() {
		return prescription_comment;
	}
	public void setPrescription_comment(String prescription_comment) {
		this.prescription_comment = prescription_comment;
	}
	public String getPrescription_amount() {
		return prescription_amount;
	}
	public void setPrescription_amount(String prescription_amount) {
		this.prescription_amount = prescription_amount;
	}
	public String getMedicine_name() {
		return medicine_name;
	}
	public void setMedicine_name(String medicine_name) {
		this.medicine_name = medicine_name;
	}
	public String getMedicine_type() {
		return medicine_type;
	}
	public void setMedicine_type(String medicine_type) {
		this.medicine_type = medicine_type;
	}
	public String getMedicine_kind() {
		return medicine_kind;
	}
	public void setMedicine_kind(String medicine_kind) {
		this.medicine_kind = medicine_kind;
	}
}
