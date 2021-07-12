package com.team4.healthcare.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.team4.healthcare.dto.FreeBoard;
import com.team4.healthcare.dto.FreeBoardAnswer;
import com.team4.healthcare.dto.ImgNotice;
import com.team4.healthcare.dto.Notice;
import com.team4.healthcare.dto.Staff;
import com.team4.healthcare.service.FreeBoardAnswerService;
import com.team4.healthcare.service.FreeBoardService;
import com.team4.healthcare.service.ImgNoticeService;
import com.team4.healthcare.service.NoticeService;
import com.team4.healthcare.service.StaffService;

@CrossOrigin(origins ="*")
@RestController
@RequestMapping("/dashboard")
public class DashBoardController {
	private static final Logger logger = LoggerFactory.getLogger(DashBoardController.class);
	@Autowired
	private NoticeService noticeService;
	@Autowired
	private FreeBoardService freeBoardService;
	@Autowired
	private FreeBoardAnswerService freeBoardAnswerService;
	@Autowired
	private StaffService staffService;
	@Autowired
	private ImgNoticeService imgNoticeService;
	
	//notice
	@GetMapping("/notice")
	public List<Notice> noticeList() {
		return noticeService.getNoticeList();
	}
	@GetMapping("/notice/{notice_id}")
	public Notice notice(@PathVariable("notice_id") int notice_id) {
		return noticeService.getNotice(notice_id);
	}
	@PostMapping("/notice")
	public void createNotice(@RequestBody Notice notice) {
		noticeService.create(notice);
	}
	@DeleteMapping("/notice/{notice_id}")
	public void deleteNotice(@PathVariable("notice_id") int notice_id) {
		noticeService.delete(notice_id);
	}
	@PutMapping("/notice")
	public void updateNotice(@RequestBody Notice notice) {
		noticeService.update(notice);
	}
	
	//ImgNotice
	@GetMapping("/imgnotice")
	public List<ImgNotice> imgNoticeList() {
		return imgNoticeService.getImgNoticeList();
	}
	
	@PostMapping("/imgnotice")
	public void createImgNotice(ImgNotice imgNotice) {
		imgNoticeService.create(imgNotice);
	}
	
	@GetMapping("/imgnotice/downloadAttach/{img_notice_id}")
	public void imgNoticeDownloadAttach(@PathVariable("img_notice_id") int img_notice_id,HttpServletResponse response) {
		imgNoticeService.downloadAttach(img_notice_id, response);
	}
	
	@DeleteMapping("/imgnotice/{img_notice_id}")
	public void deleteImgNotice(@PathVariable("img_notice_id") int img_notice_id) {
		imgNoticeService.delete(img_notice_id);
	}
	@PutMapping("/imgnotice/{img_notice_id}") 
	public void updateHitCount(@PathVariable("img_notice_id") int img_notice_id) {
		imgNoticeService.updateHitCount(img_notice_id);
	}
	
	
	//freeboard
	@GetMapping("/freeboard")
	public List<FreeBoard> freeBoardList() {
		return freeBoardService.getFreeBoardList();
	}
	
	@PostMapping("/freeboard")
	public void createFreeBoard(@RequestBody FreeBoard freeBoard) {
		freeBoardService.create(freeBoard);
	}
	@DeleteMapping("/freeboard/{freeboard_id}")
	public void deleteFreeBoard(@PathVariable("freeboard_id") int freeboard_id) {
		freeBoardService.delete(freeboard_id);
	}
	@PutMapping("/freeboard")
	public void updateFreeBoard(@RequestBody FreeBoard freeBoard) {
		freeBoardService.update(freeBoard);
	}
	@GetMapping("/freeboard/{freeboard_id}")
	public FreeBoard freeBoard(@PathVariable("freeboard_id") int freeboard_id) {
		return freeBoardService.getFreeBoard(freeboard_id);
	}
	
	//freeboard_answer
	@GetMapping("/freeboardanswer/{freeboard_id}")
	public List<FreeBoardAnswer> freeBoardAnswerList(@PathVariable("freeboard_id") int freeboard_id) {
		return freeBoardAnswerService.getFreeBoardAnswerList(freeboard_id);
	}
	
	@PostMapping("/freeboardanswer")
	public void createFreeBoardAnswer(@RequestBody FreeBoardAnswer freeBoardAnswer) {
		freeBoardAnswerService.create(freeBoardAnswer);
	}
	
	@DeleteMapping("/freeboardanswer/{freeboard_answer_id}")
	public void deleteFreeBoardAnswer(@PathVariable("freeboard_answer_id") int freeboard_answer_id) {
		freeBoardAnswerService.delete(freeboard_answer_id);
	}
	
	//staff
	@GetMapping("/staff")
	public List<Staff> staffList() {
		return staffService.getStaffList();
	}
	@GetMapping("/staff/downloadAttach/{staff_id}")
	public void staffDownloadAttach(@PathVariable("staff_id") String staff_id, HttpServletResponse response) {
		staffService.downloadAttach(staff_id,response);				
	}
}
