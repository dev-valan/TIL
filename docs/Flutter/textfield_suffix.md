# Flutter TextField Suffix Icon

<p align="right">작성일 : 22.09.15</p>

------------------

### Intro.

![image](https://user-images.githubusercontent.com/107361759/190428663-86cfcfd5-6fa3-4ba8-b546-583cc520e12f.png)

위와 같은 ui를 요청 받았다.   
처음에는 TextFormField 와 Button 위젯을 Row 나 Stack 으로 감싸서 처리하려고 했다.   
플러터의 박스 제약조건 때문에 생각했던대로 잘 풀리진 않았다.

###

### TextFormField SuffixIcon

![image](https://user-images.githubusercontent.com/107361759/190431076-89400f36-d324-4239-9ac7-dddc35c8affa.png)

위 이미지의 별표처럼, TextField 의 오른쪽 끝 자리를 suffix 속성으로 변경할 수 있다.   
TextFormField 위젯의 속성에는 suffix 와 suffixIcon 이 존재한다.   
처음에는 suffix 속성으로 구현해보려 했으나, 기본으로 들어가있는 padding 이나
focus 시에만 나타나는 현상 때문에 쉽지 않았다.
그러다 suffixIcon 속성을 보았는데, type이 Icon 이 아니라 Widget 이었다.
So, suffixIcon 을 통해 구현하였다.

```dart
TextFormField(
    ...
    decoration: InputDecoration(
            enabledBorder: const OutlineInputBorder(
                borderSide: BorderSide(
                color: Color(0xffd9d8d8),
                width: 1.5,
            ),
            borderRadius: BorderRadius.all(Radius.circular(50)),
            ),
            hintText: "hintText",
            suffixIcon: TextButton(
                onPressed: onSubmitButton,
                style: ButtonStyle(
                padding: MaterialStateProperty.all<EdgeInsets>(
                const EdgeInsets.symmetric(horizontal: 20)
            ),
            shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(50),
            ),
            ),
            backgroundColor: MaterialStateProperty.all(appGlobalActiveColor),
            ),
            child: Text("buttonTitle",),
    );
  );
}),
```

