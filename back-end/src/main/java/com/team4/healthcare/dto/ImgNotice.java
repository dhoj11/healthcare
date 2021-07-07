package com.team4.healthcare.dto;

import org.springframework.web.multipart.MultipartFile;

public class ImgNotice {
	private int img_notice_id;
	private String img_notice_title;
	private String img_notice_content;
	private String img_notice_date;
	private int img_notice_hitcount;
	private MultipartFile img_notice_attach;
	private String img_notice_pic_oname;
	private String img_notice_pic_sname;
	private String img_notice_pic_type;
	private String staff_id;
	private String staff_name;
	
	public String getStaff_name() {
		return staff_name;
	}
	public void setStaff_name(String staff_name) {
		this.staff_name = staff_name;
	}
	public MultipartFile getImg_notice_attach() {
		return img_notice_attach;
	}
	public void setImg_notice_attach(MultipartFile img_notice_attach) {
		this.img_notice_attach = img_notice_attach;
	}
	public int getImg_notice_id() {
		return img_notice_id;
	}
	public void setImg_notice_id(int img_notice_id) {
		this.img_notice_id = img_notice_id;
	}
	public String getImg_notice_title() {
		return img_notice_title;
	}
	public void setImg_notice_title(String img_notice_title) {
		this.img_notice_title = img_notice_title;
	}
	public String getImg_notice_content() {
		return img_notice_content;
	}
	public void setImg_notice_content(String img_notice_content) {
		this.img_notice_content = img_notice_content;
	}
	public String getImg_notice_date() {
		return img_notice_date;
	}
	public void setImg_notice_date(String img_notice_date) {
		this.img_notice_date = img_notice_date;
	}
	public int getImg_notice_hitcount() {
		return img_notice_hitcount;
	}
	public void setImg_notice_hitcount(int img_notice_hitcount) {
		this.img_notice_hitcount = img_notice_hitcount;
	}
	public String getImg_notice_pic_oname() {
		return img_notice_pic_oname;
	}
	public void setImg_notice_pic_oname(String img_notice_pic_oname) {
		this.img_notice_pic_oname = img_notice_pic_oname;
	}
	public String getImg_notice_pic_sname() {
		return img_notice_pic_sname;
	}
	public void setImg_notice_pic_sname(String img_notice_pic_sname) {
		this.img_notice_pic_sname = img_notice_pic_sname;
	}
	public String getImg_notice_pic_type() {
		return img_notice_pic_type;
	}
	public void setImg_notice_pic_type(String img_notice_pic_type) {
		this.img_notice_pic_type = img_notice_pic_type;
	}
	public String getStaff_id() {
		return staff_id;
	}
	public void setStaff_id(String staff_id) {
		this.staff_id = staff_id;
	}
}
