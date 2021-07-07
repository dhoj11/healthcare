package com.team4.healthcare.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team4.healthcare.dao.FreeBoardAnswerDao;
import com.team4.healthcare.dto.FreeBoardAnswer;

@Service
public class FreeBoardAnswerService {

	@Autowired
	private FreeBoardAnswerDao freeBoardAnswerDao;
	
	public List<FreeBoardAnswer> getFreeBoardAnswerList(int freeboard_id) {
		return freeBoardAnswerDao.selectByFreeBoardId(freeboard_id);
	}
	
	public void create(FreeBoardAnswer freeBoardAnswer) {
		freeBoardAnswerDao.create(freeBoardAnswer);
	}
	public void delete(int freeboard_answer_id) {
		freeBoardAnswerDao.delete(freeboard_answer_id);
	}
}
