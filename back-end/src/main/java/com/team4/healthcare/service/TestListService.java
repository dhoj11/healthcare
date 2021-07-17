package com.team4.healthcare.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team4.healthcare.dao.ReceptionDao;
import com.team4.healthcare.dao.TestListDao;
import com.team4.healthcare.dto.TestDetail;
import com.team4.healthcare.dto.TestList;

@Service
public class TestListService {
	
	@Autowired
	private TestListDao testListDao;
	@Autowired
	private ReceptionDao receptionDao;
	
	public List<String> getTestCode(int appointment_id){
		return testListDao.selectTestCode(appointment_id);
	}
	public List<TestDetail> getTestDetail(String test_code){
		return testListDao.selectTestDetail(test_code);
	}
	public List<TestList> getTestListByPatientId(int patient_id){
		List<TestList> patientTestList=testListDao.selectByPatientIdReception(patient_id);
		System.out.println("들어옴");
		return patientTestList;
	}
	
	public void testListAppointment(TestList testList) {
		testListDao.testListAppointment(testList);
	}
	
	public void testListWait(int appointment_id) {
		//--검사리스트 상태 대기로 바꾸기
		testListDao.testListWait(appointment_id);
		
		//--접수 상태 바꾸기
		//접수번호 구해옴
		List<Integer> receptionIdList=testListDao.selectReceptionIdByAppointmentId(appointment_id);
		//접수번호 중복제거
		List<Integer> newReceptionIdList = new ArrayList<>();
		for(int item: receptionIdList) {
			if(!newReceptionIdList.contains(item)) {
				newReceptionIdList.add(item);
			}
		}
		//접수 상태 바꾸기
		for(int reception_id : newReceptionIdList) {
			List<String> states = testListDao.selectState(reception_id);
			if(states.contains("진행")||states.contains("요청")) {
				return ;
			} else {
				receptionDao.updateReceptionState(reception_id, "대기");
			}
		}
	}
	public int getTreatmentId(int test_list_id,String test_code) {
		return testListDao.selectTreatmentId(test_list_id, test_code);
	}
	
	//검사 예약할때 testList state에 따라 reception state 바꿔주기
	public void updateReceptionState(int reception_id) {
		List<String> states = testListDao.selectState(reception_id);
		
		if(states.contains("대기")||states.contains("진행")||states.contains("요청")) {
			return ;
		} else {
			if(states.contains("완료")) {
				receptionDao.updateReceptionState(reception_id, "완료");
			}
			else {
				receptionDao.updateReceptionState(reception_id, "예약");
			}
		}
		
	}
	//검사 취소할때 testListstate에 따라 receptioin state 바꿔주기
	public void updateReceptionStateCancel(int reception_id) {
		
	}
}
