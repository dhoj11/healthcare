package com.team4.healthcare.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.team4.healthcare.dto.Appointment;
import com.team4.healthcare.dto.TestList;

@Mapper
public interface AppointmentDao {
	public List<Appointment> selectAppointmentList();
	public int updateAppointmentState(@Param("appointment_id") int appointment_id, @Param("appointment_state") String appointment_state);
	public Appointment selectAppointmentById(int appointment_id);
	public List<Appointment> selectAppointmentListByState(String appointment_state);
	public List<Appointment> selectAppointmentHistory(int patient_id);
	public List<String> selectAppointment(@Param("staff_id") String staff_id, @Param("appointment_date") String appointment_date);
	public int insertNewTreatmentAppointment(Appointment appointment);
	public List<Appointment> selectDoctorTreatmentAppointment(@Param("staff_id") String staff_id, @Param("appointment_date") String appointment_date);
	public List<Appointment> selectByDate(String appointment_date);
	public List<Appointment> selectByPatientId(int patient_id);
	public void insertTreatmentAppointment(Appointment appointment);
	public void cancelTreatmentAppointment(int appointment_id);
	public int insertNewAppointment(Appointment appointment);
	public Appointment selectTestAppointmentById(int appointment_id);
	public List<Appointment> selectCountByAppointment(String appointment_date);
	public int selectAppointmentId(TestList testList);
	public List<Appointment> selectTestAppointmentByDate(@Param("appointment_date") String appointment_date,@Param("appointment_time") String appointment_time);
	public void insertTestAppointment(Appointment appointment);
	public int selectMaxAppointmentId();
}
