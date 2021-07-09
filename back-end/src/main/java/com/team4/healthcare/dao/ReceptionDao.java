package com.team4.healthcare.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.team4.healthcare.dto.Reception;

public interface ReceptionDao {
	public int insertReceptionAfterAppointment(Reception reception);
	public List<Reception> selectReceptionList(String reception_kind);
	public List<Reception> selectReceptionListByState(String reception_state);
	public int updateReceptionState(@Param("reception_id") int reception_id, @Param("reception_state") String reception_state);
	public int insertReceptionAfterVisit(Reception reception);
}
