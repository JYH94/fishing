package com.example.toy_board_server.domain;

import java.util.List;

import javax.persistence.Id;

import com.example.toy_board_server.entity.Team;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserTeamDTO {

    private String id;
    private String password;
    private String nickname;
    private String email;
    List<Team> teamList;
    
}
