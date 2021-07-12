package com.team4.healthcare.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.team4.healthcare.dto.Hospital;
import com.team4.healthcare.dto.Staff;

@Mapper
public interface AccountDao {
	public void insertStaff(Staff staff);
	public List<Staff> selectAll();
	public Staff selectOne(String staff_id);
	public void updateStaff(Staff staff);
	public void deleteStaff(String staff_id);
	public Hospital getHospital(String hospital_code);
	public void updateHospital(Hospital hospital);
}
