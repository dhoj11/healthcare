package com.team4.healthcare.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.team4.healthcare.dto.ImgNotice;

@Mapper
public interface ImgNoticeDao {
	public List<ImgNotice> selectByAll();
	public void create(ImgNotice imgNotice);
	public ImgNotice selectById(int img_notice_id);
	public void delete(int img_notice_id);
	public void updateHitCount(int img_notice_id);
	public void updateNoImg(ImgNotice imgNotice);
	public void updateImg(ImgNotice imgNotice);
}
