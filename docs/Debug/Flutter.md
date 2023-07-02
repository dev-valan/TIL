
## Error: CocoaPods's specs repository is too out-of-date to satisfy dependencies.

<p align="right">작성일 : 23.07.02</p>

### Error

> Flutter version update 후 iOS build 시 발생.


### Solution

- /ios/podFile.lock 파일을 삭제
- pod install --repo-update
- flutter clean
- flutter pub get
- 재실행

<br>

-------------


## Custom font is not working in iOS.

<p align="right">작성일 : 22.10.28</p>

### Error

> Text Widget 에 Font Family 를 적용하던 중, 
> iOS 에서 Text Widget 이 제대로 나타나지 않는 현상 발생

### Solution

- 처음 적용한 방식은 ```.ttf``` 형태의 파일이 아닌, ```.otf``` 형태의 파일을 적용 해 보았으나, 해결되지 않았다.
- 문제가 발생한 Font 는 ```Gotham``` 이라는 유료 폰트였는데, Flutter 자체의 문제로 보인다.
```Gotham``` 폰트가 iOS 에서 문제가 된다고 issue 가 올라왔다.
- https://github.com/flutter/flutter/issues/83616

- 애석하게도, 다른 Font 로 교체하는 것으로 해결했다.


-------------



## Bottom overflowed by xxx pixels

<p align="right">작성일 : 22.09.14</p>

### Error

Bottom overflowed by xxx pixels   

