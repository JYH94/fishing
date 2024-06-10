package com.example.toy_board_server.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "fishing_board")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class FishingBoard {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer seq;

    private String title;
    private String contents;
    private String writer;
    private LocalDateTime regdate;
    private String imagePath; // 이미지 경로 필드 추가
    private Integer views;
}
