package com.team4.healthcare.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team4.healthcare.dao.DZNoticeDao;
import com.team4.healthcare.dto.DZNotice;

@Service
public class HomeService {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeService.class);

	@Autowired
	private DZNoticeDao dzNoticeDao;
	
	public List<DZNotice> getDZNotice() {
		List<DZNotice> noticeList = dzNoticeDao.selectNoticeList();
		return noticeList;
	}
}
