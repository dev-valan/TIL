(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{290:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"flutter-const-vs-final-keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flutter-const-vs-final-keyword"}},[t._v("#")]),t._v(' Flutter "const" VS "final" keyword')]),t._v(" "),s("p",{attrs:{align:"right"}},[t._v("작성일 : 22.08.19")]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"intro"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intro"}},[t._v("#")]),t._v(" Intro.")]),t._v(" "),s("p",[t._v("Flutter 에서 상수를 선언 하는 방법에는 const 와 final 두 가지 keyword 가 있다.")]),t._v(" "),s("p",[t._v("명확하게 알지 못하고 사용 했었는데, 둘의 차이점을 정리해보자.")]),t._v(" "),s("h3",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),s("h3",{attrs:{id:"const-vs-final"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#const-vs-final"}},[t._v("#")]),t._v(" const Vs final")]),t._v(" "),s("p",[t._v("이전 글에서 왜 상수(const) 를 사용해야하는지, flutter 에서 이점은 무엇인지에 대해 적었다.")]),t._v(" "),s("p",[t._v("이번 글에선, 상수를 선언하는데 사용되는 두 가지 키워드에 대해서 알아봤다.")]),t._v(" "),s("p",[t._v("const 와 final 키워드는 둘 다 상수를 선언할 때 사용되며, 한 번 값이 할당 되면 변경하지 못한다.")]),t._v(" "),s("p",[t._v("두 키워드의 가장 명확한 차이점은, 어느 타이밍에 값이 할당 되는지이다.")]),t._v(" "),s("div",{staticClass:"language-dart line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 컴파일 시점\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 런타임 시점\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("컴파일은 프로그래밍 언어가, 로우레벨(low-level) 언어로 번역되는 시점이고,")]),t._v(" "),s("p",[t._v("런타임은 실제로 프로그램이 실행되는 시점이다.")]),t._v(" "),s("p",[t._v("이 정도로만 보면, 둘의 명확한 차이가 잘 보이지 않는다.")]),t._v(" "),s("p",[t._v("가장 많이 사용되는 예제로, 둘의 차이점을 살펴보자")]),t._v(" "),s("div",{staticClass:"language-dart line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" myDate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myDate2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myDate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myDate2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("dartpad 에서 해당 코드를 실행시켜보면 에러가 뜬다.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/107361759/185632747-f64130c6-c12a-4690-9217-06b8530cd63e.png",alt:"image"}})]),t._v(" "),s("p",[t._v("const 는 컴파일 시 계산할 수 있는 데이터로 생성되어야 하는데,")]),t._v(" "),s("p",[t._v("DateTime.now() 는 런타임에 실행되는 시간을 반환하기 때문에 에러가 발생한다.")]),t._v(" "),s("p",[t._v("따라서 둘의 차이점을 명확히 이해하고, 구분해서 사용하자.")]),t._v(" "),s("h3",{attrs:{id:"참고"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#참고"}},[t._v("#")]),t._v(" 참고")]),t._v(" "),s("p",[t._v("https://sanjibsinha.com/flutter-final-vs-const/")]),t._v(" "),s("p",[t._v("https://flutteragency.com/difference-between-the-const-and-final-keywords/")])])}),[],!1,null,null,null);s.default=e.exports}}]);