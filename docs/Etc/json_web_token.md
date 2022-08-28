# Json Web Token

<p align="right">작성일 : 22.08.28</p>

Next.js 로 프로젝트 진행 중, JWT 와 관련된 내용이 나왔다.

과거 공부했던 내용들과 새로 추가한 내용들을 정리 차원에서 업로드! 😎

------------------

### 정의
:::tip 
JWT는 서버와 클라이언트 간 정보를 주고 받을 때 Http 리퀘스트 헤더에 JSON 토큰을 넣은 후 서버는 별도의 인증 과정없이 헤더에 포함되어 있는 JWT 정보를 통해 인증하는 방식
:::

![image](https://user-images.githubusercontent.com/107361759/187075025-0ffb8972-a0bc-4e4d-a381-91176e6f354f.png)

1. 헤더: 알고리즘(3번 서명 값을 만드는데 사용될 알고리즘이 지정 ex) HS256), type이 들어감 (언제나 JWT)

2. 페이로드: 토큰이 갖는 데이터

3. 서명 (signature): 1번 헤더에 정의된 알고리즘을 통해 암호화한 비밀 값으로 서버만 알고 있음


<details>
<summary>헤더 (Header)</summary>

:::tip
- Header 는 두가지의 정보를 지니고 있습니다.

- typ: 토큰의 타입을 지정합니다. 바로 JWT를 말하는 것입니다.

- alg: Signature 해싱 알고리즘을 지정합니다. 해싱 알고리즘으로는 보통 HMAC-SHA256 혹은 RSA 가 사용되며, 이 알고리즘은 토큰을 검증 할 때 사용되는 signature 부분에서 사용됩니다.
:::

```javascript
  {
  "typ": "JWT",
  "alg": "HS256"
  }
```
</details>

<p></p>

<details>
<summary>페이로드 (Payload)</summary>

:::tip
- Payload 부분에는 토큰에 담을 정보가 들어있습니다. 여기에 담는 정보의 한 ‘조각’ 을 클레임(Claim) 이라고 부르고, 이는 Json(Key/Value) 형태의 한 쌍으로 이뤄져있습니다. 토큰에는 여러개의 클레임들을 넣을 수 있습니다.
- 클레임 의 종류는 다음과 같이 크게 세 분류로 나뉘어져있습니다:
- 등록된 (registered) 클레임
- 공개 (public) 클레임
- 비공개 (private) 클레임
:::

```javascript
{
    "iss": "dnjscksdn98.com",
        "exp": "1485270000000",
        "https://dnjscksdn98.com/jwt_claims/is_admin": true,
        "userId": "dnjscksdn98",
        "username": "alex"
}
```
</details>

<p></p>

<details>
<summary>서명 (Signature)</summary>

:::tip
- 서명(Signature)은 토큰을 인코딩하거나 유효성 검증을 할 때 사용하는 고유한 암호화 코드입니다. 서명은 위에서 만든 헤더(Header)와 페이로드(Payload)의 값을 각각 BASE64로 인코딩하고, 인코딩한 값을 비밀 키를 이용해 헤더(Header)에서 정의한 알고리즘으로 해싱을 하고, 이 값을 다시 BASE64로 인코딩하여 생성합니다.
:::

```javascript
  {
  "typ": "JWT",
  "alg": "HS256"
  }
```
</details>



