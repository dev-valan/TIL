# How to link git repo to an existing project.

<p align="right">작성일 : 22.08.05</p>


### 기존 작업중인 폴더에, 깃헙 레포짓토리 연결 방법

###

--------------

#### 1. 기존 프로젝트 terminal 에서 git init 하기
```
cd project_path

git init
```

###
#### 2. Github에 빈 repository 생성하기 (no readme file)

###
#### 3. 기존 프로젝트와 git repo 연결
```
git remote add origin [repo_url_path]
```
연결 확인
```
git remote -v
```



###
#### 4. 연결 확인 되었으면, 최초 커밋 푸쉬 날리기
```
git add .

git commit -m 'MSG'

git branch -M main

git push -u origin main
```