package com.team4.healthcare.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team4.healthcare.dao.RoomDao;

@Service
public class ParticipantService {
	@Autowired
	private RoomDao roomDao;
	
	public int getRoomId(List<Integer> staffArr) {
		List<Integer> roomIdList = roomDao.selectRoomId(staffArr);
		for(int i=0;i<roomIdList.size();i++) {
			System.out.println(roomIdList.get(i));
		}
		return 1;
	}
}
