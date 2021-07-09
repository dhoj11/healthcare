package com.team4.healthcare.dto;

import java.sql.Time;
import java.util.Date;

public class Reception {
	
	private int reception_id;
	private String reception_date;
	private String reception_time;
	private int patient_id;
	private String reception_content;
	private String staff_id;
	private int appointment_id;
	private String reception_state;
	private String patient_name;
	private String staff_name;
	private String reception_kind;
	public int getReception_id() {
		return reception_id;
	}
	public void setReception_id(int reception_id) {
		this.reception_id = reception_id;
	}
	public String getReception_date() {
		return reception_date;
	}
	public void setReception_date(String reception_date) {
		this.reception_date = reception_date;
	}
	public String getReception_time() {
		return reception_time;
	}
	public void setReception_time(String reception_time) {
		this.reception_time = reception_time;
	}
	public int getPatient_id() {
		return patient_id;
	}
	public void setPatient_id(int patient_id) {
		this.patient_id = patient_id;
	}
	public String getReception_content() {
		return reception_content;
	}
	public void setReception_content(String reception_content) {
		this.reception_content = reception_content;
	}
	public String getStaff_id() {
		return staff_id;
	}
	public void setStaff_id(String staff_id) {
		this.staff_id = staff_id;
	}
	public int getAppointment_id() {
		return appointment_id;
	}
	public void setAppointment_id(int appointment_id) {
		this.appointment_id = appointment_id;
	}
	public String getReception_state() {
		return reception_state;
	}
	public void setReception_state(String reception_state) {
		this.reception_state = reception_state;
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
	public String getReception_kind() {
		return reception_kind;
	}
	public void setReception_kind(String reception_kind) {
		this.reception_kind = reception_kind;
	}

	@Override
	public String toString() {
		return "Reception [reception_id=" + reception_id + ", reception_date=" + reception_date + ", reception_time="
				+ reception_time + ", patient_id=" + patient_id + ", reception_content=" + reception_content
				+ ", staff_id=" + staff_id + ", appointment_id=" + appointment_id + ", reception_state="
				+ reception_state + ", patient_name=" + patient_name + ", staff_name=" + staff_name
				+ ", reception_kind=" + reception_kind + "]";
	}
	
	public void setReceptionInfo(Appointment appointment) {
		this.appointment_id = appointment.getAppointment_id();
		this.patient_id = appointment.getPatient_id();
		this.reception_content = appointment.getAppointment_content();
		this.staff_id = appointment.getStaff_id();
		this.staff_name = appointment.getStaff_name();
		this.reception_kind = appointment.getAppointment_kind();
	}
}
