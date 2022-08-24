# Flutter "late"

<p align="right">작성일 : 22.08.24</p>

------------------

### Intro.

Flutter const, final 키워드를 다루면서 late 키워드에 대해서도 궁금해졌다.


###
### Null safety

먼저 사전 지식으로 Null safety 에 관해 알고 있으면 좋다.

null safety 자체도 따로 포스팅 주제로 다룰 만큼 좋은 주제이기 때문에,

TIL 에선 간단하게 정리해보자.

쉽게 말해, null 체크를 런타임이 아닌 빌드 타임시에 미리 체크해서,

개발자들이 좀더 안정적이고 빠르게 생산 하도록 돕는 기능이다.


### Late full 


```dart
late modifier means “enforce this variable’s constraints at runtime 
instead of at compile time”. 
It’s almost like the word “late” describes when it enforces the variable’s guarantees.
```

late 키워드는 변수의 정의를 런타임이 아니라 컴파일 시로 미루는 역할을 한다.
