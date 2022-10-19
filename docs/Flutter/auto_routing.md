# flutter auto routing
<p align="right">작성일 : 22.10.19</p>

Flutter 에서 사용 되는 Auto Route 라이브러리를 살펴보았다.

Flutter 에서 자체적으로 Navigator 나 Router 를 제공한다.

그럼에도 굳이 Auto Route 를 사용하는 건, 

deep link 를 더 쉽게 구현 할 수 있고, strongly-typed arguments passing 등에 이점이 있어서이다.

------------------

### 1. 사용법

- Installation
```dart
/// pubspec.yaml 에 아래 라이브러리 추가
dependencies:              
  auto_route: [latest-version]              
              
dev_dependencies:              
  auto_route_generator: [latest-version]              
  build_runner:            
```


- Setting

```dart
@MaterialAutoRouter(              
  replaceInRouteName: 'Page,Route',              
  routes: <AutoRoute>[              
    AutoRoute(page: BookListPage, initial: true),              
    AutoRoute(page: BookDetailsPage),              
  ],              
)              
class $AppRouter {}     
```

- main.dart 에 Auto route 연결하기
```dart
// assuing this is the root widget of your App           
class App extends StatelessWidget {      
  // make sure you don't initiate your router          
  // inside of the build function.          
  final _appRouter = AppRouter();      
      
  @override      
  Widget build(BuildContext context){      
    return MaterialApp.router(      
      routerDelegate: _appRouter.delegate(),      
      routeInformationParser: _appRouter.defaultRouteParser(),      
    );      
  }      
}       
```


- Router 선언
```dart
@MaterialAutoRouter(
  replaceInRouteName: 'Page,Route',
  routes: <AutoRoute>[
    AutoRoute(page: HomeScreen, initial: true, name: 'HomeScreen'),
    AutoRoute(page: GestureDetectorTest, name: 'GestureDetectorTest'),

  ],
)
class $AppRouter {}            
```



- Generate Auto route
```dart
flutter packages pub run build_runner build               
```


- Widget 에서 사용하기
```dart

    ...
    
    GestureDetector(
      child: Text('제스쳐 디텍터'),
      onTap: (){
        AutoRouter.of(context).push(const GestureDetectorTest());
      },
    )
    
    ... 
```