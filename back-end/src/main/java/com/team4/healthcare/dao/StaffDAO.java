package com.team4.healthcare.dao;

import java.util.List;

import com.team4.healthcare.dto.Staff;

public interface StaffDAO {
	public List<Staff> selectDoctorNameList();
}
