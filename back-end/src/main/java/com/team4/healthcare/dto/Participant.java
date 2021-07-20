package com.team4.healthcare.dto;

public class Participant {
	private int participant_id;
	private String staff_id;
	private int room_id;
	private String participant_room_name;
	private int participant_not_read_chat_num;
	private String participant_create_date;
	private String participant_update_date;
	private String participant_update_time;
	public int getParticipant_id() {
		return participant_id;
	}
	public void setParticipant_id(int participant_id) {
		this.participant_id = participant_id;
	}
	public String getStaff_id() {
		return staff_id;
	}
	public void setStaff_id(String staff_id) {
		this.staff_id = staff_id;
	}
	public int getRoom_id() {
		return room_id;
	}
	public void setRoom_id(int room_id) {
		this.room_id = room_id;
	}
	public String getParticipant_room_name() {
		return participant_room_name;
	}
	public void setParticipant_room_name(String participant_room_name) {
		this.participant_room_name = participant_room_name;
	}
	public int getParticipant_not_read_chat_num() {
		return participant_not_read_chat_num;
	}
	public void setParticipant_not_read_chat_num(int participant_not_read_chat_num) {
		this.participant_not_read_chat_num = participant_not_read_chat_num;
	}
	public String getParticipant_create_date() {
		return participant_create_date;
	}
	public void setParticipant_create_date(String participant_create_date) {
		this.participant_create_date = participant_create_date;
	}
	public String getParticipant_update_date() {
		return participant_update_date;
	}
	public void setParticipant_update_date(String participant_update_date) {
		this.participant_update_date = participant_update_date;
	}
	public String getParticipant_update_time() {
		return participant_update_time;
	}
	public void setParticipant_update_time(String participant_update_time) {
		this.participant_update_time = participant_update_time;
	}
	
	
	
}
