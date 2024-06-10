package com.example.toy_board_server.repository;

import org.springframework.stereotype.Repository;

import com.example.toy_board_server.domain.UserTeamDTO;
import com.example.toy_board_server.entity.Team;
import com.example.toy_board_server.entity.User;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import static com.example.toy_board_server.entity.QUser.user;
import static com.example.toy_board_server.entity.QTeam.team;
import static com.example.toy_board_server.entity.QUserTeam.userTeam;

import java.util.List;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class UserRepositoryImpl implements UserRepository{
	
	private final JPAQueryFactory jPAQueryFactory;
	
	@Override
	public UserTeamDTO getUserWithTeams(String ids) {
	    List<Team> teams = jPAQueryFactory.selectFrom(team).fetch(); // 팀 정보를 가져옴

	    User entity = jPAQueryFactory.selectFrom(user)
                .where(user.id.eq(ids))
                .fetchOne(); // 유저 정보를 가져옴

	    return new UserTeamDTO(entity.getId(), entity.getPassword(), entity.getNickname(), entity.getEmail(), teams);
	}
	
}
