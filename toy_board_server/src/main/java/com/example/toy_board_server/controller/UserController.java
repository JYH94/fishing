package com.example.toy_board_server.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.toy_board_server.entity.User;
import com.example.toy_board_server.module.SignForm;
import com.example.toy_board_server.service.UserService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/user")
public class UserController {
	
	private final UserService userService;


	@PostMapping("/sign")
	public ResponseEntity<?> sign(@RequestBody SignForm signForm) {
		ResponseEntity<?> result = null;
		
		if(userService.sign(signForm) != null) {
			result = ResponseEntity.status(HttpStatus.OK).body("회원가입 성공!");
		} else {
			result = ResponseEntity.status(HttpStatus.OK).body("회원가입 실패......");
		}
		
		return result;
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user) {
		ResponseEntity<?> result = null;
		
		if(userService.login(user) != null) {
			result = ResponseEntity.status(HttpStatus.OK).body("로그인 성공!");
		} else {
			result = ResponseEntity.status(HttpStatus.OK).body("로그인 실패....");
		}
		
		return result;
	}
}
