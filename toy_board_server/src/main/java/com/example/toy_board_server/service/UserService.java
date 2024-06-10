package com.example.toy_board_server.service;

import org.springframework.http.ResponseEntity;

import com.example.toy_board_server.entity.User;
import com.example.toy_board_server.module.SignForm;

public interface UserService {
	User sign(SignForm signForm);
	User login(User user);
}
