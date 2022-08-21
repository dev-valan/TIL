# next.js 빌드 속도 높이기

<p align="right">작성일 : 22.08.22</p>

CRN 으로 생성한 프로젝트에 코드 몇 줄 쓰지 않았는데도 빌드 속도가 너무 느렸다.

10분이 넘도록 빌드가 되지 않았는데, 원인은 늘 그렇듯 별 것 아니었다...

해결 방법을 찾는 중, 빌드 속도 높이는 방법에 대한 글이 있어, 기록 차 남긴다.


------------------

### 1. SSR 에서 CSS 생성을 사용하지 말 것

- SSR 에서 CSS 생성을 사용하면, 프로젝트 빌드 시간에 더 오래 걸린다. 


### 2. CSS 라이브러리 import 시에, 라브러리 전체를 import 하지말 것.

```javascript
import * as Icon from "@graywolfai/react-heroicons";
```
대신에
```javascript
import { BellOutline } from "@graywolfai/react-heroicons";
```
를 권장.


### 3. next.config.js에서 devtool을 변경 (테스트 해보지 않음)
```javascript
module.exports = withSass({
  webpack(config, { dev }) {
    if (dev) {
        config.devtool = 'cheap-module-source-map';
    }
    return config;
}
});
```

