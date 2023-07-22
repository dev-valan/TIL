# RichText 에서 Global Font가 적용되지 않는 문제
<p align="right">작성일 : 23.07.22</p>

RichText Widget 에서 Global 로 명시해둔 Font가 적용되지 않은 문제가 발생했다.
<br>
<br>
------------------
<br>
<br>

### GitHub Flutter Repo - Issues
https://github.com/flutter/flutter/issues/28931
> ThemeData widget 을 사용하여 font 설정을 해줬는데, ThemeData widget 은 Material 라이브러리에 속한다.
> 
> 동일한 Material 라이브러리에 속해 있는 위젯들만 지원을 하기 때문에, flutter widgets library 에 속해있는 RichText 에서는 ThemeData 가 적용되지 않는다.

<br>



### 해결
```
RichText 가 아닌 Text.rich() 위젯을 사용하여 구현한다.
```

 