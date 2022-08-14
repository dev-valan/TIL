# Flutter 초기 세팅

<p align="right">작성일 : 22.08.14</p>

최근 Flutter 를 개발하기 위한 환경 셋팅을 다시 해줘야 했다.

다시 그 상황이 오면 ... 귀찮지 않게 개인 참고용으로 정리 한다!

###

--------------

### 1. 안드로이드 스튜디오를 설치한다.



### 2. 최신 버전의 flutter SDK 를 다운받고, c:\ 에 압축을 푼다.

- https://docs.flutter.dev/get-started/install/windows
![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ef440b56-c6a2-49c0-aeb4-89cd5a7a4570/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220814T134050Z&X-Amz-Expires=86400&X-Amz-Signature=75613176345412806e5c44fde414343ac177e58c179cc6b3da1e6ed07ecc578b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)




### 3. 안드로이드 스튜디오에서 plugin - flutter/dart 를 설치한다.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bcb8780f-8fed-472f-9d69-e134c40e04f9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220814T134233Z&X-Amz-Expires=86400&X-Amz-Signature=511dba668d5e93b7afd7176511898cb59d1df25c08fb057bcc6dfee3ec5b96d1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)



### 4. SDK 매니저에서 - SDK Tools  tab - Android SDK Command-line Tools 를 설치한다.


![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1afb872a-aacc-44b0-8da3-8b506b6c5b28/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220814T134318Z&X-Amz-Expires=86400&X-Amz-Signature=5463118fc3952dbee77dc038f9f75c45de150248e21b3407103791f13f5a7d6e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)




### 5-1. [윈도우] 시스템 환경 변수 편집 - Path 편집 - 압출 풀어준 Flutter 의 bin 폴더 path 를 신규로 추가


![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/130e2be7-54a6-4bc6-bed2-c5ce6bb06bab/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220814T134406Z&X-Amz-Expires=86400&X-Amz-Signature=6790710ae65e72d6524cbc022917d2894988051f277bbb2a09fb35df2e9fa0b8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)




### 5-2. [맥] 환경 변수 편집

- https://www.youtube.com/watch?v=usE9IKaogDU&list=PLfLgtT94nNq1izG4R2WDN517iPX4WXH3C          
- 5분 대  참고.



### 6. 터미널 열어서 flutter doctor 입력

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d9faa0c4-7805-4faf-a611-5588040fd49a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220814T134514Z&X-Amz-Expires=86400&X-Amz-Signature=c14edc5ad3bff69f234d0923ffdf4ac63465ea6dbb8c9e8ba4b4e5b1cc164fb0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)




### 7. 안드로이드 스튜디오에서 신규 flutter 프로젝트 파서 작업 시작하면 됨.
