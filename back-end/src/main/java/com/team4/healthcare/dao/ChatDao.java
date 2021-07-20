package com.team4.healthcare.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.team4.healthcare.dto.Chat;

@Mapper
public interface ChatDao {
	public void insertChat(Chat chat);
	public List<Chat> selectByRoomId(int room_id);
	public Chat selecLastChat(int room_id);
}
