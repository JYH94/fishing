package com.example.toy_board_server.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user_team")
@IdClass(UserTeamId.class)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserTeam {
    
    @Id
    private String userId;
    
    @Id
    private String teamName;
    
}