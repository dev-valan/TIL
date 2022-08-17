# MySQL Table Truncate

<p align="right">작성일 : 22.08.17</p>

------------------

### Code

```shell
> mysql -u root -p

> show databases;

> use renew_test_api

> show tables;

> TRUNCATE TABLE 테이블명;
```

###
### 외래키가 존재하는 테이블 Truncate

```shell
ERROR 1701 (42000): Cannot truncate a table referenced in a foreign key constraint 
(`DB명`.`참조하는 테이블`, CONSTRAINT `test` FOREIGN KEY (`외래키`) REFERENCES `DB명`.`테이블명` (`컬럼`))
```

:: 해결방법 ::

외래키 체크를 하지 않는 설정으로 변경 후, Truncate 실행

```shell
> set FOREIGN_KEY_CHECKS = 0;
Query OK, 0 rows affected (0.000 sec)

> truncate 테이블명;
Query OK, 0 rows affected (0.351 sec)

> set FOREIGN_KEY_CHECKS = 1;
Query OK, 0 rows affected (0.000 sec)
```

###
