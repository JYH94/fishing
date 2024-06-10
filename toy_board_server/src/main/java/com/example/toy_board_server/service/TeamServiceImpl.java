package com.example.toy_board_server.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.toy_board_server.entity.Team;
import com.example.toy_board_server.repository.TeamRepositoryJPA;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class TeamServiceImpl implements TeamService {
	
	private final TeamRepositoryJPA teamRepositoryJPA;

	@Override
	public List<Team> selectall() {
		return teamRepositoryJPA.findAll();
	}
}
