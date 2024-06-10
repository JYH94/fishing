package com.example.toy_board_server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.toy_board_server.entity.Team;

@Repository
public interface TeamRepositoryJPA extends JpaRepository<Team, String>{
	
}
