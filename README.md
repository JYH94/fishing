** 낚시인 커뮤니티
   1. 특정 포인트 등록 및 조회
   2. 낚시 다녀온 후 작성할 수 있는 게시판
   3. 이용자들 간 팀을 만들고, 팀원들 간에 추억저장소 ( 팀원만 조회 가능한 저장소 )


** 2024.06.20
   1. RDS 오픈 ( 유저의 포인트 저장 및 조회 )
   2. 회원가입 및 로그인 구현
      - 현재 SessionStorage를 통해 로그인 상태 관리 ( 추후 JWT 토큰 도입 예정 )
      - 회원은 다중의 그룹을 가입할 수 있도록 구현 ( 그룹별 추억 조회 예정 )
   3. 포인트 등록을 위한 검색시 카카오맵 API 활용
      - 페이지 내 포인트 조회시 DB / 전체적인 지도 검색시 카카오DB 활용
   4. 포인트 등록 및 조회 완료.
      - 게시판 완성시, 포인트 조회시 관련게시글 노출시키도록 구현 예정
   5. 게시판 구현 중
      - 그룹별 게시글 조회기능 구현 예정


** 2024/06/25
   1. React 프로젝트 (+ 정적 리소스) AWS S3 배포완료
   2. Springboot 프로젝트 AWS EC2 배포완료
   3. DB 는 RDS 사용 중
   4. S3와 도메인 연결 완료 ( www.jyh94.com )
      - 현재는 과금때문에 인스턴스들을 중지시켜두고 로컬에서 개발 중인 상태
   
