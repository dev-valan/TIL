# How to fork a public repo into a private repo.

<p align="right">작성일 : 22.07.20</p>


### 깃헙에서 Public Repo 를 Private Repo 로 Fork 하는 방법

###

--------------

#### 1. Public Repo 를 임시로 --bare clone 한다.
```
  $ git clone --bare [PUBLIC REPO URL].git
```

#### 2. GitHub 에 Private Repo 를 생성해준다.

#### 3. Clone 한 Public Repo 를 내 Private Repo로 mirror-push 한다.
```
  $ cd [CLONE PUBLIC REPO DIR]
  $ git push --mirror [PRIVATE REPO URL].git
```

#### 4. 정상적으로 Private Repo 에 Push가 완료 되었으면, Clone 한 Public Repo 폴더는 삭제한다.

#### 5. Public Repo 를 Fetch 받을 remote 로 설정한다.

```
  $ git clone [PRIVATE REPO URL].git
  $ cd [PRIVATE REPO DIR]
  $ git remote add public [PUBLIC REPO URL].git
```

#### 6. Push or Pull 커맨드
```
  $ git push origin master
  $ git pull public master
```

###

