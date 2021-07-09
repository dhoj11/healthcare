package com.team4.healthcare.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.team4.healthcare.dto.Patient;
import com.team4.healthcare.dto.SummeryTest;
import com.team4.healthcare.dto.TestList;

import com.team4.healthcare.dto.TestResult;


@Mapper
public interface TestDao{
    public int test();
    public List<SummeryTest> selectTestHistory(int patient_id);
    public List<TestList> selectTestsByAppointment(int appointment_id);

    /* 아래 동호작성 나중에 주석 지웁니다. */
    public List<TestList> selectTestList();
    public Patient selectPatient(int pateint_id);
    public int isValidTestList(int test_list_id);
    public Patient getPatientByTestListId(int test_list_id);
    public List<TestResult> getTestResult(int test_list_id);
    public void updateTestListState(
    								@Param("test_list_id")int test_list_id,
    								@Param("state")String state
    								);
    public void updateTestResult(TestResult testResults);
    public void updateTestResultSave(int test_list_id);

}
