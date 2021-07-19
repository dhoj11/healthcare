package com.team4.healthcare.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team4.healthcare.dao.TreatmentDao;
import com.team4.healthcare.dto.Diagnose;
import com.team4.healthcare.dto.Disease;
import com.team4.healthcare.dto.Medicine;
import com.team4.healthcare.dto.Patient;
import com.team4.healthcare.dto.Prescription;
import com.team4.healthcare.dto.Test;
import com.team4.healthcare.dto.TestList;
import com.team4.healthcare.dto.TestResult;
import com.team4.healthcare.dto.Treatment;
import com.team4.healthcare.dto.TreatmentSave;

@Service
public class TreatmentService {
   
   @Autowired
   TreatmentDao treatmentDao;
   
   public List<Patient> getPatientList(String staff_id) {
      List<Integer> patientIdList = treatmentDao.selectPatientIds(staff_id);
      List<Patient> patientList = null;
      if(patientIdList.size()>0) patientList = treatmentDao.selectPatients(patientIdList);

      return patientList;
   }
   
   public List<Treatment> getTreatmentList(int patient_id){
      List<Treatment> treatmentList = treatmentDao.selectTreatments(patient_id);
      return treatmentList;
   }
   
   public List<Treatment> getNowTreatment(int patient_id, String staff_id) {
      List<Treatment> nowTreatment = treatmentDao.selectNowTreatment(patient_id, staff_id);
      return nowTreatment;
   }
   
   public String getTreatmentIsComplete(int patient_id, String staff_id) {
      List<Integer> treatmentState = treatmentDao.selectTreatmentIsComplete(patient_id, staff_id);
      
      for(int item : treatmentState) {
         if(item == 0) {
            return "before";
         }   
      }
      return "complete";
      
   }
   
   public String getTreatmentRecord(int treatment_id) {
      String treatmentRecord = treatmentDao.selectTreatmentRecord(treatment_id);
      return treatmentRecord;
   }
   
   public String getTreatmentComment(int treatment_id) {
      String treatmentComment = treatmentDao.selectTreatmentComment(treatment_id);
      return treatmentComment;
   }
   
   public List<Diagnose> getTreatmentDiagnoses(int treatment_id) {
      List<Diagnose> treatmentDiagnoses = treatmentDao.selectTreatmentDiagnoses(treatment_id);
      return treatmentDiagnoses;
   }
   
   public List<Disease> getSearchedDiseases(String disease_name){
      List<Disease> searchedDiseases = treatmentDao.selectDiseases(disease_name);
      return searchedDiseases;
   }
   
   public List<Prescription> getTreatmentPrescriptions(int treatment_id){
      List<Prescription> treatmentPrescriptions = treatmentDao.selectTreatmentPrescriptions(treatment_id);
      return treatmentPrescriptions;
   }
   
   public List<Medicine> getSearchedMedicine(String medicine_name){
      List<Medicine> searchedMedicines = treatmentDao.selectMedicines(medicine_name);
      return searchedMedicines;
   }
   
   public List<TestList> getTreatmentTestList(int treatment_id){
      List<TestList> treatmentTestList = treatmentDao.selectTreatmentTestList(treatment_id);
      return treatmentTestList;
   }
   
   public List<Test> getSearchedTest(String test_name){
      List<Test> searchedTests = treatmentDao.selectTests(test_name);
      return searchedTests;
   }
   
   public String getTreatmentSypton(int treatment_id) {
      int receptionId = treatmentDao.selectReceptionId(treatment_id);
      String treatmentSympton = treatmentDao.selectTreatmentSympton(receptionId);
      return treatmentSympton;
   }
   
   public void saveTreatment(TreatmentSave treatment) {
      
      int treatment_id = treatment.getTreatment_id();
      String treatment_record = treatment.getTreatment_record();
      String treatment_comment = treatment.getTreatment_comment();
      
      List<Diagnose> treatment_diagnoses = treatment.getTreatment_diagnoses();
      List<Prescription> treatment_prescriptions = treatment.getTreatment_prescriptions();
      
      treatmentDao.updateTreatment(treatment_id, treatment_record, treatment_comment);
      if(treatment_diagnoses.size()>0) treatmentDao.insertDiagnose(treatment_id, treatment_diagnoses);
      if(treatment_prescriptions.size()>0) treatmentDao.insertPrescription(treatment_id,treatment_prescriptions);
   }
   
   public void insertTestList(TreatmentSave testList) {
      
      int treatment_id = testList.getTreatment_id();
      List<TestList> treatment_tests = testList.getTreatment_tests(); 
      int test_list_id = Integer.parseInt( new SimpleDateFormat("yyMMdd", Locale.KOREA).format(new Date()) + treatment_id);
            
      if(treatment_tests.size()>0) treatmentDao.insertTestList(treatment_id, test_list_id, treatment_tests);
      
      if(treatment_tests.size()>0) {
         for(TestList test : treatment_tests) {
            String test_code = test.getTest_code();
            List<Integer> test_details_id = treatmentDao.selectTestDetailsId(test_code);
            treatmentDao.insertTestResult(test_list_id, test_code, test_details_id);
         }
         
         //int patient_id = treatmentDao.getPatiendId(treatment_id);
         // String staff_id = treatmentDao.getStaffId(treatment_id);
         
         treatmentDao.insertReception(treatment_id);
         treatmentDao.updateReceptionId(test_list_id);
      }
   }
   
   public void updateAppointmentAndReceptionState(int treatment_id) {
      
      int reception_id = treatmentDao.getReceptionId(treatment_id);
      treatmentDao.updateReceptionState(reception_id);
      Integer appointment_id = treatmentDao.getAppointmentId(reception_id);
      if(appointment_id != null) treatmentDao.updateAppointmentState(appointment_id);
   }
   
   public List<TestResult> getTreatmentTestResult(int treatment_id) {
      List<Integer> test_list_id = treatmentDao.getTestListId(treatment_id);
      if(test_list_id.size()>0) {
         List<TestResult> treatemnt_testResult = treatmentDao.selectTreatmentTestResults(test_list_id);
         return treatemnt_testResult;
      } else return null;
   }
   
   public String getStaffName(int treatment_id) {
      String staff_name = treatmentDao.selectStaffNameByTreatmentId(treatment_id);
      return staff_name;
   }
   
   public String getPatientName(int treatment_id) {
      String patient_name = treatmentDao.selectPatientNameByTreatmentId(treatment_id);
      return patient_name;
   }
   
   
}