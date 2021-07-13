package com.team4.healthcare.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.team4.healthcare.dto.TestDetail;
import com.team4.healthcare.dto.TestList;

@Mapper
public interface TestListDao {
	public List<String> selectTestCode(int appointment_id);
	public List<TestDetail> selectTestDetail(String test_code);
	public List<TestList> selectByPatientIdReception(int patient_id);
	public List<TestList> selectByPatientIdAppointment(int patient_id);
	public void testListAppointment(TestList testList);
	public void testListWait(int appointment_id);
}
