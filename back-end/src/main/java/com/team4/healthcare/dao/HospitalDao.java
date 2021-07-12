package com.team4.healthcare.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.team4.healthcare.dto.Hospital;

@Mapper
public interface HospitalDao {
	public Hospital selectTimeSetting(String hospital_code);
}
