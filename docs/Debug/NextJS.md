## TS2339: Property 'xx' does not exist on type 'JSX.IntrinsicElements'.
<p align="right">작성일 : 22.09.05</p>

### Error


```javascript

TS2339: Property 'xx' does not exist on type 'JSX.IntrinsicElements'.

```

Styled Component 를 TS 를 사용해 작성하던 중 발생한 에러

### Cause

::: tip

TS 에서 컴포넌트 첫 시작 문자를 소문자로 시작했기 때문에 발생.


:::



### Solution
> 컴포넌트를 작성할때, 첫 문자를 대문자로 작성해준다.

```typescript
const headerStyle = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
`;

//에서 headerStyle -> HeaderStyle 로 변경하면 에러가 사라짐.
```


###

----
###




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

