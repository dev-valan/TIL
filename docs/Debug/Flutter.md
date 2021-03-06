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