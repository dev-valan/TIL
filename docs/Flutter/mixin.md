# Flutter Slide Transition

<p align="right">작성일 : 22.10.29</p>

Dart 에서 사용하는 Mixin 이란 문법에 대해서 알아보자.

--------------

### 공식 문서

> 믹스인은 여러 클래스 계층에서 코드를 재사용하는 방법입니다.   
> -Mixins are a way of reusing code in multiple class hierarchies. 
```dart
mixin Piloted {
  int astronauts = 1;

  void describeCrew() {
    print('Number of astronauts: $astronauts');
  }
}
```
- class 에 ```mixin``` 을 추가하려면, ```with``` keyword 를 통해 추가한다.
```dart
class PilotedCraft extends Spacecraft with Piloted {
  // ···
}
```


### 정리

- 다중 상속을 지원하지 않는 dart 에서, 클래스를 상속하지 않고도 
상속 한 것 처럼 메소드를 사용할 수 있게 하는 클래스이다.

```dart
class Animal{
	void move(){
    	print('move Postion');
    }
}

class Fish extends Animal{
  @override
  void move(){
    super.move();
    print('by Swim');
  }
}

class Bird extends Animal{
  @override
  void move(){
    super.move();
    print('by Flying');
  }
}
```
- 만약 상속을 통해 위와 같이 코드를 구성했는데 오리의 경우 육해공 모두 되어서 다중상속을 통해서 코드를 표현할 수 없다.    
따라서 이럴 때 mixin을 통해 편리하게 다중상속과 같은 효과를 지원하고 있다.

```dart
class Animal{
	void move(){
    	print('move Postion');
    }
}

mixin canSwim{
	void swim(){
    	print('move Postion by Swim');
    }
}

mixin canFly{
	void fly(){
    	print('move Postion by Fly');
    }
}

mixin canRun{
	void run(){
    	print('move Postion by Run');
    }
}


class Duck extends Animal with canFly, canRun, canSwim{
	@override
    void move(){
    	swim();
      fly();
      run();
    }
}

void main(){
  Duck().move();
}
```
- Mixin은 위와 같이 앞에 mixin을 붙여준다. with 키워드를 사용 하여 class 에 추가해준다.


출처 -  
https://hoony-gunputer.tistory.com/entry/Dart-Mixins  
https://medium.com/flutter-community/dart-what-are-mixins-3a72344011f3  
https://fomaios.tistory.com/entry/Dart-Mixin%EC%9D%B4%EB%9E%80-featwith  