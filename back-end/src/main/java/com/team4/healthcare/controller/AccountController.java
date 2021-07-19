package com.team4.healthcare.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team4.healthcare.dto.Hospital;
import com.team4.healthcare.dto.Staff;
import com.team4.healthcare.service.AccountService;

@CrossOrigin(origins="*", allowedHeaders = "*")
@RestController
@RequestMapping("/account")
public class AccountController {
	
	@Autowired
	private AccountService accountService;
	
	@GetMapping("/staff")
	public List<Staff> list(){
		return accountService.getStaffList();
	}
	
	@GetMapping("/staff/{staff_id}")
	public Staff getStaff(@PathVariable String staff_id) {
		return accountService.getStaff(staff_id);
	}
	
	@GetMapping("/staff/attach/{staff_id}")
	public void getStaffAttach(@PathVariable String staff_id, HttpServletResponse response) {
		accountService.getStaffAttach(staff_id, response);
	}
	
    @PostMapping("/staff")
    public void join(Staff staff){
    	accountService.createAccount(staff);
    }
    
    @PostMapping("/staff/modify")
    public void update(Staff staff) {
    	accountService.updateAccount(staff);
    }
    
    @DeleteMapping("/staff/{staff_id}")
    public void delete(@PathVariable("staff_id") String staff_id){
    	accountService.deleteAccount(staff_id);
    }
    
    @GetMapping("/optime/{hospital_code}")
    public Hospital getHospital(@PathVariable String hospital_code) {
    	return accountService.getHospital(hospital_code);
    }
    
    @PutMapping("/optime")
    public void updateHospital(@RequestBody Hospital hospital) {
    	accountService.updateHospital(hospital);
    }
    
    @GetMapping("/checkid/{staff_id}")
    public Boolean checkDuplicateId(@PathVariable("staff_id") String staff_id) {
    	return accountService.checkDuplicateId(staff_id);
    }
	   
	   

}
