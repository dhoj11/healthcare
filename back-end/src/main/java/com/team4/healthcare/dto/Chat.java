package com.team4.healthcare.dto;

public class Chat {
	private int chat_id;
	private int room_id;
	private String staff_id;
	private String chat_content;
	private int chat_not_read_num;
	private String chat_date;
	private String chat_time;
	public int getChat_id() {
		return chat_id;
	}
	public void setChat_id(int chat_id) {
		this.chat_id = chat_id;
	}
	public int getRoom_id() {
		return room_id;
	}
	public void setRoom_id(int room_id) {
		this.room_id = room_id;
	}
	public String getStaff_id() {
		return staff_id;
	}
	public void setStaff_id(String staff_id) {
		this.staff_id = staff_id;
	}
	public String getChat_content() {
		return chat_content;
	}
	public void setChat_content(String chat_content) {
		this.chat_content = chat_content;
	}
	public int getChat_not_read_num() {
		return chat_not_read_num;
	}
	public void setChat_not_read_num(int chat_not_read_num) {
		this.chat_not_read_num = chat_not_read_num;
	}
	public String getChat_date() {
		return chat_date;
	}
	public void setChat_date(String chat_date) {
		this.chat_date = chat_date;
	}
	public String getChat_time() {
		return chat_time;
	}
	public void setChat_time(String chat_time) {
		this.chat_time = chat_time;
	}
	

}
