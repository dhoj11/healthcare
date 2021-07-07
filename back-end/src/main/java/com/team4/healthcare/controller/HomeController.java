package com.team4.healthcare.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team4.healthcare.service.TestService;

@CrossOrigin(origins ="*")
@RestController
@RequestMapping("/home")
public class HomeController {
	
    @Autowired
    private TestService testService;

    @GetMapping("/test")
    public int Test(){
        return testService.Test();
    }
}

//back-end test : dongho