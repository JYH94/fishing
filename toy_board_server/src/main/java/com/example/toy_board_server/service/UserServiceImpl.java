package com.example.toy_board_server.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.toy_board_server.domain.UserTeamDTO;
import com.example.toy_board_server.entity.User;
import com.example.toy_board_server.module.SignForm;
import com.example.toy_board_server.repository.UserRepository;
import com.example.toy_board_server.repository.UserRepositoryJPA;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService{
	
	private final UserRepositoryJPA userRepositoryJPA;
	private final UserRepository userRepository;
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
	public UserTeamDTO login(User user) {
		UserTeamDTO check = userRepository.getUserWithTeams(user.getId());
		
		if(check != null) {
			if(encoder.matches(user.getPassword(), check.getPassword())) {
				return check;
			} else {
				check = new UserTeamDTO();
				check.setPassword("1");
				// ID 일치 , Pwd 불일치
			}
		} else {
			check = new UserTeamDTO();
			check.setPassword("0");
			// ID 불일치
		}
		
		return check;
	}

	@Override
	public User duplicate(String id) {
		User user = userRepositoryJPA.findByid(id);
		return user;
	}
	
	@Override
	public UserTeamDTO getUserWithTeams(String userId) {
		return userRepository.getUserWithTeams(userId);
	}
}
