package com.example.toy_board_server.controller;


import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.toy_board_server.domain.BoardDTO;
import com.example.toy_board_server.entity.FishingBoard;
import com.example.toy_board_server.service.BoardService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/board")
public class BoardContoller {
	
	private BoardService boardService;

	@GetMapping("/selectall")
	public ResponseEntity<?> selectall() {
		ResponseEntity<?> result = null;
		List<FishingBoard> list = boardService.selectAll();
		
		result = ResponseEntity.status(HttpStatus.OK).body(list);
		return result;
	}
	
	public ResponseEntity<?> insert(FishingBoard entity){
		
		return null;
	}
}
