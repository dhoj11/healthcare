package com.team4.healthcare.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.team4.healthcare.dto.DZNotice;

@Mapper
public interface DZNoticeDao {

	public List<DZNotice> selectNoticeList();
	public DZNotice selectNoticeById(int dz_notice_id);

}
