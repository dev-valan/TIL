## Dart null safety

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

