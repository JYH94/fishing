package com.example.toy_board_server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.toy_board_server.entity.User;

@Repository
public interface UserRepositoryJPA extends JpaRepository<User, String>{
	User findByid(String id);
	User findUserWithTeamsById(String userId);
}
