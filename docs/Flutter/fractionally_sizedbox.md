# Widget 에 가변값을 주고 싶을 때 : FractionallySizedBox

<p align="right">작성일 : 22.08.29</p>

플러터로 위젯을 그릴때, 주로 Mediaquery 를 사용해서, 디바이스 사이즈를 이용하여 작업했다.

당연히 디바이스 사이즈만을 사용하여 작업하는덴 한계가 있기 때문에,

부모 요소를 기준으로 가변 값을 설정 할 수 있는 FractionallySizedBox 에 대해 정리했다.

--------------

### Example.

```dart
FractionallySizedBox(
        widthFactor: 0.5,
        heightFactor: 0.5,
        alignment: FractionalOffset.center,
        child: WIDGETS()
      ),
```

### 사용법

기본 형태는 위와 같다.

원하는 부모 Widget Tree 아래에 FractionallySizedBox 를 넣고,

widthFactor, heightFactor 를 정해주면, 부모 Widget 의 Size에 맞게 가변 값으로 설정 된다.

공식 문서에는, 부모 요소에 expand 나 Flexible widget 을 사용하는걸 추천한다.

![image](https://user-images.githubusercontent.com/107361759/187228272-4155190e-7888-41b4-a335-35f89abc8cb6.png)


![image](https://user-images.githubusercontent.com/107361759/187228192-ed27259f-5173-4c03-9568-ebbcc2fff7ab.png)


플러터 공식 문서의 코드 박스 크기에 따라서, 파란색 박스의 크기가 가변적으로 변하는걸 볼 수 있다.