package com.team4.healthcare.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

import com.team4.healthcare.dao.ImgNoticeDao;
import com.team4.healthcare.dto.ImgNotice;

@Service
public class ImgNoticeService {
	@Autowired
	private ImgNoticeDao imgNoticeDao;
	
	public List<ImgNotice> getImgNoticeList(){
		return imgNoticeDao.selectByAll();
	};
	
	
	public void create(ImgNotice imgNotice) {
		MultipartFile img_notice_attach =imgNotice.getImg_notice_attach();
		imgNotice.setImg_notice_pic_oname(img_notice_attach.getOriginalFilename());
		imgNotice.setImg_notice_pic_type(img_notice_attach.getContentType());
		String saveName = new Date().getTime()+"-"+img_notice_attach.getOriginalFilename();
		imgNotice.setImg_notice_pic_sname(saveName);
		
		File file = new File("D:/healthcarepic/"+saveName);
		try {
			img_notice_attach.transferTo(file);
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		imgNoticeDao.create(imgNotice);
	}
	
	public ImgNotice getImgNotice(int img_notice_id) {
		return imgNoticeDao.selectById(img_notice_id);
	}
	
	public void downloadAttach(int img_notice_id, HttpServletResponse response) {
		try {
			ImgNotice imgNotice = imgNoticeDao.selectById(img_notice_id);
			response.setContentType(imgNotice.getImg_notice_pic_type());
			String img_notice_pic_oname = imgNotice.getImg_notice_pic_oname();
			img_notice_pic_oname = new String(img_notice_pic_oname.getBytes("UTF-8"),"ISO-8859-1");
			
			response.setHeader("Content-Disposition", "attachment; filename=\""+ img_notice_pic_oname + "\";");
			
			InputStream is = new FileInputStream("D:/healthcarepic/"+imgNotice.getImg_notice_pic_sname());
			OutputStream os = response.getOutputStream();
			FileCopyUtils.copy(is,os);
			os.flush();
			is.close();
			os.close();
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public void delete(int img_notice_id) {
		imgNoticeDao.delete(img_notice_id);
	}
}
