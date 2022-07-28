# create-react-app Project 에서 환경변수 적용하기

<p align="right">작성일 : 22.07.28</p>

개인 프로젝트를 진행하면서, 평소처럼 .env 파일에 환경변수들을 선언하고 작업을 진행하려고 했다.

But, 제대로 변수들을 선언하지 않아서 삽질한 경험을 작성한다.

###

--------------

### 📕 .env 란?


::: tip

- App 에서 사용할 환경변수들을 작성하고, 프로젝트의 환경별로 구성할 수 있게 해준다.

- 환경변수란 ? 환경 변수(environment variable)는 프로세스가 컴퓨터에서 동작하는 방식에 영향을 미치는, 동적인 값들의 모임이다. (위키백과)
  :::

### 사용방법

---------
#### .env 파일 내 선언

```javascript
// REACT_APP_ 이란 prefix를 꼭 붙여줘야 한다.
REACT_APP_[SOMETHING]

// ex
REACT_APP_PRIVATE_KEY

REACT_APP_MD_ID
```

###

#### JSX 코드 내 적용

```javascript
<div>
  {process.env.REACT_APP_[SOMETHING]}
</div>

```

###

#### 프로젝트 별 .env 파일 적용
```javascript
// 개발 환경 ( npm start )
env.development

// 테스트 환경 ( npm test )
env.test

// 로컬 환경 ( npm run build )
env.production

// 상용 환경 ( npm run build )
env.production



```


###

### 주의 사항

------------
> Git 에 중요한 정보들을 숨기기 위해서 사용하긴 하지만, 보안이 100% 되는게 아니다.
> 
> App 을 Build 해서 배포하면, 웹에서 모든 정보들이 노출 될 수 있기 때문에 주의해야한다.