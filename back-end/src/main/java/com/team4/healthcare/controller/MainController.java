package com.team4.healthcare.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MainController {
	
	@RequestMapping(value={"/","/dashBoard","/appointment","/administration","/treatment","/test","/setting","/error","/noticeeditor"},method=RequestMethod.GET)
	public String home() {
		return "/index.html";
	}
}
