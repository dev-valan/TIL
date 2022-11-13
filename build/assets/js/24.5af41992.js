(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{288:function(t,s,a){"use strict";a.r(s);var e=a(13),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"flutter-gesture-detector-behavior"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flutter-gesture-detector-behavior"}},[t._v("#")]),t._v(" Flutter Gesture Detector Behavior")]),t._v(" "),s("p",{attrs:{align:"right"}},[t._v("작성일 : 22.10.14")]),t._v(" "),s("p",[t._v("Gesture Detector 위젯을 사용시에, onTap 이 작동 할때도 있고, 안 할때도 있었다.")]),t._v(" "),s("p",[t._v("아래 이미지 처럼, Container 에 Background Color 가 들어가 있으면 제대로 작동 했고,")]),t._v(" "),s("p",[t._v("없으면 제대로 작동 하지 않았다.")]),t._v(" "),s("p",[t._v("![flutter_init_setting_1.png](../images/gesture detector flutter_init_setting_1.png)")]),t._v(" "),s("p",[t._v("![flutter_init_setting_1.png](../images/gesture detector img 2.png)")]),t._v(" "),s("ul",[s("li",[t._v("GestureDetector 위젯은, 기본적으로 실제 하위 위젯의 크기만큼 터치 범위가 설정되기 때문이다.")]),t._v(" "),s("li",[t._v("GestureDetector 의 behavior 속성을 변경해주면 된다.")])]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"사용법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),s("div",{staticClass:"language-dart line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GestureDetector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    behavior"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HitTestBehavior")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("        \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("ul",[s("li",[s("p",[t._v("HitTestBehavior 에는 아래의 세 가지 값이 있다.")]),t._v(" "),s("ul",[s("li",[t._v("deferToChild : 자식 중 한 명이 자신의 자식인 경우에만 자식에게 순응하는 대상이 자신의 범위 내에서 이벤트를 수신합니다.")]),t._v(" "),s("li",[t._v("opaque : 불투명한 대상은 hit test에 의해 hit 될 수 있으므로 둘다 해당 범위 내에서 이벤트를 수신하고 시각적으로 뒤에 있는 대상도 이벤트를 수신하지 못하도록 한다.")]),t._v(" "),s("li",[t._v("translucent : 반투명 타겟은 경계 내에서 이벤트를 수신하고 시각적으로 뒤에 있는 타겟도 이벤트를 수신하도록 허용한다.")])])]),t._v(" "),s("li",[s("p",[t._v("opaque 속성을 줘서, 빈 공간에서도 클릭 이벤트가 적용 되게 변경하였다.")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);