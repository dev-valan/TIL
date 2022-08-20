# ESLint "" , '' 설정 끄기

<p align="right">작성일 : 22.08.20</p>

eslint 설정에서 작은 따옴표와 큰 따옴표 둘 다 허용하기

------------------

rules 항목에 quotes 속성을 off 로 설정해주면 된다.

### code

```javascript
   ...
     rules: {
        quotes: ["off", "double"], 

   ... 
```

