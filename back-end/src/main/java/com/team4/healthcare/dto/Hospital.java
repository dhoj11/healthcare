package com.team4.healthcare.dto;

public class Hospital {
	public String hospital_code;
	public String hospital_name;
	public String officehour_start;
	public String officehour_end;
	public int officehour_interval;
	public String lunch_start;
	public String lunch_end;
	public String getHospital_code() {
		return hospital_code;
	}
	public void setHospital_code(String hospital_code) {
		this.hospital_code = hospital_code;
	}
	public String getHospital_name() {
		return hospital_name;
	}
	public void setHospital_name(String hospital_name) {
		this.hospital_name = hospital_name;
	}
	public String getOfficehour_start() {
		return officehour_start;
	}
	public void setOfficehour_start(String officehour_start) {
		this.officehour_start = officehour_start;
	}
	public String getOfficehour_end() {
		return officehour_end;
	}
	public void setOfficehour_end(String officehour_end) {
		this.officehour_end = officehour_end;
	}
	public int getOfficehour_interval() {
		return officehour_interval;
	}
	public void setOfficehour_interval(int officehour_interval) {
		this.officehour_interval = officehour_interval;
	}
	public String getLunch_start() {
		return lunch_start;
	}
	public void setLunch_start(String lunch_start) {
		this.lunch_start = lunch_start;
	}
	public String getLunch_end() {
		return lunch_end;
	}
	public void setLunch_end(String lunch_end) {
		this.lunch_end = lunch_end;
	}
}
