# next.js 빌드 시에 ESLint 에러

<p align="right">작성일 : 22.08.22</p>

특별한 build 실패 에러가 안보이는데 eslint에러만 막 뜨다가 실패하는 경우엔 eslint때문에 빌드가 실패했다고 보면 된다. 이때는 빌드시 eslint를 무시하는 옵션을 넣어줘야 빌드가 된다.

아래와 같이 next.config.js에 빌드 무시 설정을 넣어주면 빌드가 성공한다.

------------------
### error
![image](https://user-images.githubusercontent.com/107361759/185802674-410795a1-7903-4e57-bdbf-05b5843318fd.png)



### solution

```javascript
// next.config.js
module.exports = {
    eslint: {
        ignoreDuringBuilds: true
    },
```


![image](https://user-images.githubusercontent.com/107361759/185805039-ba433dd4-9870-4178-8f24-047baf6e7780.png)

성공!



출처 : https://velog.io/@broccoliindb/next-build%EC%8B%9C-eslint-%EC%97%90%EB%9F%AC