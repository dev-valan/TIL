# Input 깔끔하게 handling 하기.

<p align="right">작성일 : 22.08.16</p>


------------------

### 📚 예제

```javascript

import React, { useState } from 'react';

const EventPractice = () => {
    
    const [username, setUsername] = useState('');
    const [msg, setMsg] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMsg = e => setMsg(e.target.value);
    const onClick = () => {
        setUsername('');
        setMsg('');
    }
    const onKeyPress = e => {
        if(e.key === 'Enter'){
            onClick();
        }
    };
    
    return (
        <div>
            <h1> Texxt </h1>
            <input 
                type="text"
                name="username"
                placeholder="이름"
                value={username}
                onchange={onChangeUsername}
            />
            
            <input
                type="text"
                name="msg"
                placeholder="msg input"
                value={msg}
                onchange={onChangeMsg}
                onkeypress={onKeyPress}
            />
            <button onclick={onClick}> 확인 </button>
            
        </div>
    );
}
```

- event 객체를 사용해서 깔끔하게 처리할 수 있다.