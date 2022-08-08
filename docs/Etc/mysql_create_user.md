# MySQL 계정 생성 및 DB 권한 주기

<p align="right">작성일 : 22.08.08</p>

개인 프로젝트 진행하면서, mysql user를 생성하고 권한을 줘야 할 일이 생겼다.

근데 기존에 사용했던 명령어가 먹히질 않아 찾아보니, 버전 문제였다.

5.xx 버전과 8.xx 버전의 차이

------------------

### 5.xx version

```
grant all privileges on DBNAME.* to USERID@'%' identified by 'PASS' with grant option;
flush privileges ;
```

### 8.xx version

```
create user USERID@'%' identified by 'PASS';
grant all privileges on DBNAME.* to USERID@'%' with grant option;
flush privileges;
```

차이 점은, 계정 생성과 DB 권한 부여를 따로 해줘야 한다.

