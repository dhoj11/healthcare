package com.team4.healthcare.dto;

import java.util.List;

public class TreatmentSave {
	private int treatment_id;
	private String treatment_record;
	private String treatment_comment;
	private List<Diagnose> treatment_diagnoses;
	private List<Prescription> treatment_prescriptions;
	private List<TestList> treatment_tests;
	
	public int getTreatment_id() {
		return treatment_id;
	}
	public void setTreatment_id(int treatment_id) {
		this.treatment_id = treatment_id;
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
	public List<Diagnose> getTreatment_diagnoses() {
		return treatment_diagnoses;
	}
	public void setTreatment_diagnoses(List<Diagnose> treatment_diagnoses) {
		this.treatment_diagnoses = treatment_diagnoses;
	}
	public List<Prescription> getTreatment_prescriptions() {
		return treatment_prescriptions;
	}
	public void setTreatment_prescriptions(List<Prescription> treatment_prescriptions) {
		this.treatment_prescriptions = treatment_prescriptions;
	}
	public List<TestList> getTreatment_tests() {
		return treatment_tests;
	}
	public void setTreatment_tests(List<TestList> treatment_tests) {
		this.treatment_tests = treatment_tests;
	}
}
