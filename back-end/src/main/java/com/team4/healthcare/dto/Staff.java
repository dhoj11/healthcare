package com.team4.healthcare.dto;

import java.util.Date;

import org.springframework.web.multipart.MultipartFile;

public class Staff {

   private String staff_id;
   private String staff_password;
   private String staff_authority;
   private String hospital_code;
   private String staff_name;
   private String staff_tel;
   private int staff_enabled;
   private String staff_join;
   private MultipartFile staff_pic;
   private String staff_pic_oname;
   private String staff_pic_sname;
   private String staff_pic_type;
   public String getStaff_id() {
      return staff_id;
   }
   public void setStaff_id(String staff_id) {
      this.staff_id = staff_id;
   }
   public String getStaff_password() {
      return staff_password;
   }
   public void setStaff_password(String staff_password) {
      this.staff_password = staff_password;
   }
   public String getStaff_authority() {
      return staff_authority;
   }
   public void setStaff_authority(String staff_authority) {
      this.staff_authority = staff_authority;
   }
   public String getHospital_code() {
      return hospital_code;
   }
   public void setHospital_code(String hospital_code) {
      this.hospital_code = hospital_code;
   }
   public String getStaff_name() {
      return staff_name;
   }
   public void setStaff_name(String staff_name) {
      this.staff_name = staff_name;
   }
   public String getStaff_tel() {
      return staff_tel;
   }
   public void setStaff_tel(String staff_tel) {
      this.staff_tel = staff_tel;
   }
   public int getStaff_enabled() {
      return staff_enabled;
   }
   public void setStaff_enabled(int staff_enabled) {
      this.staff_enabled = staff_enabled;
   }
   public String getStaff_join() {
      return staff_join;
   }
   public void setStaff_join(String staff_join) {
      this.staff_join = staff_join;
   }
   public MultipartFile getStaff_pic() {
      return staff_pic;
   }
   public void setStaff_pic(MultipartFile staff_pic) {
      this.staff_pic = staff_pic;
   }
   public String getStaff_pic_oname() {
      return staff_pic_oname;
   }
   public void setStaff_pic_oname(String staff_pic_oname) {
      this.staff_pic_oname = staff_pic_oname;
   }
   public String getStaff_pic_sname() {
      return staff_pic_sname;
   }
   public void setStaff_pic_sname(String staff_pic_sname) {
      this.staff_pic_sname = staff_pic_sname;
   }
   public String getStaff_pic_type() {
      return staff_pic_type;
   }
   public void setStaff_pic_type(String staff_pic_type) {
      this.staff_pic_type = staff_pic_type;
   }
   
   
}