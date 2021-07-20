package com.team4.healthcare.dto;

public class Room {
	private int room_id;
	private String romm_type;
	private String last_chat;
	private String room_date;
	
	public int getRoom_id() {
		return room_id;
	}
	public void setRoom_id(int room_id) {
		this.room_id = room_id;
	}
	public String getRomm_type() {
		return romm_type;
	}
	public void setRomm_type(String romm_type) {
		this.romm_type = romm_type;
	}
	public String getLast_chat() {
		return last_chat;
	}
	public void setLast_chat(String last_chat) {
		this.last_chat = last_chat;
	}
	public String getRoom_date() {
		return room_date;
	}
	public void setRoom_date(String room_date) {
		this.room_date = room_date;
	}

}
