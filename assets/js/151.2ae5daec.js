(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{754:function(e,t,s){"use strict";s.r(t);var o=s(1),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"go-interfaces"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#go-interfaces"}},[e._v("#")]),e._v(" Go Interfaces")]),e._v(" "),s("p",[e._v("It is time to look at interfaces in Go. After that, you will briefly examine testing in Go.")]),e._v(" "),s("p",[e._v('Go offers the so-called "interface type". This is a collection of method signatures. An interface value can hold any value that implements those methods. Try it:')]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"cGFja2FnZSBtYWluCmltcG9ydCAoCiAgICAmcXVvdDtmbXQmcXVvdDsKICAgICZxdW90O21hdGgmcXVvdDsKKQp0eXBlIFZlY3RvcjNEIHN0cnVjdCB7CiAgICB4LCB5LCB6IGZsb2F0NjQKfQp0eXBlIFZlY3RvcjJEIHN0cnVjdCB7CiAgICB4LCB5IGZsb2F0NjQKfQp0eXBlIE51bWJlciBmbG9hdDY0CnR5cGUgRXVjbGlkIGludGVyZmFjZSB7CiAgICBOb3JtKCkgZmxvYXQ2NAp9CmZ1bmMgKHYgVmVjdG9yM0QpIE5vcm0oKSBmbG9hdDY0IHsKICAgIHJldHVybiBtYXRoLlNxcnQodi54KnYueCArIHYueSp2LnkgKyB2Lnoqdi56KQp9CmZ1bmMgKHYgVmVjdG9yMkQpIE5vcm0oKSBmbG9hdDY0IHsKICAgIHJldHVybiBtYXRoLlNxcnQodi54KnYueCArIHYueSArIHYueSkKfQpmdW5jIChuIE51bWJlcikgTm9ybSgpIGZsb2F0NjQgewogICAgaWYgbiAmZ3Q7IDAgewogICAgICAgIHJldHVybiBmbG9hdDY0KG4pCiAgICB9CiAgICByZXR1cm4gLWZsb2F0NjQobikKfQpmdW5jIG1haW4oKSB7CiAgICB2YXIgdiBFdWNsaWQKICAgIHYgPSBWZWN0b3IzRHsxLCAyLCAzfQogICAgZm10LlByaW50bG4odi5Ob3JtKCkpCiAgICB2ID0gVmVjdG9yMkR7MSwgMn0KICAgIGZtdC5QcmludGxuKHYuTm9ybSgpKQogICAgdiA9IE51bWJlcigtMi41KQogICAgZm10LlByaW50bG4odi5Ob3JtKCkpCn0K"}}),e._v(" "),s("HighlightBox",{attrs:{type:"tip"}},[s("p",[s("a",{attrs:{href:"https://go.dev/play/p/lOEgFlWL2JI",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test it online"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("p",[e._v("You see the declaration of the three types and methods as before. You have also declared an additional interface, "),s("code",[e._v("Euclid")]),e._v(", which includes a method signature "),s("code",[e._v("Norm() float64")]),e._v(". Since all defined types implement the "),s("code",[e._v("Norm")]),e._v(" method, You can now use the "),s("code",[e._v("Euclid")]),e._v(" interface to hold the instances of those types.")]),e._v(" "),s("p",[e._v("There is a special empty interface: "),s("code",[e._v("interface{}")]),e._v(". Because it has no method signatures, it is implemented by all types and can be used to hold values of any type:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"cGFja2FnZSBtYWluCmltcG9ydCAmcXVvdDtmbXQmcXVvdDsKZnVuYyBtYWluKCkgewogICAgdmFyIGkgaW50ZXJmYWNle30KICAgIGkgPSAyCiAgICBmbXQuUHJpbnRsbihpKQogICAgaSA9ICZxdW90O1Rlc3QmcXVvdDsKICAgIGZtdC5QcmludGxuKGkpCiAgICBzLCBvayA6PSBpLihzdHJpbmcpCiAgICBmbXQuUHJpbnRsbihzLCBvaykKfQo="}}),e._v(" "),s("HighlightBox",{attrs:{type:"tip"}},[s("p",[s("a",{attrs:{href:"https://go.dev/play/p/p9bTIVlCPfr",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test it online"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("p",[e._v("The syntax for direct access to the underlying value of the interface value is "),s("code",[e._v("i.(T)")]),e._v(". This is useful for "),s("em",[e._v("type switches")]),e._v(". In the next module, you will learn the control constructs.")]),e._v(" "),s("h2",{attrs:{id:"simple-unit-test"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-unit-test"}},[e._v("#")]),e._v(" Simple unit test")]),e._v(" "),s("p",[e._v("Go offers the testing package "),s("code",[e._v("testing")]),e._v(" and a tool called "),s("code",[e._v("go test")]),e._v(". These are very helpful.")]),e._v(" "),s("p",[e._v("To explore the basics, first, write a function "),s("code",[e._v("sum")]),e._v(". This is the function you will test:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"cGFja2FnZSBzdW11dGlsCmZ1bmMgU3VtKGEsYiBpbnQpIChzIGludCkgewogICAgZm9yIGk6PWE7IGkmbHQ7PWI7IGkrKyB7CiAgICAgICAgcys9aQogICAgfSAKICAgIHJldHVybgp9Cg=="}}),e._v(" "),s("p",[e._v("You should be able to see what this does and know that it probably works. Even so, you should test it.")]),e._v(" "),s("p",[e._v("Save the previous program as "),s("code",[e._v("sum.go")]),e._v(" in a folder "),s("code",[e._v("sumutil")]),e._v(". Then make another file with the following:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"cGFja2FnZSBzdW11dGlsCmltcG9ydCAmcXVvdDt0ZXN0aW5nJnF1b3Q7CmZ1bmMgVGVzdFN1bSh0ICp0ZXN0aW5nLlQpIHsKICAgIGNhc2VzIDo9IFtdc3RydWN0IHsKICAgICAgICBzdGFydCwgZW5kLCByZXN1bHQgaW50CiAgICB9ewogICAgICAgICAgICB7IDUsIDYsIDExIH0sCiAgICAgICAgICAgIHsgMSwgOSwgNDUgfSwgLy8gKDErOSkrKDIrOCkrKDMrNykrKDQrNikrNT00NQogICAgICAgICAgICB7IDAsIDksIDQ1IH0sIAogICAgICAgICAgICB7IDEsIDMsIDYgfSwKICAgICAgICAgICAgeyAxMCwgMTksIDE0NSB9LCAvLyAxMCsoMTArMSkrKDEwKzIpKy4uLisoMTArOSk9CiAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxMCoxMCtzdW0oMSw5KT0xNDUKICAgIH0KICAgIGZvciBfLCBjIDo9IHJhbmdlIGNhc2VzIHsKICAgICAgICBpZiBnb3QgOj0gU3VtKGMuc3RhcnQsIGMuZW5kKTsgZ290ICE9IGMucmVzdWx0IHsKICAgICAgICAgICAgdC5FcnJvcmYoJnF1b3Q7U3VtKCV2LCV2KSBnb3QgJXYsIHdhbnQgJXYmcXVvdDssIGMuc3RhcnQsIGMuZW5kLGdvdCwgYy5yZXN1bHQpCiAgICAgICAgfQogICAgfQp9CmZ1bmMgQmVuY2htYXJrU3VtKGIgKnRlc3RpbmcuQikgewogICAgZm9yIGk6PTA7IGkmbHQ7Yi5OOyBpKysgewogICAgICAgIFN1bSgwLGkpCiAgICB9Cn0K"}}),e._v(" "),s("p",[e._v("Save this file as "),s("code",[e._v("sum_test.go")]),e._v(". Now run "),s("code",[e._v("go test")]),e._v(".")]),e._v(" "),s("p",[e._v("You will see that it passes the test.")]),e._v(" "),s("HighlightBox",{attrs:{type:"note"}},[s("p",[e._v("A test function has the syntax "),s("code",[e._v("TestXXX")]),e._v(".")]),e._v(" "),s("p",[e._v("A benchmark function has the syntax "),s("code",[e._v("BenchXXX")]),e._v(".")])]),e._v(" "),s("p",[e._v("Use "),s("code",[e._v("go test -help")]),e._v(" to see what you need to run benchmarks.")]),e._v(" "),s("h2",{attrs:{id:"rob-demonstrates-go-interfaces"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rob-demonstrates-go-interfaces"}},[e._v("#")]),e._v(" Rob demonstrates Go interfaces")]),e._v(" "),s("YoutubePlayer",{attrs:{videoId:"dnOCJApbJB8"}}),e._v(" "),s("HighlightBox",{attrs:{type:"reading"}},[s("p",[s("strong",[e._v("Further readings:")])]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://golang.org/pkg/testing/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Testing package"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://blog.alexellis.io/golang-writing-unit-tests/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Writing unit tests"),s("OutboundLink")],1)])])]),e._v(" "),s("h2",{attrs:{id:"next-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-up"}},[e._v("#")]),e._v(" Next up")]),e._v(" "),s("p",[e._v("Basics and interfaces are covered, what's next? Take a closer look at the control structures in Go by diving into "),s("code",[e._v("if")]),e._v(", "),s("code",[e._v("switch")]),e._v(", and "),s("code",[e._v("for")]),e._v(" statements in the "),s("RouterLink",{attrs:{to:"/academy/golang-intro/4_control.html"}},[e._v("next section")]),e._v(".")],1)],1)}),[],!1,null,null,null);t.default=a.exports}}]);