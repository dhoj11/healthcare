package com.team4.healthcare.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team4.healthcare.service.ParticipantService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/chat")
public class ChatController {
	
	@Autowired
	private ParticipantService participantService;
	
	@PostMapping("/room")
	public int getRoomId(@RequestBody List<Integer> staffArr) {
		participantService.getRoomId(staffArr);
		
		return 1;
	}

}
