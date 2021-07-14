package com.team4.healthcare.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team4.healthcare.dao.HospitalDao;
import com.team4.healthcare.dto.Hospital;

@Service
public class HospitalService {
	@Autowired
	private HospitalDao hospitalDao;
	
	public Hospital getTimeSetting(String hospital_code) {
		return hospitalDao.selectTimeSetting(hospital_code);
	}
}
