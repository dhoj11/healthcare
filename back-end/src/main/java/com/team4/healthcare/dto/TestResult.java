package com.team4.healthcare.dto;

public class TestResult {
	private int test_list_id;
	private String test_code;
	private int test_details_id;
	private String test_result_value;
	
	private String test_name;
	private String test_details_code;
	private String test_details_name;
	private String test_details_unit;
	private String test_details_min;
	private String test_details_max;
	
	private int reception_id;
	
	public int getTest_list_id() {
		return test_list_id;
	}
	public void setTest_list_id(int test_list_id) {
		this.test_list_id = test_list_id;
	}
	
	public String getTest_code() {
		return test_code;
	}
	public void setTest_code(String test_code) {
		this.test_code = test_code;
	}
	public int getTest_details_id() {
		return test_details_id;
	}
	public void setTest_details_id(int test_details_id) {
		this.test_details_id = test_details_id;
	}
	public String getTest_result_value() {
		return test_result_value;
	}
	public void setTest_result_value(String test_result_value) {
		this.test_result_value = test_result_value;
	}
	public String getTest_name() {
		return test_name;
	}
	public void setTest_name(String test_name) {
		this.test_name = test_name;
	}
	public String getTest_details_code() {
		return test_details_code;
	}
	public void setTest_details_code(String test_details_code) {
		this.test_details_code = test_details_code;
	}
	public String getTest_details_name() {
		return test_details_name;
	}
	public void setTest_details_name(String test_details_name) {
		this.test_details_name = test_details_name;
	}
	public String getTest_details_unit() {
		return test_details_unit;
	}
	public void setTest_details_unit(String test_details_unit) {
		this.test_details_unit = test_details_unit;
	}
	public String getTest_details_min() {
		return test_details_min;
	}
	public void setTest_details_min(String test_details_min) {
		this.test_details_min = test_details_min;
	}
	public String getTest_details_max() {
		return test_details_max;
	}
	public void setTest_details_max(String test_details_max) {
		this.test_details_max = test_details_max;
	}
	public int getReception_id() {
		return reception_id;
	}
	public void setReception_id(int reception_id) {
		this.reception_id = reception_id;
	}
	
	
}
