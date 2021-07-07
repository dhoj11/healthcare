package com.team4.healthcare.dto;

public class Treatment {
	private int treatment_id;
	private int reception_id;
	private String treatment_record;
	private String treatment_comment;
	private String treatment_date;
	private int patient_id;
	private String staff_id;
	private int treatment_saved;
	
	
	public int getTreatment_id() {
		return treatment_id;
	}
	public void setTreatment_id(int treatment_id) {
		this.treatment_id = treatment_id;
	}
	public int getReception_id() {
		return reception_id;
	}
	public void setReception_id(int reception_id) {
		this.reception_id = reception_id;
	}
	public String getTreatment_record() {
		return treatment_record;
	}
	public void setTreatment_record(String treatment_record) {
		this.treatment_record = treatment_record;
	}
	public String getTreatment_comment() {
		return treatment_comment;
	}
	public void setTreatment_comment(String treatment_comment) {
		this.treatment_comment = treatment_comment;
	}
	public String getTreatment_date() {
		return treatment_date;
	}
	public void setTreatment_date(String treatment_date) {
		this.treatment_date = treatment_date;
	}
	public int getPatient_id() {
		return patient_id;
	}
	public void setPatient_id(int patient_id) {
		this.patient_id = patient_id;
	}
	public String getStaff_id() {
		return staff_id;
	}
	public void setStaff_id(String staff_id) {
		this.staff_id = staff_id;
	}
	public int getTreatment_saved() {
		return treatment_saved;
	}
	public void setTreatment_saved(int treatment_saved) {
		this.treatment_saved = treatment_saved;
	}
	
}
