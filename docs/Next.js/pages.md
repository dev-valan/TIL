# Nest.js Router

<p align="right">작성일 : 22.08.09</p>

개인 참고용으로 Next.js의 라우터 사용법을 Docs 참고하여 정리한 글.

------------------

### 기본

Next.js 에선 'pages' 폴더에 명시되어 있는 파일 명을 통해 router 를 생성한다.
파일 내부엔, react component 를 반환해야 한다.
```
ex ) pages -- index.tsx
           -- about.tsx
```
```
//about.tsx

function About() {
  return <div>About</div>
}

export default About
```

/about 페이지를 생성.


### Dynamic Route

Next.js 에서 다이나믹 라우터는 파일명에 '[ ]' 을 통해 생성한다.

```
ex) pages/posts/[id].tsx
```
-> /posts/3 , /posts/4 등으로 사용이 가능하다.



### Nested Route

Nested route 를 생성하려면, 폴더를 생성하면 된다.

```
ex) pages/folderName/1.tsx
    pages/folderName/3.tsx

-> /folderName/1
-> /folderName/3
```


### Routing

Next.js 에서 페이지 이동하는 방법에는 크게 두 가지가 있다.
<Link> 태그를 사용하는 것과, router object 를 사용하는 방법

```
<Link href="/about">
          <a>ABOUT</a>
</Link>

or

<button type="button" onClick={() => router.push('/about')}>
      Click me
</button>
```