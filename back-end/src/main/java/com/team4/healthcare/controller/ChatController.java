package com.team4.healthcare.controller;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team4.healthcare.dto.Chat;
import com.team4.healthcare.dto.Participant;
import com.team4.healthcare.dto.Staff;
import com.team4.healthcare.service.ChatService;
import com.team4.healthcare.service.ParticipantService;
import com.team4.healthcare.service.StaffService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/chat")
public class ChatController {
	
	@Autowired
	private ParticipantService participantService;
	
	@Autowired
	private ChatService chatService;
	
	@Autowired
	private StaffService staffService;
	
	//chat
	@PostMapping("")
	public void insertChat(@RequestBody Chat chat) {
		chatService.insertChat(chat);
	}
	@GetMapping("/{room_id}")
	public List<Chat> getChatListByRoomId(@PathVariable("room_id") int roomd_id){
		return chatService.getChatListByRoomId(roomd_id);
	}
	@GetMapping("/lastchat/{room_id}")
	public Chat getLastchat(@PathVariable("room_id") int room_id) {
		return chatService.getLastChat(room_id);
	}
	
	//room
	@PostMapping("/room")
	public int getRoomId(@RequestBody List<String> staffArr) {
		int room_id = participantService.getRoomId(staffArr);
		return room_id;
	}
	
	@GetMapping("/staffList")
	public List<Staff> getStaffListByName(@Param("staff_name") String staff_name,@Param("staff_id") String staff_id){
		return staffService.getStaffListByName(staff_name,staff_id);
	}
	//participant
	@GetMapping("/participant/{room_id}")
	public List<Participant> getParticipantList(@PathVariable("room_id") int room_id){
		return participantService.getParticipantList(room_id);
	}
	@GetMapping("/participantitem")
	public Participant getParticipantItem(@RequestParam("room_id") int room_id, @RequestParam("staff_id") String staff_id) {
		return participantService.getParticipantItem(room_id, staff_id);
	}
	@GetMapping("/participantlist")
	public List<Participant> getParticipantListByStaffId(@RequestParam("staff_id") String staff_id){
		return participantService.getParticipantListByStaffId(staff_id);
	}
	@PutMapping("/participantdate/{room_id}")
	public void updateParticipantDate(@PathVariable("room_id") int room_id) {
		participantService.updateParticipantDate(room_id);
	}
	@PutMapping("/participantnotreadnumplus")
	public void updateParticipantNotReadNumPlus(@RequestBody Participant participant) {
		participantService.updateParticipantNotReadNumPlus(participant);
	}
	@PutMapping("/participantnotreadnumzero")
	public void updateParticipantNotReadNumZero(@RequestBody Participant participant) {
		participantService.updateParticipantNotReadNumZero(participant);
	}
	@GetMapping("/countnotreadnum")
	public int getCountNotReadNum(@RequestParam("staff_id") String staff_id) {
		return participantService.getCountNotReadNum(staff_id);
	}
	@GetMapping("/participant/otherstaffid")
	public List<String> getOtherStaffId(@RequestParam("room_id") int room_id, @RequestParam("staff_id") String staff_id){
		return participantService.getOtherStaffId(room_id, staff_id);
	}

}
