package com.team4.healthcare.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team4.healthcare.dao.ParticipantDao;
import com.team4.healthcare.dao.RoomDao;
import com.team4.healthcare.dao.StaffDao;
import com.team4.healthcare.dto.Participant;
import com.team4.healthcare.dto.Staff;

@Service
public class ParticipantService {
	@Autowired
	private ParticipantDao participantDao;
	@Autowired
	private RoomDao roomDao;
	@Autowired
	private StaffDao staffDao;
	/*
	 Title: 방Id 구하기
	 Description: 이미 방이 있다면 select 없다면 create
	*/
	public int getRoomId(List<String> staffIdArr) {
		Integer room_id = participantDao.selectRoomId(staffIdArr,staffIdArr.size());
		if(room_id == null) {	//방이 없으면
			System.out.println("널값");
			roomDao.insertNewRoom();
			room_id = roomDao.selectMaxRoomId();
			System.out.println("새로만들어진"+room_id);
			List<Staff> staffList = new ArrayList<>();
			for(int i=0; i<staffIdArr.size();i++) {
				Staff staff = staffDao.selectById(staffIdArr.get(i));
				staffList.add(staff);
			}
			for(int j=0; j<staffIdArr.size(); j++) {
				String participant_room_name="";
				for(int k=0;k<staffList.size();k++) {
					if(j==k) {
						continue;
					} else {
						participant_room_name=participant_room_name+" "+staffList.get(k).getStaff_name();
					}
				}
			participantDao.insertNewParticipant(staffIdArr.get(j),room_id,participant_room_name);
			}
		} else {
			System.out.println(room_id);
		}
	
		return room_id;
	}
	
	public List<Participant> getParticipantList(int room_id) {
		return participantDao.selectByRoomId(room_id);
	}
	public Participant getParticipantItem(int room_id,String staff_id) {
		return participantDao.selectByRoomIdAndStaffId(room_id, staff_id);
	}
	public List<Participant> getParticipantListByStaffId(String staff_id){
		return participantDao.selectByStaffId(staff_id);
	}
}