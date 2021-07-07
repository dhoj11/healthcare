package com.team4.healthcare.dto;

public class Diagnose {
	private int diagnose_id;
	private int treatment_id;
	private String disease_code;
	private String disease_name;
	
	public int getDiagnose_id() {
		return diagnose_id;
	}
	public void setDiagnose_id(int diagnose_id) {
		this.diagnose_id = diagnose_id;
	}
	public int getTreatment_id() {
		return treatment_id;
	}
	public void setTreatment_id(int treatment_id) {
		this.treatment_id = treatment_id;
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
}
