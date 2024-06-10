package com.example.toy_board_server.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.toy_board_server.service.TeamService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/team")
public class TeamController {
	
	private final TeamService teamService;
	
	@GetMapping("/selectall")
	public ResponseEntity<?> selectall(){
		ResponseEntity<?> result = null;
		result = ResponseEntity.status(HttpStatus.OK).body(teamService.selectall());		
		return result;
	}
}
