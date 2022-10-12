# Flutter Slide Transition

<p align="right">작성일 : 22.10.12</p>

회사 프로젝트 진행 중, 버튼 클릭 시 위젯을 좌, 우로 슬라이드 시키는 애니메이션을 구현해야 했다.

애니메이션을 구현하는 방법에는 다양한 방법이 존재한다. (AnimatedWidget, AnimatedPositioned 등)

그 중에서도, 내가 구현하고자 하는 기능은 SlideTransition 이라는 위젯으로 쉽게 구현이 가능했다.

--------------

### 공식 문서

> 위젯의 일반 위치를 기준으로 위젯의 위치를 애니메이션합니다.   
> 변환은 자식 크기에 맞게 조정된 오프셋으로 표현됩니다.   
> 예를 들어, dx가 0.25인 오프셋은 어린이 너비의 1/4을 수평으로 변환합니다.   
> 기본적으로 오프셋은 캔버스의 좌표계에 적용됩니다(그래서 양의 x 오프셋은 하위 항목을 오른쪽으로 이동).   
> textDirection이 제공된 경우 오프셋이 읽기 방향으로 적용되므로 오른쪽에서 왼쪽으로 양의 x 오프셋이 이동하고 왼쪽에서 오른쪽으로 양의 x 오프셋이 이동합니다.



### 사용법

```dart
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  static const String _title = 'Flutter Code Sample';

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: _title,
      home: Scaffold(
        appBar: AppBar(title: const Text(_title)),
        body: const Center(
          child: MyStatefulWidget(),
        ),
      ),
    );
  }
}

class MyStatefulWidget extends StatefulWidget {
  const MyStatefulWidget({super.key});

  @override
  State<MyStatefulWidget> createState() => _MyStatefulWidgetState();
}

class _MyStatefulWidgetState extends State<MyStatefulWidget>
    with SingleTickerProviderStateMixin {
  late final AnimationController _controller = AnimationController(
    duration: const Duration(seconds: 2),
    vsync: this,
  )..repeat(reverse: true);
  late final Animation<Offset> _offsetAnimation = Tween<Offset>(
    begin: Offset.zero,
    end: const Offset(1.5, 0.0),
  ).animate(CurvedAnimation(
    parent: _controller,
    curve: Curves.elasticIn,
  ));

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SlideTransition(
      position: _offsetAnimation,
      child: const Padding(
        padding: EdgeInsets.all(8.0),
        child: FlutterLogo(size: 150.0),
      ),
    );
  }
}

```

- 위 코드는 공식 문서 예제 코드이다.
(https://api.flutter.dev/flutter/widgets/SlideTransition-class.html)

- 예제 코드에는 curvedAnimation 이 적용되어 있는데, 심플한 애니메이션을 원한다면 CurvedAnimation 속성을 삭제하면 된다.

```dart
  late final Animation<Offset> _offsetAnimation = Tween<Offset>(
    begin: Offset.zero,
    end: const Offset(-1.5, 0.0),
  ).animate(_controller,);
```


- 애니메이션 작동을 자동이 아닌, Button Click 으로 컨트롤을 하고 싶다면, 아래의 코드 처럼 Animation Status 에 따라 controller 를 사용하면 된다.

```dart
ElevatedButton(
    onPressed: (){
      switch (_controller.status){
        case AnimationStatus.completed:
          _controller.reverse();
          break;
        case AnimationStatus.dismissed:
          _controller.forward();
          break;
        case AnimationStatus.forward:
        case AnimationStatus.reverse:
          break;
      }
    },
    child: Text('토글 버튼')
)
```