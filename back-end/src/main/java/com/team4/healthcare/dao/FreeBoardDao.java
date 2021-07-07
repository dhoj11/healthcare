package com.team4.healthcare.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.team4.healthcare.dto.FreeBoard;

@Mapper
public interface FreeBoardDao {
	public List<FreeBoard> selectByAll();
	public void create(FreeBoard freeBoard);
	public void delete(int freeboard_id);
	public void update(FreeBoard freeBooard);
	public FreeBoard selectById(int freeboard_id);
}
