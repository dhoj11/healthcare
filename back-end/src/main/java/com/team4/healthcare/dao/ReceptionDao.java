package com.team4.healthcare.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.team4.healthcare.dto.Reception;
import com.team4.healthcare.dto.Treatment;

public interface ReceptionDao {
	public int insertReceptionAfterAppointment(Reception reception);
	public List<Reception> selectReceptionList(String reception_kind);
	public List<Reception> selectReceptionListByState(String reception_state);
	public int updateReceptionState(@Param("reception_id") int reception_id, @Param("reception_state") String reception_state);
	public int insertReceptionAfterVisit(Reception reception);
	public int selectReceptionId(@Param("reception") Reception reception, @Param("appointment_id") int appointment_id);
	public List<Reception> selectTestReceptionListByState(String reception_state);
	public Treatment getCurrentReception(int reception_id);
	public void addTreatment(Treatment treatment);
}
