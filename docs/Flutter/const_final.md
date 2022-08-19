# Flutter "const" VS "final" keyword

<p align="right">작성일 : 22.08.19</p>

------------------

### Intro.

Flutter 에서 상수를 선언 하는 방법에는 const 와 final 두 가지 keyword 가 있다.

명확하게 알지 못하고 사용 했었는데, 둘의 차이점을 정리해보자.

###
### const Vs final

이전 글에서 왜 상수(const) 를 사용해야하는지, flutter 에서 이점은 무엇인지에 대해 적었다.

이번 글에선, 상수를 선언하는데 사용되는 두 가지 키워드에 대해서 알아봤다.

const 와 final 키워드는 둘 다 상수를 선언할 때 사용되며, 한 번 값이 할당 되면 변경하지 못한다.

두 키워드의 가장 명확한 차이점은, 어느 타이밍에 값이 할당 되는지이다.

```dart
const = 컴파일 시점

final = 런타임 시점
```

컴파일은 프로그래밍 언어가, 로우레벨(low-level) 언어로 번역되는 시점이고,

런타임은 실제로 프로그램이 실행되는 시점이다.

이 정도로만 보면, 둘의 명확한 차이가 잘 보이지 않는다.

가장 많이 사용되는 예제로, 둘의 차이점을 살펴보자

```dart
  final myDate = DateTime.now();

  const myDate2 = DateTime.now();

  print(myDate);
  print(myDate2);
```

dartpad 에서 해당 코드를 실행시켜보면 에러가 뜬다.

![image](https://user-images.githubusercontent.com/107361759/185632747-f64130c6-c12a-4690-9217-06b8530cd63e.png)


const 는 컴파일 시 계산할 수 있는 데이터로 생성되어야 하는데, 

DateTime.now() 는 런타임에 실행되는 시간을 반환하기 때문에 에러가 발생한다.

따라서 둘의 차이점을 명확히 이해하고, 구분해서 사용하자.


### 참고

https://sanjibsinha.com/flutter-final-vs-const/

https://flutteragency.com/difference-between-the-const-and-final-keywords/

