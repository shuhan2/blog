function Foo(){}
Foo.prototype = {}
var a =new Foo()
a.constructor === Foo;