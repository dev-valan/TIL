# Redux 란?

<p align="right">작성일 : 22.08.15</p>

React.js 로 프로젝트를 만들 때 사용 했었는데, 

최근에 다시 Next.js 로 만들 프로젝트에서 사용하게 되어 내용 정리 차 작성!


------------------

### 📚 정의

:::tip

A Predictable State Container for JS Apps (공식문서)

:::

자바스크립트 어플리케이션을 위한 예측 가능한 상태관리 라이브러리이다.



### 📚 기본 원리

- redux는 기본적으로 flux 패턴을 따른다.

```javascript
// flex 패턴 흐름
Action -> Dispatch -> Store -> View
```
- redux의 데이터 흐름은 동일하게 단방향으로, 컴포넌트에서 Dispatch라는 함수를 통해,
Action이 발동 되고, reducer에 정의된 로직에 따라, store의 state가 변경된다.


![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/abbf87f9-fc2d-418b-b66c-0ea3ef05c9ca/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220815T133954Z&X-Amz-Expires=86400&X-Amz-Signature=d99fd568f4b70ac804dc76815421c9b4d0963d1e8a6d931ad71a8d4e75ae159f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9bc252bf-4d10-4717-86d7-dc6dadf42222/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220815T134123Z&X-Amz-Expires=86400&X-Amz-Signature=4ac4ebaa3051f19496a761ed53acdf8178b1e30c678a104e69db17ed2f3c9e64&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### 📚 주요 개념

1. Store

```javascript
- 앱의 모든 state를 저장하고 있는 객체. 저장소라고 생각하면 편함.
    
- 스토어를 통해서만 state가 관리된다.
    
- 스토어 안의 state를 변경하기 위한 유일한 방법은 action을 dispatch 하는 것 뿐이다.
```

2. Action

```javascript
- 어떤 동작에 대해 선언되어 있는 객체
    
- type 이라는 필드를 필수로 가지는 객체
    
- 어플리케이션에서 일어난 것을 묘사한 것

ex ) 숫자 increase, decrease , todo 지우기 등
```
3. Dispatch
```javascript
- "급파하다" 라는 뜻으로 리듀서에게 액션을 발생하라고 시키는 것  이해하면 편함.
    
- Store의 내장 함수
    
- dispatch 라는 함수에는 액션을 파라미터로 전달한다. → dispatch(action)
    
- 위와 같이 호출하면, 스토어는 리듀서 함수를 실행시켜서 해당 액션을 처리하는 로직이 있다면, 
  액션을 참고하여 새로운 state를 만든다.

store.dispatch({ type: 'counter/incremented' })
```
4. Reducer
```javascript
- reducer는 store에 들어갈 state와, state를 바꿀 함수를 정의하는 곳이라고 생각하면 편하다.
    
- 변화시키려는 정보가 담긴 action이 reducer 함수에게 전달되고, reducer는 변화가 있기 전의 
  상태와 action 으로 전달된 변화에 대한 정보를 가지고 새로운 state를 만들어낸다.
    
- (state, action) ⇒ newState
    
- 새롭게 만들어진 state 는 store에 전달되어 update된다.
    
- 불변성을 지켜야 한다.
```

:::tip

불변성을 지켜야하는 이유는 redux는 이전 state와 바뀐 state를 구분하는 방법이 참조값이 바뀌었는지 확인하고, 참조값이 바뀌면, state가 바뀌었다고 redux가 인식하여, 해당 state를 사용하는 컴포넌트에게 리렌더링을 요청하기 때문입니다.

그렇기 때문에, state.test = action.test와 같이 직접적으로 state를 변경하면 참조값이 변하지 않아 redux는 값이 바뀌었다고 인식하지 않고 리렌더링 되지 않습니다.

state.test = {...test, action.test}

또는 immer라는 라이브러리를 사용하여 쉽게 불변성을 유지합니다.
:::

5. Middle Ware

```javascript
- 리덕스의 미들웨어를 사용하면, 액션 객체가 리듀서에서 처리되기 전, 
  또는 그 후에 원하는 작업을 수행할 수 있게 해주는 것
    
- ex ) 특정 액션이 발생했을 때 특정 JS 함수 실행, 액션을 콘솔에 출력 등
```


### 📚 React 에서 Redux 를 사용하는 이유


![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/73cb0aa8-d552-486d-8e19-39acc8b0725a/redux.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220815T134057Z&X-Amz-Expires=86400&X-Amz-Signature=d0d1921d0d7d9f433dc5d26e56362917093dc0dda5f318732ad81985a0d3f53b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22redux.gif%22&x-id=GetObject)

:::tip
1. 모든 component가 props 없이 state 를 직접 꺼낼 수 있다.  
   ( 공식 문서 : Redux는 애플리케이션의 많은 부분에 필요한 "전역" 상태를 관리하는 데 도움이 됩니다. Redux는 예측 가능하고 테스트 가능한 코드를 작성하도록 안내하여 애플리케이션이 예상대로 작동할 것이라는 확신을 줍니다. )

2. state 관리가 용이하다. → 한 곳에서 관리하고 있기 때문에, 다른 컴포넌트에서 사용하고 있어도 한 곳 에서 관리하고 있기 때문에, 관리가 편하다. (그림 1-b)

:::
