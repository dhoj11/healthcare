package com.team4.healthcare.controller;


import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team4.healthcare.security.JwtUtil;

import com.team4.healthcare.dto.Staff;
import com.team4.healthcare.service.StaffService;
import com.team4.healthcare.service.TestService;

@CrossOrigin(origins ="*")
@RestController
@RequestMapping("/")
public class HomeController {
	
	@Resource(name="daoAuthenticationManager")
	private AuthenticationManager authenticationManager;
	
    @Autowired
    private TestService testService;
    @Autowired
    private StaffService staffService;
    

    
    @PostMapping("/auth/login")
    public Map<String,String> login(@RequestBody Staff staff){
    	String staff_id = staff.getStaff_id();
    	String staff_password = staff.getStaff_password();
    	Staff dbStaff = staffService.getStaff(staff_id);
    	String hospital_name = staffService.getHospitalName(staff_id);
    	//사용자 인증하기
		UsernamePasswordAuthenticationToken authReq = new UsernamePasswordAuthenticationToken(staff_id, staff_password);
		Authentication authentication = authenticationManager.authenticate(authReq);
	    SecurityContext securityContext = SecurityContextHolder.getContext();
	    securityContext.setAuthentication(authentication);
	    //JWT 토큰 생성
	    String authToken = JwtUtil.createToken(staff_id);
	    
	    //JSON 응답 보내기
		Map<String, String> map = new HashMap<>();
		map.put("staff_id", staff_id);
		map.put("authToken", authToken);
		map.put("staff_name", dbStaff.getStaff_name());
		map.put("staff_authority",dbStaff.getStaff_authority());
		map.put("authority", dbStaff.getAuthority());
		map.put("hospital_code", dbStaff.getHospital_code());
		map.put("hospital_name", hospital_name);
		
	    return map;
    }
}

