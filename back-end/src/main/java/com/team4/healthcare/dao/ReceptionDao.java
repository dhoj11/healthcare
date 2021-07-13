package com.team4.healthcare.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.team4.healthcare.dto.Reception;
import com.team4.healthcare.dto.TestList;

public interface ReceptionDao {
	public int insertReceptionAfterAppointment(Reception reception);
	public List<Reception> selectReceptionList(String reception_kind);
	public List<Reception> selectReceptionListByState(String reception_state);
	public int updateReceptionState(@Param("reception_id") int reception_id, @Param("reception_state") String reception_state);
	public int insertReceptionAfterVisit(Reception reception);
	public int selectReceptionId(Reception reception);
	public String selectReceptionStaffId(@Param("test_list_id") int test_list_id, @Param("test_code") String test_code);
	public List<Reception> selectTestReceptionListByState(String reception_state);
}
