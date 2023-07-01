# PageView Widget - 한 화면에서 여러 페이지를 보여주는 방법
<p align="right">작성일 : 23.07.01</p>

PageView 위젯을 사용하여 한 화면에서 여러 페이지를 보여줄 수 있다.
<br>
<br>
------------------
<br>
<br>

### 공식 문서
> 페이지별로 작동하는 스크롤 가능한 목록입니다.
>
> 페이지 뷰의 각 자식은 뷰포트와 같은 크기여야 합니다.
> 
> PageController를 사용하여 보기에 표시되는 페이지를 제어할 수 있습니다. PageView 내부 콘텐츠의 픽셀 오프셋을 제어할 수 있는 것 외에도 PageController를 사용하면 뷰포트 크기의 증분인 페이지 측면에서 오프셋을 제어할 수 있습니다.
> 
> PageController는 PageView가 처음 구성될 때 표시되는 페이지를 결정하는 PageController.initialPage와 > 페이지 크기를 뷰포트 크기의 일부로 결정하는 PageController.viewportFraction을 제어하는 데에도 사용할 수 있습니다. 

<br>



### 공식 문서 예제 코드

```
/// Flutter code sample for [PageView].

void main() => runApp(const PageViewExampleApp());

class PageViewExampleApp extends StatelessWidget {
  const PageViewExampleApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('PageView Sample')),
        body: const PageViewExample(),
      ),
    );
  }
}

class PageViewExample extends StatelessWidget {
  const PageViewExample({super.key});

  @override
  Widget build(BuildContext context) {
    final PageController controller = PageController();
    return PageView(
      /// [PageView.scrollDirection] defaults to [Axis.horizontal].
      /// Use [Axis.vertical] to scroll vertically.
      controller: controller,
      children: const <Widget>[
        Center(
          child: Text('First Page'),
        ),
        Center(
          child: Text('Second Page'),
        ),
        Center(
          child: Text('Third Page'),
        ),
      ],
    );
  }
}

```

<br>

### 추가 사용법

- PageController 를 사용하면, Controller 를 사용한 페이지 이동, initPage 등의 설정이 가능하다.

- PageView 의 스크롤 방향은 수평 뿐만 아니라 수직으로도 가능하다.

- Tabbar 와 같이 사용하면, 자연스러운 화면 표현이 가능하다.

- 페이지가 변경되더라도, 이전의 스크롤 위치를 그대로 유지하고 싶으면 , AutomaticKeepAlive Mixin 을 사용하여, wantKeppAlive property 를 true 로 변경해준다. 