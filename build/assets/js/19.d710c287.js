(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{283:function(t,s,a){"use strict";a.r(s);var n=a(13),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"flutter-const"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flutter-const"}},[t._v("#")]),t._v(' Flutter "const"')]),t._v(" "),s("p",{attrs:{align:"right"}},[t._v("작성일 : 22.08.18")]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"intro"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intro"}},[t._v("#")]),t._v(" Intro.")]),t._v(" "),s("p",[t._v("Flutter 를 작업하다 보면, Widget 이나 속성 값 앞에 const 키워드를 넣으라는 경고를 자주 볼 것이다.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/107361759/185408806-c73e1d34-4487-4206-a9e6-9f278b0833c0.png",alt:"image"}})]),t._v(" "),s("h3",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),s("h3",{attrs:{id:"const-사용시-이점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#const-사용시-이점"}},[t._v("#")]),t._v(" const 사용시 이점?")]),t._v(" "),s("p",[t._v("setState( ) 를 사용하면, widget tree 안에 있는 요소들이 rebuild 된다.")]),t._v(" "),s("p",[t._v("갱신이 필요하지 않는 위젯 까지 rebuild 하기 때문에,")]),t._v(" "),s("p",[t._v("static 한 widget 은 굳이 rebuild 해 줄 필요가 없다.")]),t._v(" "),s("p",[t._v("이럴 경우, const 를 사용하여, 필요한 부분만 rebuild 할 수 있다.")]),t._v(" "),s("h3",{attrs:{id:"예제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예제"}},[t._v("#")]),t._v(" 예제")]),t._v(" "),s("div",{staticClass:"language-dart line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Baz")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("위의 코드에서는, build 메서드가 실행 될 때, 'Foo' 위젯 까지만 rebuild 된다.")]),t._v(" "),s("p",[t._v("Bar 위젯은 const 이기 때문에, rebuild 되지 않는다.")]),t._v(" "),s("h3",{attrs:{id:"-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[t._v("#")])])])}),[],!1,null,null,null);s.default=r.exports}}]);