![image](https://user-images.githubusercontent.com/107361759/187075389-cddf2072-b26e-47be-8882-b733f4fb1dd0.png)

:::tip
1.  사용자가 아이디와 비밀번호로 로그인을 한다.
2. 서버 측에서 해당 정보를 검증한다.
3. 정보가 정확하다면 서버 측에서 사용자에게 Signed 토큰을 발급한다. (Signed는 해당 토큰이 서버에서 정상적으로 발급된 토큰임을 증명하는 Signature를 가지고 있다는 것)
4. 클라이언트 측에서 전달받은 토큰을 저장해두고, 서버에 요청을 할 때마다 해당 토큰을 서버에 함께 전달한다. 이때 Http 요청 헤더에 토큰을 포함시킨다.
5. 서버는 토큰을 검증하고, 요청에 응답한다.
:::


### 종류


<details>
<summary>JWS</summary>
:::tip

JWS는 Header.Payload.Signature 구조를 가지고 있는 일반적인 JWT 를 말함.

:::

![image](https://user-images.githubusercontent.com/107361759/187082358-0a733978-dca4-44c1-8a1a-e84d492c7f9f.png)

</details>


<details>
<summary>JWE</summary>
:::tip

JWS가 Claims 를 암호화 하지 않고, Base 64 로 인코딩만 할 뿐이라 사용자 정보가 누출될 수 있다. 이를 개선하기 위해 데이터를 암호화 한 것이 JWE다.

:::

![image](https://user-images.githubusercontent.com/107361759/187082389-3b35525b-b630-4c16-9c80-783c35b041d2.png)

</details>

```javascript
// 구분방법

** 구분 방법 **

1. JWS는 3개로 분류되고, JWE는 5개로 분류 되기 때문에 각각 '.'문자가 2개, 4개 존재합니다.

2. Header의 arg 파라미터 값이 JWS는 RSA, SHA256 등이 존재하지만 JWE는
Key Encryption, Key Wrapping, Direct Key Agreement를 나타냅니다.

```



### 장점


1. 무상태성(Stateless) & 확장성(Scalability)

```jsx
- 토큰은 클라측에 저장되기 때문에, 서버는 완전히 Stateless 하다.
- 서버와의 연결고리가 없기 때문에 확장(분산)하기에 용이하다.
- 토큰 기반 인증 시스템이 아니라면, 처음 로그인 했었던 서버에만 세션 정보가 있기 때문에
  그 서버로만 요청을 받도록 설정을 해주어야 한다.
```

2. CORS 문제 해결

```jsx
- 세션 기반 인증 시스템의 문제점 중 하나인 CORS를 해결할 수 있다.
- 서비스 규모가 커지면 여러 종류의 서비스와 여러 디바이스 호환을 제공해야 하는데, 토큰을 
  사용한다면 어떤 도메인에서도 유효성 검사를 진행한 후 요청 처리 할 수 있다.
```

3. 서버 리소스

```jsx
- 세션 기반 인증 시스템은 이용자의 세션을 메모리상이나 DB, 로컬 스토리지 등에 저장하게 된다.
- So, 동시 접속자 수가 많아질 수록 서버에 부하가 많이 가게 된다.
- JWT 는 서버에 토큰을 저장하지 않기 때문에, 비교적 부하가 덜 하다.
```



### 단점


1. 토큰 자체에 정보가 담겨 있다.

```jsx
- 토큰 자체에 정보가 담겨있기 때문에, 보안에 취약할 수 있다는 단점이 있다.
- 서버쪽에 저장되어있지 않고 클라쪽에 저장되어 있기 때문에, 서버 측에서 토큰을 제어할 수
  있는 방법도 없다.
```

⇒ So, 이런 단점을 보완하기 위해서 Access Token, Refresh Token 을 각각 발급해서 처리하기도 한다.

+ 이용자가 로그아웃을 하게 되면, Access Token 을 사용하지 못하게 blacklist table 에 저장하기도 한다.

1. Payload 인코딩

```jsx
- 페이로드 자체는 암호화 된 것이 아니라, BASE64로 인코딩 된 것이기 때문에,
  중간에 Payload를 탈취하면 Data를 볼 수 있다.
```

⇒ So, 이런 단점을 보완하기 위해서 JWE로 Payload 의 데이터를 한번 더 암호화 하기도 한다. + Payload에 이용자 비밀번호와 같은 중요 데이터를 넣지 않는다.



<details>
<summary>
JWT 는 세션을 완전 대체하지 못한다??
</summary>

![image](https://user-images.githubusercontent.com/107361759/187082594-c2578996-b58e-4f86-9b46-989dc1501c53.png)

</details>



### 구현시 신경써야 할 점


1. XSS 공격

- 공격자(해커)가 클라이언트 브라우저에 Javascript를 삽입해 실행하는 공격이다.

- 공격자가 ```<input>``` 을 통해 Javascript를 서버로 전송해 서버에서 스크립트를 실행하거나, url에 Javascript를 적어 클라이언트에서 스크립트 실행이 가능하다면 공격자가 사이트에 스크립트를 삽입해 XSS 공격을 할 수 있다.

- 이때 공격자는 Javascript를 통해 사이트의 글로벌 변숫값을 가져오거나 그 값을 이용해 사이트인 척 API 콜을 요청할 수도 있다. 다시 말하면 공격자의 코드가 내 사이트의 로직인 척 행동할 수 있다는 거다.

2. CSRF 공격

- 공격자가 다른 사이트에서 우리 사이트의 API 콜을 요청해 실행하는 공격이다.

- API 콜을 요청할 수 있는 클라이언트 도메인이 누구인지 서버에서 통제하고 있지 않다면 CSRF가 가능한데, 이때 공격자가 클라이언트에 저장된 유저 인증정보를 서버에 보낼 수 있다면, 제대로 로그인한 것처럼 유저의 정보를 변경하거나 유저만 가능한 액션들을 수행할 수 있다.

- 예를 들어 CSRF에 취약한 은행 사이트가 있다면 로그인한 척 계좌 비밀번호를 바꾸거나 송금을 보낼 수 있는 것이다.



### 브라우저 저장소 종류와 보안 이슈


- LocalStorage 저장 방식

    ```jsx
    브라우저 저장소에 저장하는 방식이다. Javascript 내 글로벌 변수로 
    읽기 / 쓰기 접근이 가능하다.
    ```

    ```
    😈 : localStorage 안에 세션 id, refreshToken 또는 accessToken을 저장해두면
   XSS 취약점을 통해 그 안에 담긴 값을 불러오거나, 불러온 값을 이용해 API 콜을 위조할 수 있다.
    ```

- 쿠키 저장 방식

    ```jsx
    브라우저에 쿠키로 저장되는데, 클라이언트가 HTTP 요청을 보낼 때마다 자동으로 
    쿠키가 서버에 전송된다. Javascript 내 글로벌 변수로 읽기 / 쓰기 접근이 가능하다.
    ```

  ```
    😈 : 쿠키 저장 방식 역시 안에 세션 id, refreshToken, accessToken을 
  저장해두면 XSS 취약점이 있을 때 담긴 값들을 불러오거나, API 콜을 보내면 쿠키에 
  담긴 값들이 함께 전송되어 로그인한 척 공격을 수행할 수 있다.

  ```

  ```
    😈 : 쿠키에 세션 id나 accessToken을 저장해 인증에 이용하는 구조에 CSRF 취약점이 있다면
   인증 정보가 쿠키에 담겨 서버로 보내진다. 공격자는 유저 권한으로 정보를 가져오거나 액션을
   수행할 수 있다.
  ```

  ```
    😇 : 쿠키에 refreshToken만 저장하고 새로운 accessToken을 받아와 인증에 이용하는 
  구조에서는 CSRF 취약점 공격을 방어할 수 있다. refreshToken으로 accessToken을 받아도
    accessToken을 스크립트에 삽입할 수 없다면 accessToken을 사용해 
    유저 정보를 가져올 수 없기 때문이다. → accessToken 은 refreshToken 안에 
    payload로 저장되어있는데, XSS 공격이 불가능하다면, refreshToken 의 payload로 
    접근이 불가능하기 때문인 듯.
  ```

- secure / httpOnly 쿠키 저장 방식

    ```jsx
    브라우저에 쿠키로 저장되는 건 같지만, Javascript 내에서 접근이 불가능하다. 
    secure을 적용하면 https 접속에서만 동작한다.
    ```

  ```
  😇 : httpOnly 쿠키 방식으로 저장된 정보는 XSS 취약점 공격으로 담긴 값을 불러올 수 없다.
  ```

  ```
  😇 : httpOnly 쿠키 역시 refreshToken만 저장하고 accessToken을 
  받아와 인증에 이용하는 구조로 CSRF 공격 방어가 가능하다.
  ```

  ```
  😈 : 쿠키 저장 방식과 같은 이유로 세션 id, accessToken은 저장하면 안 된다.
  ```

  ```
  😈 : httpOnly 쿠키에 담긴 값에 접근할 수는 없지만 XSS 취약점을 노려 API 콜을 요청하면 
  httpOnly 쿠키에 담긴 값들도 함께 보내져 유저인 척 정보를 빼오거나 액션을 수행할 수 있다.
  ```

- 종합

  ```
  - 종합해보면 세션 `id`를 브라우저에 저장하는 방식은 어떤 방식이던지 보안 위험요소가 있으므로 JWT 이용한 인증 방식을 사용할 것이다. 

  - `refreshToken`만을 `secure` `httpOnly` 쿠키에 저장해 CSRF 공격을 방어할 것이다.

  - `accessToken`은 웹 어플리케이션 내 로컬 변수에 저장해 사용하며, API를 요청할 때 `Authorization` 헤더에 넣어 보내준다.

  - XSS 취약점을 이용한 API 요청 공격은 클라이언트와 서버에서 추가적으로 방어 해야 한다.

  ```

    - 정리

  ```
  * JWT로 유저 인증

  * refreshToken`을 `secure` `httpOnly` 쿠키로, `accessToken`은 JSON payload로 받아와서 웹 어플리케이션 내 로컬 변수로 이용

  * 이를 통해 CSRF 취약점 공격 방어하고, XSS 취약점 공격으로 저장된 유저 정보 읽기는 막을 수 있음

  * 하지만 XSS 취약점을 통해 API 콜을 보낼 때는 무방비하니 XSS 자체를 막기 위해 서버와 클라이언트 모두 노력해야 함
  ```



### 구현방법 1


![image](https://user-images.githubusercontent.com/107361759/187083091-e9581e41-adaa-4157-8d3b-6a837830c13a.png)


`AccessToken`와 `RefreshToken`을 이용했다. 두 토큰 모두 JWT이지만 **payload는 다르다**. 사용자는 로그인시 두 토큰을 모두 받고 `RefreshToken`은 쿠키에 저장하고 `AccessToken`을 이용해 이후 CRUD작업과 같은 서버의 자원을 활용하는 작업을 진행한다.

그러나 `next-redux-wrapper`는 페이지 이동시 데이터가 휘발되기 때문에 `AccessToken`을 계속 유지하기 힘든점을 비춰 추가적인 구조가 필요했다. 아래와 같다.


![image](https://user-images.githubusercontent.com/107361759/187083127-98e171ea-3d5e-4a0e-b2f8-a95758353af5.png)

마치 CSRF토큰처럼 `AccessToken`을 사용한다. 프로젝트의 `Feed` 페이지 내에서는 글을 올리고 댓글을 작성하고, 글을 삭제하는 등 다양한 작업을 한다. 마치 **SPA**처럼 작동하기 때문에 페이지 내에서 첫 로드 때 받은 `AccessToken`을 만료기간 내에 사용할 수 있다. 더불어 만료시 자동으로 새로운 토큰을 가져오도록 사용자의 편리상 구현했다.



### Best 옵션 (?)

가장 좋은 방법으로는`refresh token`을 사용하는 방법이 있다.

백엔드 api 개발자와 소통이 가능하다면refresh token을 httpOnly 쿠키로 설정하고url이 새로고침 될 때마다 refresh token을 request에 담아새로운 accessToken을 발급 받는다.발급 받은 accessToken은 js private variable에 저장한다.

이런 방식을 사용하는 경우,refresh token이 CSRF에 의해 사용된다 하더라도공격자는 accessToken을 알 수 없다.

CSRF는 피해자의 컴퓨터를 제어할 수 있는 것이 아니기 때문이다.요청을 위조하여 피해자가 의도하지 않은서버 동작을 일으키는 공격방법이기 때문에refresh token을 통해 받아온 response(accessToken)는공격자가 확인할 수 없다.

따라서 쿠키를 사용하여 XSS를 막고refresh token 방식을 이용하여 CSRF를 막을 수 있다.



![image](https://user-images.githubusercontent.com/107361759/187083199-b6a97570-f9c3-45ae-addc-a562e902c928.png)

![image](https://user-images.githubusercontent.com/107361759/187083213-97a9421d-be26-4e06-ac73-ec490acc190e.png)




### 참조

- 참조 :: JWT 기본 개념

  [https://mangkyu.tistory.com/55](https://mangkyu.tistory.com/55)

  [https://velog.io/@syoung125/JWT-토큰이란](https://velog.io/@syoung125/JWT-%ED%86%A0%ED%81%B0%EC%9D%B4%EB%9E%80)

  [https://velog.io/@dnjscksdn98/JWT-JSON-Web-Token-소개-및-구조](https://velog.io/@dnjscksdn98/JWT-JSON-Web-Token-%EC%86%8C%EA%B0%9C-%EB%B0%8F-%EA%B5%AC%EC%A1%B0)

- 참조 :: JWT 구현

  [https://velog.io/@yaytomato/프론트에서-안전하게-로그인-처리하기](https://velog.io/@yaytomato/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%90%EC%84%9C-%EC%95%88%EC%A0%84%ED%95%98%EA%B2%8C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0)

  [https://velog.io/@0307kwon/JWT는-어디에-저장해야할까-localStorage-vs-cookie](https://velog.io/@0307kwon/JWT%EB%8A%94-%EC%96%B4%EB%94%94%EC%97%90-%EC%A0%80%EC%9E%A5%ED%95%B4%EC%95%BC%ED%95%A0%EA%B9%8C-localStorage-vs-cookie)



