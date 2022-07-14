# Commit/Push 를 해도, 잔디가 심어지지 않는 경우



정상적으로 commit/push 에 성공 했으나 잔디가 심어지지 않는 경우가 있다.
 
내 경우에는 git local user 가 회사 계정으로 지정되어 있었기 때문이었다.

간단하게 local git user 설정만 변경해주면 된다.
###

<p align="center">
<img src="https://user-images.githubusercontent.com/92422377/178777764-9186da7e-247f-4321-a72c-12c8d9eb4c69.png" alt="">
</p>

(명령어를 통해, 현재 git config 에 등록되어 있는 user 정보를 확인 할 수 있다.)

(.... 회사 계정으로 등록 되어 있다... )
###


```
git config --local user.name Valan
git config --local user.email ValanEmail@google.com  
```
###
위 코드를 입력하면, 해당 repo 에서만 사용되도록 설정 가능하다.