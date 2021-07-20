package com.team4.healthcare.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.team4.healthcare.dto.Participant;

@Mapper
public interface ParticipantDao {
	public Integer selectRoomId(@Param("staffArr") List<String> staffArr,@Param("staffArrNum") int staffArrNum);
	public void insertNewParticipant(@Param("staff_id") String staff_id, @Param("room_id") int room_id, @Param("participant_room_name") String participant_room_name);
	public List<Participant> selectByRoomId(int room_id);
	public Participant selectByRoomIdAndStaffId(@Param("room_id") int room_id, @Param("staff_id") String staff_id);
	public List<Participant> selectByStaffId(String staff_id);
}
