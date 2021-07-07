package com.team4.healthcare.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team4.healthcare.dao.NoticeDao;
import com.team4.healthcare.dto.Notice;

@Service
public class NoticeService {
	@Autowired
	private NoticeDao noticeDao;
	
	public List<Notice> getNoticeList() {
		return noticeDao.selectByAll();
	}
	public Notice getNotice(int notice_id) {
		return noticeDao.selectById(notice_id);
	}
	public void create(Notice notice) {
		noticeDao.create(notice);
	}
	public void delete(int notice_id) {
		noticeDao.delete(notice_id);
	}
	public void update(Notice notice) {
		noticeDao.update(notice);
	}

}
