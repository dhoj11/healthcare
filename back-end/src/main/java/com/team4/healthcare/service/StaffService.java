package com.team4.healthcare.service;

import java.io.FileInputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;

import com.team4.healthcare.dao.StaffDao;
import com.team4.healthcare.dto.Staff;

@Service
public class StaffService {
	@Autowired
	private StaffDao staffDao;
	
	public List<Staff> getStaffList() {
		return staffDao.selectByAll();
	}
	
	public Staff getStaff(String staff_id) {
		return staffDao.selectById(staff_id);
	}
	
	public String getHospitalName(String staff_id) {
		return staffDao.selectHospitalname(staff_id);
	}
	public void downloadAttach(String staff_id,HttpServletResponse response) {
		try {
			Staff staff = getStaff(staff_id);
			response.setContentType(staff.getStaff_pic_type());
			String staff_pic_oname = staff.getStaff_pic_oname();
			staff_pic_oname = new String(staff_pic_oname.getBytes("UTF-8"),"ISO-8859-1");
			
			//body에 오는 값을 다운로드 받아라
			response.setHeader("Content-Disposition", "attachment; filename=\""+ staff_pic_oname + "\";");
			
			InputStream is = new FileInputStream("D:/healthcarepic/"+staff.getStaff_pic_sname());
			OutputStream os = response.getOutputStream();
			FileCopyUtils.copy(is,os);
			
			os.flush();
			is.close();
			os.close();
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
}
