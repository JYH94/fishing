package com.example.toy_board_server.entity;

import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "team")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Team {
    @Id
    private String teamName;
    private String purpose;
}
