## React Hook useEffect has a missing dependency: 'dispatch'.
<p align="right">작성일 : 22.08.04</p>

### Error


```javascript

React Hook useEffect has a missing dependency: 'dispatch'.
Either include it or remove the dependency array

```

useEffect 사용 시 문제 발생.


### Cause

::: tip
* useEffect 는 기본 형태가 useEffect( callback functions, dependencies )

- callback function : side-effect 로직을 담고 있는 함수.
  콜백은 변경 사항이 DOM 으로 푸시된 직후 실행 된다.

- dependencies : [optional] [array]. dependencies 배열에 명시되어있는
  종속성이 변경된 경우에만 콜백을 실행하도록 함.

여기 dependencies 에 dispatch 가 빠져있다 라는 말임

:::


useEffect는 클래스 컴포넌트에서 componentDidMount()와 componentDidUpdate()
 라이프 사이클 메소드 두 개를 합친 역할을 함. 

따라서, useEffect 함수의 두 번째 인자에 빈 배열을 넣거나, 
업데이트 하고자 하는 state를 넣어주어 렌더링의 횟수를 제한해주어야 하는데, 위 에러는 해당 state가 빠졌거나, 
잘못 들어갔거나 해서 나오는 에러이다.





### Solution
> dependencies 배열에 추가해주면 된다.

```javascript
useEffect( ()=>{

	... logic

} , [dispatch] )
```

###

----
###

