package com.team4.healthcare.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.team4.healthcare.dto.SummeryTest;
import com.team4.healthcare.dto.TestList;

@Mapper
public interface TestDao{
    public int test();
    public List<SummeryTest> selectTestHistory(int patient_id);
    public List<TestList> selectTestsByAppointment(int appointment_id);
}
