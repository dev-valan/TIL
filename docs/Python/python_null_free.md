# python 에는 null 이 없다!?

<p align="right">작성일 : 22.10.05</p>

파이썬에는 다른 언어들에 존재하는 null 이 없다.

```python

NameError                                 Traceback (most recent call last)
Cell In [13], line 16
     12         self.next_node = next_node
     13         self.value = value
---> 16 test1 = Node(null, 1)
     18 print(test1)

NameError: name 'null' is not defined

```

------------------

### null 대신 None 으로 표현한다.

```python
        self.next_node = next_node
        self.value = value
        

test1 = Node(None, 1)

print(test1)

<__main__.Node object at 0x0000016969A75630>

```