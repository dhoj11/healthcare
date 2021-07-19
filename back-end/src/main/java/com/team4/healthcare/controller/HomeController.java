package com.team4.healthcare.controller;


import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team4.healthcare.dto.DZNotice;
import com.team4.healthcare.dto.Staff;
import com.team4.healthcare.mqtt.MqttTemplate;
import com.team4.healthcare.security.JwtUtil;
import com.team4.healthcare.service.HomeService;
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
    
    @Autowired 
	private MqttTemplate mqttTemplate;
    
    @Autowired
    private HomeService homeService;
    
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
    
    @RequestMapping("/sendMqttMessage")
    public void sendMqttMessage(String topic, String content, HttpServletResponse res) {
       try {
          mqttTemplate.sendMessage(topic, content);
          System.out.println("들어옴");
          JSONObject json = new JSONObject();
          json.put("result", "success");
          res.setContentType("application/json; charset=UTF-8");
          PrintWriter writer = res.getWriter();
          writer.write(json.toString());
          writer.flush();
          writer.close();
       } catch(Exception e) {
          e.printStackTrace();
       }
    }
    @GetMapping("/dz/notice")
    public List<DZNotice> getDZNotice() {
    	List<DZNotice> noticeList = homeService.getDZNotice();
    	return noticeList;
    }
}

