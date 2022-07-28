# Lazy Loading 적용하기

<p align="right">작성일 : 22.07.19</p>

회사 프로젝트에서 크롤링 해 온 이미지들을 Loading 할 때, 너무 느리다는 평이 있었다.

해당 부분을 살펴보니, 100개의 이미지 파일을 한번에 요청해서 받아오고 있더라 ..

(빠르게 초기 MVP를 만들어야 하다보니 생겨난 X덩어리로 생각하자.😅)

해당 부분을 최적화 하는 방법으로는 다양하게 존재 하겠지만,

바쁘니까 빠르게 적용할 수 있는 Lazy Loading 을 적용해보기로 했다.

###

--------------

### 📕 Lazy Loading 이란?


::: tip
- 페이지를 불러오는 시점에 당장 필요하지 않은 리소스들을 추후에 로딩하게 하는 기술

- 한번에 파일이나 데이터를 다 받아오는게 아니라, 유저가 필요한 시점 (컴포넌트가 Load 될 때) 다운로드 하는 방법
- 사용 라이브러리 :
  <a href="https://github.com/Aljullu/react-lazy-load-image-component">
  react-lazy-load-image-component
  </a>
:::

###


<p align="center">
<img src="https://user-images.githubusercontent.com/107361759/179777717-a1858535-d890-48c2-a206-03fc866bd4fb.png" alt="적용 전">
<b>< 적용 전 ></b>
</p>

###

<p align="center">
<img src="https://user-images.githubusercontent.com/107361759/179778042-5bf73b40-2d27-431f-b468-a120abc13dd9.png" alt="적용 후">
<b>< 적용 후 ></b>
</p>

###

> #### 수치적으로, 초기 리소스 다운로드 속도가 적용 전에 비해 10배 정도 빨라졌다.
> 
> #### 적용 전 : 약 7.29s
> 
> #### 적용 후 : 약 0.6s
