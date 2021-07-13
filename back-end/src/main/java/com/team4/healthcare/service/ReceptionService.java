package com.team4.healthcare.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team4.healthcare.dao.ReceptionDao;
import com.team4.healthcare.dto.TestList;

@Service
public class ReceptionService {
	@Autowired
	private ReceptionDao receptionDao;
	
	public String getReceptionStaffId(int test_list_id, String test_code) {
		return receptionDao.selectReceptionStaffId(test_list_id,test_code);
	}
}
