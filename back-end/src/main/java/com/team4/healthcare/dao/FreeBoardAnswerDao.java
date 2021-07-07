package com.team4.healthcare.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.team4.healthcare.dto.FreeBoardAnswer;

@Mapper
public interface FreeBoardAnswerDao {
	public List<FreeBoardAnswer> selectByFreeBoardId(int freeboard_id);
	public void create(FreeBoardAnswer freeBoardAnswer);
	public void delete(int freeboard_answer_id);
}
