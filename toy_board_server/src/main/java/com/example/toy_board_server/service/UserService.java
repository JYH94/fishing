package com.example.toy_board_server.service;

import org.springframework.http.ResponseEntity;

import com.example.toy_board_server.domain.UserTeamDTO;
import com.example.toy_board_server.entity.User;
import com.example.toy_board_server.module.SignForm;

public interface UserService {
	User sign(SignForm signForm);
	UserTeamDTO login(User user);
	User duplicate(String id);
    UserTeamDTO getUserWithTeams(String userId);
}
