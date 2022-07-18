# location.replace VS location.href

<p align="right">작성일 : 22.07.18</p>

#### JavaScript로 페이지 이동시에 자주 사용되는 방식이 두 가지 있다.
::: tip
- location.href
- location.replace
:::
#### 두 방식의 차이점은 아래와 같다.
####

|           |     location.href      |   location.replace( )   |
|:---------:|:----------------------:|:-----------------------:|
|    형태     |       attribute        |        function         |
|    기능     |         페이지 이동         |         페이지 교체          |
|  history  |     history 객체에 남음     |    history 객체에 남지 않음    |
|   사용방법    | `location.href = URL`  | `location.replace(URL)` |


#### 보안상의 이유 등으로 뒤로가기 시에, 해당 페이지로 이동이 안되게끔 구현하고 싶으면,
#### `location.replace`를 사용하고, 단순 페이지 이동이면 `location.href`를 사용하면 될 것 같다.

#### 요즘은 대부분 router 관련 라이브러리들을 사용해서 개발하다보니, 잊고 있던 부분이었다.
#### 간만에 정리해서 안 까먹도록 하자.