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
    private Long seq;
    
    @Column(name = "writer")
    private String writer;
    
    @Column(name = "title", nullable = false)
    private String title;
    
    @Column(name = "content", nullable = false)
    private String content;
    
    @Column(name = "root", nullable = false)
    private Integer root;
    
    @Column(name = "depth", nullable = false)
    private Integer depth;
    
    @Column(name = "image_path")
    private String imagePath;
    
    @Column(name = "reg_date")
    private LocalDateTime regDate;
    
    @Column(name = "classification")
    private String classification;
}
