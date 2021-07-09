package com.team4.healthcare.dto;

import java.sql.Time;
import java.util.Date;

public class Appointment {
	
	private int appointment_id;
	private String appointment_date;
	private String appointment_time;
	private String staff_id;
	private String appointment_state;
	private int patient_id;
	private String appointment_content;
	private String appointment_kind;
	private String patient_name;
	private String staff_name;
	private String patient_gender;
	
	public String getPatient_gender() {
		return patient_gender;
	}
	public void setPatient_gender(String patient_gender) {
		this.patient_gender = patient_gender;
	}
	public int getAppointment_id() {
		return appointment_id;
	}
	public void setAppointment_id(int appointment_id) {
		this.appointment_id = appointment_id;
	}
	public String getAppointment_date() {
		return appointment_date;
	}
	public void setAppointment_date(String appointment_date) {
		this.appointment_date = appointment_date;
	}
	public String getAppointment_time() {
		return appointment_time;
	}
	public void setAppointment_time(String appointment_time) {
		this.appointment_time = appointment_time;
	}
	public String getStaff_id() {
		return staff_id;
	}
	public void setStaff_id(String staff_id) {
		this.staff_id = staff_id;
	}
	public String getAppointment_state() {
		return appointment_state;
	}
	public void setAppointment_state(String appointment_state) {
		this.appointment_state = appointment_state;
	}
	public int getPatient_id() {
		return patient_id;
	}
	public void setPatient_id(int patient_id) {
		this.patient_id = patient_id;
	}
	public String getAppointment_content() {
		return appointment_content;
	}
	public void setAppointment_content(String appointment_content) {
		this.appointment_content = appointment_content;
	}
	public String getAppointment_kind() {
		return appointment_kind;
	}
	public void setAppointment_kind(String appointment_kind) {
		this.appointment_kind = appointment_kind;
	}
	public String getPatient_name() {
		return patient_name;
	}
	public void setPatient_name(String patient_name) {
		this.patient_name = patient_name;
	}
	public String getStaff_name() {
		return staff_name;
	}
	public void setStaff_name(String staff_name) {
		this.staff_name = staff_name;
	}
	@Override
	public String toString() {
		return "AppointmentDTO [appointment_id=" + appointment_id + ", appointment_date=" + appointment_date
				+ ", appointment_time=" + appointment_time + ", staff_id=" + staff_id + ", appointment_state="
				+ appointment_state + ", patient_id=" + patient_id + ", appointment_content=" + appointment_content
				+ ", appointment_kind=" + appointment_kind + ", patient_name=" + patient_name + ", staff_name="
				+ staff_name + "]";
	}
}
