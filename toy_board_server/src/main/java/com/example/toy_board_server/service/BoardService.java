package com.example.toy_board_server.service;

import java.util.List;

import com.example.toy_board_server.entity.FishingBoard;

public interface BoardService {

	List<FishingBoard> selectAll();
}