![image](https://user-images.githubusercontent.com/107361759/190152930-3c732c6d-ee8c-4306-b036-d4c6aab0f447.png)

TextField Widget 이 있는 경우, 하드웨어 키보드가 올라 올 때마다 위 에러가 뜬다.


### Solution
```dart
    ...

  child: Scaffold(
     resizeToAvoidBottomInset : false,

    ...
```
1. Scaffold 및에 resizeToAvoidBottomInset 속성을 false로 준다.
2. Scaffold body 의 하위 위젯을 SingleChildScrollView 등의 Scrollable 위젯으로 감싼다.



resizeToAvoidBottomInset 속성

::: tip

if true the body and the scaffold's floating widgets should size themselves to avoid the onscreen keyboard whose height is defined by the ambient MediaQuery's MediaQueryData.viewInsets bottom property.
For example, if there is an onscreen keyboard displayed above the scaffold, the body can be resized to avoid overlapping the keyboard, which prevents widgets inside the body from being obscured by the keyboard.
Defaults to true.

:::

요약하자면, scaffold 의 body 와 floating 위젯들이 하드웨어 키보드에 가려지는 것을 막기 위해
크기를 자동으로 조정하는 것을 설정하는 속성이다.  
기본값이 true 라 해당 문제가 발생함.  
false 로 변경해주자.


-------------


## The "inspector" screen is not available for this application.

<p align="right">작성일 : 22.09.13</p>

### Error
![image](https://user-images.githubusercontent.com/107361759/189817827-a7fead98-2964-4d58-8b8b-12164b235063.png)
어느 순간 부터, inspector 가 제대로 실행되지 않음.

### Solution
https://stackoverflow.com/questions/51181774/flutter-widget-inspector-not-displaying   
참고하여 수정함.
```
1. Android Studio > Preferences > Languages & Frameworks > Flutter > App Execution > Open Flutter Inspector view on launch

2. Close and Relaunch Android Studio > Open any Flutter Project > Open iOS Simulator or Android Emulator and Run Debug Mode

3. View > Tool Window > Flutter Inspector

PS: In order for something to show up in the Flutter Inspector, your app has to be running on a Device or on a Simulator or Emulator.
```


<p></p>

--------


## Automatically assigning platform 'iOS' with version '13.0' on target 'Runner' because no platform was specified

<p align="right">작성일 : 22.08.12</p>

### Error


```Dart
[!] Automatically assigning platform `iOS` with version 
`13.0` on target `Runner` because no platform was specified. 
Please specify a platform for this target in your Podfile. 
See `https://guides.cocoapods.org/syntax/podfile.html#platform`.
```

다른 브런치를 Check out 하고 나서, 발생한 에러.


### Cause

::: tip
플랫폼이 지정되지 않았기 때문에 대상 
`Runner`에 버전 `13.0`이 있는 `iOS` 플랫폼을 자동으로 할당합니다. 
Podfile에서 이 대상에 대한 플랫폼을 지정하십시오. 'https://guides.cocoapods.org/syntax/podfile.html#platform'을 참조하세요.
:::


### Solution
> Stack overflow 등에서 찾아보면, pod file 을 수정해줘야 하는 solution이 많았음.
> 
> 내 케이스에선, 간단하게 pod update 를 진행해주니 해결되었다.

```dart
cd ios
pod update
```

###

----
###



## CocoaPods is installed but broken.

<p align="right">작성일 : 22.08.02</p>

### Error


```Dart

Warning: CocoaPods is installed but broken. Skipping pod install.
  You appear to have CocoaPods installed but it is not working.
  This can happen if the version of Ruby that CocoaPods was installed with is different from the one being used to invoke it.
  This can usually be fixed by re-installing CocoaPods. For more info, see https://github.com/flutter/flutter/issues/14293.
To re-install:

```

컴퓨터 재시작 후, 정상 작동 되던 Build 가 갑자기 안 됨.

### Cause

::: tip
CocoaPod 가 모종의 이유로 손상되었을 때 발생
:::


### Solution
> 간단하게 Android Studio 의 Cache 를 삭제하고 재시작하면 된다.

```dart
- Anroid Studio Menu -> File -> Invalidate Caches -> 재시작
```
![image](https://user-images.githubusercontent.com/107361759/182368201-7b15c2cd-7858-4070-a528-156e5b611b5b.png)

###

----
###



## Could not find the correct Provider above this Widget

<p align="right">작성일 : 22.07.25</p>

### Error


```Dart{15}

class _SuccessDialogLayout extends StatelessWidget{
  const _SuccessDialogLayout({Key? key}) : super(key : key);

  @override
  Widget build(BuildContext context) {

     return GestureDetector(
          onTap: () => Navigator.pop(context),
          child:
              //...(중략)...
              
              GestureDetector(
                onTap: () {
                  context.read<BLOC>().add(BLOC'S EVENT);
              
              //...(중략)...

```

```Dart
Error: Could not find the correct Provider<BLOC> above this Widget

This happens because you used a `BuildContext` that does not include the provider
of your choice. There are a few common scenarios:
```

ShowDialog 로 생성한 다이얼로그에서, Bloc Event 를 호출할 때 발생했다.

### Cause

::: tip
다이얼로그 위젯의 상위 위젯에 사용하고자 하는 Bloc 이 Provider 에 명시되지 않아서 발생
:::

![image](https://user-images.githubusercontent.com/107361759/180795517-0f979b8f-ae18-43fa-8ac8-b31e6361ca59.png)

HomeScreen 이라는 위젯 안에 Provider 들이 명시 되어 있어서,
Dialog 안에서는 해당 Bloc을 사용할 수 없어서 발생한 에러이다.


### Solution
> 가장 좋은 방법은, Provider를 HomeScreen 이 아닌, 더 상단의 위젯에 선언하는 것이다.
>
> But, 여건 상 임시로 Dialog 위젯 안에 BlocBuilder 를 통해 Bloc과 State를 명시해주는걸로 해결.

```dart{7-8}
class _SuccessDialogLayout extends StatelessWidget{
  const _SuccessDialogLayout({Key? key}) : super(key : key);

  @override
  Widget build(BuildContext context) {

    return BlocBuilder<ExternalItemBloc, ExternalItemState>(
        builder: (context, state) {
        
         return GestureDetector(
              onTap: () => Navigator.pop(context),
              child:
                  //...(중략)...
                  
                  GestureDetector(
                    onTap: () {
                      context.read<BLOC>().add(BLOC'S EVENT);
                  
                  //...(중략)...
```

###

----
###


## Widget child 속성에서 if / else 사용!?

<p align="right">작성일 : 22.07.21</p>

### Error

```Dart{7}
@override
Widget build(BuildContext context) {
    
    return GestureDetector(
        ...
        child:
            if (true){
                return Container();
            }else{
                return SizedBox();
            }
    )
}
```

```Dart
The argument type 'dynamic' can't be 
assigned to the parameter type 'Widget?'.
```

Widget 의 child 속성 안에서 if 문으로 분기하려고 할 때 에러 발생.
간단한 부분이지만, 자꾸 까먹고 시간 잡아먹어서 기억하기 위해 남김.

### Cause

::: tip
if ... else 문은 Widget의 child 속성 안에 직접 배치할 수 없음.
:::

### Solution
> : 삼항연산자를 사용
>
> : 다른 함수로 선언해서 사용
> 
> : LayoutBuilder 사용
> 
> : Children 속성에 사용
> 
> => 주로 삼항연산자를 사용해서 해결하는게 간편하다.

```dart
@override
Widget build(BuildContext context) {
    
    return GestureDetector(
        ...
        child:
            true ? Container() : SizedBox();
    )
}
```

###
----
###



## addPostFrameCallback

<p align="right">작성일 : 22.07.15</p>

### Error

```Dart
@override
Widget build(BuildContext context) {
    
    return BlocBuilder<Bloc, State> {
    
        switch (state.status) {
            case A :
                return Loading();
            
            case B :
                ScaffoldMessenger.of(context)
                    ..hideCurrentSnackBar()
                    ..showSnackBar("test");
                break;
        }
    }
}
```

```Dart
This ScaffoldMessenger widget cannot be marked as needing to build 
because the framework is already in the process of building widgets. 
A widget can be marked as needing to be built during the build phase only 
if one of its ancestors is currently building. 
This exception is allowed because the framework builds parent widgets 
before children, which means a dirty descendant will always be built. 
Otherwise, the framework might not visit this widget during this build phase.
```

BlocBuilder 에서 Bloc State 가 변경되면,

ScaffoldMessenger 를 사용하여 토스트 창을 띄워주려는 상황에서 에러 발생.


### Cause

::: tip
Build 가 끝난기 전에, setState 혹은 markNeedsBuild 가 호출되어 발생하는 에러이다.
:::

### Solution
> build 가 다 끝난 시점에서 callback 함수를 호출하여 해결
> 
> widgetsBinding.instance.addPostFrameCallback 을 사용

```dart
    case B :
        WidgetsBinding.instance.addPostFrameCallback((_) {
            ScaffoldMessenger.of(context)
                ..hideCurrentSnackBar()
                ..showSnackBar("test");
            });
        break;
```

###


----

###



## Dart null safety

<p align="right">작성일 : 22.07.14</p>

### Error

```Dart{21}
class ClassName extends State<View> {
  @override
  Widget build(BuildContext context) {
  
    return BlocBuilder<Bloc, State>(
    
      builder: (context, state) { // Error 발생
      
        switch (state.status) {
          case Status.initial:
            return const Center(
              child: CircularProgressIndicator(),
            );
          case Status.success:
            return CustomScrollView(
              slivers: _buildSlivers(context, items),
              physics: const BouncingScrollPhysics(),
            );
        }
        
        // *** this ***
        
      },
    );
  }
```

```Dart
The body might complete normally, causing 'null' to be returned, but the return type, 'Widget', is a potentially non-nullable type. 
(Documentation) Try adding either a return or a throw statement at the end.
```

### Cause

::: tip
Dart 에서는 반환문이 존재하지 않으면, null 을 반환하는 것과 동일하게 동작한다.
위 코드에서 switch 문을 다 pass 해버리면, 반환문이 존재하지 않아 에러가 발생한다.
:::

### Solution
> function 에서 null 이 반환되지 않도록 해주면 쉽게 해결된다.
> 빈 widget 을 return 해주는 것으로 처리 완료.

###