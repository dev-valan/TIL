# Flutter Font 적용하기

<p align="right">작성일 : 22.09.28</p>

------------------

### Intro.

Flutter 프로젝트에서 font 를 적용해야 할 일이 있어 정리차 작성!


###
### Font 적용 방법

flutter 에서 폰트를 적용하는 방법은 두 가지가 있다.

1. GoggleFonts 라이브러리를 사용해서, 구글에서 제공하는 Font 를 적용하는 방법   


2. flutter project 내부에 font 를 넣고, 적용하는 방법


### 1. GoggleFonts
```dart{8}
/// google font import 하기
import 'package:google_fonts/google_fonts.dart';

...

    Text(
        'String',
        style: GoogleFonts.notoSans(
            fontSize: 14,
            fontWeight: FontWeight.w300),
            ),
    )

...

```
위와 같이 구글 font 라이브러리를 Import 하고, 
TextStyle 대신 GoogleFonts.FONT 로 사용해주면 된다.

주의할 점은 TextStyle 에서 사용되는 모든 속성을 사용할 수 있는건 아니기 때문에
잘 참고하여 사용해야한다.



### 2. flutter project 내부에 font 를 넣고, 적용하는 방법

1) pubspec.yaml 파일에 아래와 같이 font 와 font folder 를 사용할 수 있게 작성해준다.

```dart
  fonts:
  - family: GmarketSansBold
    fonts:
      - asset: assets/fonts/GmarketSansTTFBold.ttf

  - family: GmarketSansLight
    fonts:
      - asset: assets/fonts/GmarketSansTTFLight.ttf

  - family: GmarketSansMedium
    fonts:
      - asset: assets/fonts/GmarketSansTTFMedium.ttf
```

![](https://user-images.githubusercontent.com/107361759/192784664-a599f1df-7db5-4fb0-bacb-907cb4197d7a.png)


2) ttf 파일을 설정한 폴더에 넣고, TextStyle 에서 fontFamily 속성을 설정한 폰트 이름으로 작성하여 사용한다.

```dart

Text(
    'string',
    style: TextStyle(
        fontFamily: 'GmarketSansLight',
        )
    ),
```