# Destructuring assignment (구조 분해 할당)

<p align="right">작성일 : 22.08.11</p>

react로 웹 개발 하면서 자주 사용했던 문법이다.

"구조 분해 할당" 이라는 용어가 어색해서, 까먹지 않기 위해 정리 !

------------------

### 정의

:::tip
구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여,
그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식입니다.

(mdn web docs)
:::

### 기본 형태

```javascript
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20


// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

// mdn web docs
```



### default value

```javascript
var a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7
```

분해한 값이 undefined 일때 사용 될, 기본 값을 설정할 수 있다.




### 특정 반환 값 무시하기

```javascript
function f() {
  return [1, 2, 3];
}

var [a, , b] = f();
console.log(a); // 1
console.log(b); // 3
```