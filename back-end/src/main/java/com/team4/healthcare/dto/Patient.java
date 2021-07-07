package com.team4.healthcare.dto;

public class Patient {

   private int patient_id;
   private String patient_name;
   private String patient_tel;
   private String patient_birth;
   private String patient_medicine;
   private String patient_disease;
   private String patient_comment;
   private String patient_gender;
   private String patient_recent_visit;
   
   public int getPatient_id() {
      return patient_id;
   }
   public void setPatient_id(int patient_id) {
      this.patient_id = patient_id;
   }
   public String getPatient_name() {
      return patient_name;
   }
   public void setPatient_name(String patient_name) {
      this.patient_name = patient_name;
   }
   public String getPatient_tel() {
      return patient_tel;
   }
   public void setPatient_tel(String patient_tel) {
      this.patient_tel = patient_tel;
   }
   public String getPatient_birth() {
      return patient_birth;
   }
   public void setPatient_birth(String patient_birth) {
      this.patient_birth = patient_birth;
   }
   public String getPatient_medicine() {
      return patient_medicine;
   }
   public void setPatient_medicine(String patient_medicine) {
      this.patient_medicine = patient_medicine;
   }
   public String getPatient_disease() {
      return patient_disease;
   }
   public void setPatient_disease(String patient_disease) {
      this.patient_disease = patient_disease;
   }
   public String getPatient_comment() {
      return patient_comment;
   }
   public void setPatient_comment(String patient_comment) {
      this.patient_comment = patient_comment;
   }
   public String getPatient_gender() {
      return patient_gender;
   }
   public void setPatient_gender(String patient_gender) {
      this.patient_gender = patient_gender;
   }
   public String getPatient_recent_visit() {
      return patient_recent_visit;
   }
   public void setPatient_recent_visit(String patient_recent_visit) {
      this.patient_recent_visit = patient_recent_visit;
   }
	@Override
	public String toString() {
		return "Patient [patient_id=" + patient_id + ", patient_name=" + patient_name + ", patient_tel=" + patient_tel
				+ ", patient_birth=" + patient_birth + ", patient_medicine=" + patient_medicine + ", patient_disease="
				+ patient_disease + ", patient_comment=" + patient_comment + ", patient_gender=" + patient_gender
				+ ", patient_recent_visit=" + patient_recent_visit + "]";
	}
   
   
}