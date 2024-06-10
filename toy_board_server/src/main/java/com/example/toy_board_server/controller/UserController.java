package com.example.toy_board_server.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.toy_board_server.domain.UserTeamDTO;
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

		if (userService.sign(signForm) != null) {
			result = ResponseEntity.status(HttpStatus.OK).body("회원가입 성공! 로그인 후 이용하세요");
		} else {
			result = ResponseEntity.status(HttpStatus.OK).body("회원가입 실패......");
		}

		return result;
	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user) {
		ResponseEntity<?> result = null;

		UserTeamDTO check = userService.login(user);

		if (check.getId() != null) {
			result = ResponseEntity.status(HttpStatus.OK).body(check);
		} else {
			if("1".equals(check.getPassword())) {
				result = ResponseEntity.status(HttpStatus.OK).body("패스워드를 확인하세요.");
			} else {
				result = ResponseEntity.status(HttpStatus.OK).body("아이디를 확인 해주세요.");
			}
		}
		return result;
	}
	
	@GetMapping("/duplicate")
	public ResponseEntity<?> duplicate(String id) {
		ResponseEntity<?> result = null;
		System.out.println("바인딩 : " + id);
		User user = userService.duplicate(id);
		System.out.println(user);
		if(user == null) {
			result = ResponseEntity.status(HttpStatus.OK).body("가입 가능한 ID 입니다.");
		} else {
			result = ResponseEntity.status(HttpStatus.OK).body("이미 존재하는 ID 입니다.");
		}
		return result;
	}
	

}
