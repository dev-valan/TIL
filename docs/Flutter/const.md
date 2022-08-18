# Flutter "const"

<p align="right">작성일 : 22.08.18</p>

------------------

### Intro.

Flutter 를 작업하다 보면, Widget 이나 속성 값 앞에 const 키워드를 넣으라는 경고를 자주 볼 것이다.

![image](https://user-images.githubusercontent.com/107361759/185408806-c73e1d34-4487-4206-a9e6-9f278b0833c0.png)


###
### const 사용시 이점?

setState( ) 를 사용하면, widget tree 안에 있는 요소들이 rebuild 된다.

갱신이 필요하지 않는 위젯 까지 rebuild 하기 때문에, 

static 한 widget 은 굳이 rebuild 해 줄 필요가 없다.

이럴 경우, const 를 사용하여, 필요한 부분만 rebuild 할 수 있다.


### 예제

```dart
Foo(
  child: const Bar(
    child: Baz() 
  ),
)
```

위의 코드에서는, build 메서드가 실행 될 때, 'Foo' 위젯 까지만 rebuild 된다.

Bar 위젯은 const 이기 때문에, rebuild 되지 않는다.



###
