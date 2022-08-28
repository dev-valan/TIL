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


   