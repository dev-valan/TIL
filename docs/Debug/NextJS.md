## next.js with typeScript module not found
<p align="right">작성일 : 22.09.03</p>

### Error


```javascript

next.js with typeScript module not found

```

Next 프로젝트를 위한 기본 셋팅 (+typeScript) 후, next 를 제대로 import 하지 못하던 문제

### Cause

::: tip

node_modules로 설치한 다른 라이브러리 모듈을 찾지 못함.

:::



### Solution
> tsconfig.js 에 "moduleResolution" : "node" 를 추가해준다.

```javascript
{
  "compilerOptions": {
    "outDir": "./dist",
    "noImplicitAny": true,
    "module": "ES6",
    "target": "ES5",
//+ "moduleResolution": "node",
    "allowJs": true,
    "sourceMap": true,
  }
}
```

참고 : https://chiabi.github.io/2018/08/30/typescript/

###

----
###

