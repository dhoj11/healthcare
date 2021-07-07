package com.team4.healthcare.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.team4.healthcare.dto.Notice;

@Mapper
public interface NoticeDao {
	public List<Notice> selectByAll();
	public Notice selectById(int notice_id);
	public void create(Notice notice);
	public void delete(int notice_id);
	public void update(Notice notice);
}
