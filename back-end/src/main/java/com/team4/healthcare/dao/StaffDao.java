  
package com.team4.healthcare.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.team4.healthcare.dto.Staff;

@Mapper
public interface StaffDao {
	public List<Staff> selectByAll();
	public Staff selectById(String staff_id);
	public List<Staff> selectDoctorNameList();
	public String selectHospitalname(String staff_id);
}