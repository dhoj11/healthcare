package com.team4.healthcare.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team4.healthcare.dao.ChatDao;
import com.team4.healthcare.dto.Chat;

@Service
public class ChatService {
	@Autowired
	private ChatDao chatDao;
	
	public void insertChat(Chat chat) {
		chatDao.insertChat(chat);
	}
	
	public List<Chat> getChatListByRoomId(int room_id){
		return chatDao.selectByRoomId(room_id);
	}
	
	public Chat getLastChat(int room_id) {
		return chatDao.selecLastChat(room_id);
	}
}
