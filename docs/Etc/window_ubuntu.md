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

### Error 3.

```
wsl --set-version Ubuntu-20.04 2
```

위 명령어는 윈도우에 설치된 Ubuntu 의 Wsl version 을 변경하는 것이다.

```
변환이 진행 중입니다. 몇 분 정도 걸릴 수 있습니다...
WSL 2와의 주요 차이점에 대한 자세한 내용은 https://aka.ms/wsl2를 참조하세요
WSL 2에 커널 구성 요소 업데이트가 필요합니다. 자세한 내용은 https://aka.ms/wsl2kernel을 참조하십시오.
```

https://blog.dalso.org/linux/wsl2/11119

위 링크 참조해서, 패키지를 설치하면 된다.

![image](https://user-images.githubusercontent.com/107361759/183259323-5120c763-1c9e-4ecb-bf1a-27bc3bdaabe6.png)

<패키지 설치 전>

###

![image](https://user-images.githubusercontent.com/107361759/183259338-e6d8179e-6ee9-42f3-8abf-a31706f5cc3d.png)

<패키지 설치 후>

-------------

### WLS 기본 유저 변경

```
ubuntu2004 config --default-user root
```