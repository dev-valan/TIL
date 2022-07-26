# Container 안의 Container Size를 적용하기

<p align="right">작성일 : 22.07.26</p>

Container 안에 Container 가 들어있는 구조의 UI 를 작성하게 되었다.

안에 있는 Container 의 크기를 따로 지정 해줘도,

감싸고 있는 Container 의 크기로 동일하게 적용되었다.


###

--------------

### 📕해결


::: tip

Container 내부의 Container 크기를 조정하기 위해선,

Container 속성 중 하나인 alignment 를 설정해줘야 한다.

따로 alignment 속성을 설정해주지 않으면, 부모 컨테이너의 크기로 확장한다.

:::


```dart

수정 전 코드 작성

```
수정 전 화면 이미지



```dart

수정 후 코드 작성

```
수정 후 화면 이미지