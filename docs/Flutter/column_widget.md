# Column 위젯의 mainAxisSize 속성

<p align="right">작성일 : 22.08.30</p>

Flutter Column 위젯의 height 를 설정하는 방법 중 하나인 mainAxisSize 속성을 정리해보자.

--------------

### mainAxisSize

```dart
// 공식문서
mainAxisSize → MainAxisSize
How much space should be occupied in the main axis. [...]
final, inherited
```


Column 위젯의 높이는 mainAxisSize 속성에 의해 결정된다.

만약 mainAxisSize 속성이 mainAxisSize.max 라면, 

Column 의 높이는 제약 조건 내의 모든 높이를 차지한다. (height 100%)

반대로, mainAxisSize.min 이라면, Column 의 높이는 children 위젯들의 총 합이 된다.

###

### Column width

참고로 Column 의 width 의 경우, 자식 widget 의 가장 큰 넓이로 맞춰진다.

###
