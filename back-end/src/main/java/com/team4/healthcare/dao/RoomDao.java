package com.team4.healthcare.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface RoomDao {
	public List<Integer> selectRoomId(@Param("staffArr") List<Integer> staffArr);
}
