package com.example.toy_board_server.repository;

import com.example.toy_board_server.domain.UserTeamDTO;

public interface UserRepository {

	public UserTeamDTO getUserWithTeams(String ids);
}
