package com.team4.healthcare.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team4.healthcare.dao.FreeBoardDao;
import com.team4.healthcare.dto.FreeBoard;

@Service
public class FreeBoardService {

	@Autowired
	private FreeBoardDao freeBoardDao;
	
	public List<FreeBoard> getFreeBoardList() {
		return freeBoardDao.selectByAll();
	}
	public void create(FreeBoard freeBoard) {
		freeBoardDao.create(freeBoard);
	}
	public void delete(int freeboard_id) {
		freeBoardDao.delete(freeboard_id);
	}
	public void update(FreeBoard freeBoard) {
		freeBoardDao.update(freeBoard);
	}
	public FreeBoard getFreeBoard(int freeboard_id) {
		return freeBoardDao.selectById(freeboard_id);
	}
}
