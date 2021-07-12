package com.team4.healthcare.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team4.healthcare.dao.TestListDao;
import com.team4.healthcare.dto.TestDetail;
import com.team4.healthcare.dto.TestList;

@Service
public class TestListService {
	
	@Autowired
	private TestListDao testListDao;
	
	public List<String> getTestCode(int appointment_id){
		return testListDao.selectTestCode(appointment_id);
	}
	public List<TestDetail> getTestDetail(String test_code){
		return testListDao.selectTestDetail(test_code);
	}
	public List<TestList> getTestListByPatientId(int patient_id){
		//1.예약 취소일때의 검사리스트
		//2. 접수 대기중일때의 검사리스트 가져와서 합친 후 return 
		List<TestList> list1=testListDao.selectByPatientIdAppointment(patient_id);
		List<TestList> list2=testListDao.selectByPatientIdReception(patient_id);
		List<TestList> patientTestList =new ArrayList<>();
		patientTestList.addAll(list1);
		patientTestList.addAll(list2);
		return patientTestList;
	}
	
}
