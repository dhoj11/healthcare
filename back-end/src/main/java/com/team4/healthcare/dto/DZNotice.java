package com.team4.healthcare.dto;

public class DZNotice {
	
	private int dz_notice_id;
	private String dz_notice_title;
	private String dz_notice_content;
	private String dz_notice_writer;
	private String dz_notice_date;
	public int getDz_notice_id() {
		return dz_notice_id;
	}
	public void setDz_notice_id(int dz_notice_id) {
		this.dz_notice_id = dz_notice_id;
	}
	public String getDz_notice_title() {
		return dz_notice_title;
	}
	public void setDz_notice_title(String dz_notice_title) {
		this.dz_notice_title = dz_notice_title;
	}
	public String getDz_notice_content() {
		return dz_notice_content;
	}
	public void setDz_notice_content(String dz_notice_content) {
		this.dz_notice_content = dz_notice_content;
	}
	public String getDz_notice_writer() {
		return dz_notice_writer;
	}
	public void setDz_notice_writer(String dz_notice_writer) {
		this.dz_notice_writer = dz_notice_writer;
	}
	public String getDz_notice_date() {
		return dz_notice_date;
	}
	public void setDz_notice_date(String dz_notice_date) {
		this.dz_notice_date = dz_notice_date;
	}
	@Override
	public String toString() {
		return "DZNotice [dz_notice_id=" + dz_notice_id + ", dz_notice_title=" + dz_notice_title
				+ ", dz_notice_content=" + dz_notice_content + ", dz_notice_writer=" + dz_notice_writer
				+ ", dz_notice_date=" + dz_notice_date + "]";
	}
}
