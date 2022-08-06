# Window Ubuntu WSL 설치 및 세팅

<p align="right">작성일 : 22.08.06</p>

개인 프로젝트를 진행하기 위해, 리눅스 환경이 필요했다.

윈도우 환경에서 Ubuntu 를 설치해서 사용할 수 있다.

------------------

### :: 참고 ::

[우분투 설치]

https://gusman.tistory.com/22

###

[도커 셋팅]

https://www.44bits.io/ko/post/wsl2-install-and-basic-usage
https://blog.naver.com/PostView.nhn?blogId=ilikebigmac&logNo=222007741507


###

--------------

### Error 1.

```
Cannot connect to the Docker daemon at unix:///var/run/docker.sock. 
Is the docker daemon running?
```

우분투에서 도커가 제대로 실행되고 있지 않아 발생하는 에러

재시작 해주자!
```
systemctl start docker
```

--------------

### Error 2.

```
System has not been booted with systemd as init system (PID 1). Can't operate.
Failed to connect to bus: Host is down
```

```
/etc/init.d/docker start 실행
```

---------------------

### WLS 기본 유저 변경

```
ubuntu2004 config --default-user root
```