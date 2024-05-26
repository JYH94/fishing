package com.example.toy_board_server.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.toy_board_server.entity.FishingBoard;
import com.example.toy_board_server.repository.BoardRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
@Transactional
public class BoardServiceImpl implements BoardService{

	private BoardRepository boardRepository;
	
	@Override
	public List<FishingBoard> selectAll() {
		return boardRepository.findAll();
	}
}
