package com.team4.healthcare.dto;

public class FreeBoard {
	private int freeboard_id;
	private String freeboard_title;
	private String freeboard_content;
	private String freeboard_date;
	private String freeboard_time;
	private String staff_name;
	private int freeboard_comment_count;
	
	
	public int getFreeboard_id() {
		return freeboard_id;
	}
	public void setFreeboard_id(int freeboard_id) {
		this.freeboard_id = freeboard_id;
	}
	public String getFreeboard_title() {
		return freeboard_title;
	}
	public void setFreeboard_title(String freeboard_title) {
		this.freeboard_title = freeboard_title;
	}
	public String getFreeboard_content() {
		return freeboard_content;
	}
	public void setFreeboard_content(String freeboard_content) {
		this.freeboard_content = freeboard_content;
	}
	public String getFreeboard_date() {
		return freeboard_date;
	}
	public void setFreeboard_date(String freeboard_date) {
		this.freeboard_date = freeboard_date;
	}
	public String getFreeboard_time() {
		return freeboard_time;
	}
	public void setFreeboard_time(String freeboard_time) {
		this.freeboard_time = freeboard_time;
	}
	public String getStaff_name() {
		return staff_name;
	}
	public void setStaff_name(String staff_name) {
		this.staff_name = staff_name;
	}
	public int getFreeboard_comment_count() {
		return freeboard_comment_count;
	}
	public void setFreeboard_comment_count(int freeboard_comment_count) {
		this.freeboard_comment_count = freeboard_comment_count;
	}

}
