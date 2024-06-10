package com.example.toy_board_server.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.toy_board_server.entity.User;
import com.example.toy_board_server.module.SignForm;
import com.example.toy_board_server.repository.UserRepositoryJPA;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService{
	
	private final UserRepositoryJPA userRepositoryJPA;
	private final PasswordEncoder encoder;

	@Override
	public User sign(SignForm signForm) {
	
		User user = User.builder()
					.id(signForm.getId())
					.password(encoder.encode(signForm.getPassword()))
					.nickname(signForm.getNickname())
					.email(signForm.getEmailFront()+ "@" + signForm.getEmailBack())
					.build();
		
		return userRepositoryJPA.save(user);
	}
	
	@Override
	public User login(User user) {
		User check = userRepositoryJPA.findByid(user.getId());
		if(encoder.matches(user.getPassword(), check.getPassword())) {
			return check;
		} else {
			return null;
		}
	}

}
